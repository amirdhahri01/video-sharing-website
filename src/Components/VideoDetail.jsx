import { Paper, Typography } from "@mui/material";
const VideoDetail = ({
  video: {
    id: { videoID },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoID) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${videoID}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          style={{ border: "none", height: "100%", width: "100%" }}
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}></Paper>
    </React.Fragment>
  );
};
export default VideoDetail;

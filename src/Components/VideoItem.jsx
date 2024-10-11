import { Grid2, Typography, Paper } from "@mui/material";
const VideoItem = ({ video, onVideoSelected }) => {
  return (
    <Grid2 size={{ xs: 12 }}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => {
          onVideoSelected(video);
        }}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid2>
  );
};

export default VideoItem;

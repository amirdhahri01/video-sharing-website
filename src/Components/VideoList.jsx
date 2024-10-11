import { Grid2 } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const listOfVideos = videos.map((video) => {
    <VideoItem
      onSelectVideo={onSelectVideo}
      key={video.videoId}
      video={video}
    />;
  });
  return (
    <Grid2 container spacing={10}>
      {listOfVideos}
    </Grid2>
  );
};
export default VideoList;

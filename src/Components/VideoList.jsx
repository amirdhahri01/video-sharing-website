import { Grid2 } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      onVideoSelected={onVideoSelected}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <Grid2 container spacing={10}>
      {listOfVideos}
    </Grid2>
  );
};
export default VideoList;

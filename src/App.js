import React, { useState } from "react";
import "./App.css";
import { Grid2 } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./Components/SearchBar";
import VideoDetail from "./Components/VideoDetail";
import VideoList from "./Components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({
    id: {},
    snippet: {},
  });
  return (
    <Grid2 justifyContent={"center"} container spacing={10}>
      <Grid2 size={{ xs: 11 }}>
        <Grid2 size={{ xs: 12 }}>
          <SearchBar onSubmit={handleSubmit} />
        </Grid2>
        <Grid2 size={{ xs: 8 }}>
          <VideoDetail video={selectedVideo} />
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <VideoList videos={videos} onVideoSelected={setSelectedVideo} />
        </Grid2>
      </Grid2>
    </Grid2>
  );
  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAn-laDBTyy2PJ7IMx6rG5wMdMj_IPP_8Q",
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;

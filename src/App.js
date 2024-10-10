import React from "react";
import "./App.css";
import { Grid2 } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <Grid2 justifyContent={"center"} container spacing={10}>
      <Grid2 size={{ xs: 11 }}>
        <Grid2 size={{ xs: 12 }}>
          <SearchBar onSubmit={handleSubmit} />
        </Grid2>
        <Grid2 size={{ xs: 8 }}>{/* {VideoDetail} */}</Grid2>
        <Grid2 size={{ xs: 4 }}>{/* {VideoList} */}</Grid2>
      </Grid2>
    </Grid2>
  );
  async function handleSubmit(searchTerm) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAn-laDBTyy2PJ7IMx6rG5wMdMj_IPP_8Q",
        q: searchTerm,
      },
    });
    console.log("response", response.data.items);
  }
}

export default App;

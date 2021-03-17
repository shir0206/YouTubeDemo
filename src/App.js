import "./App.css";
import { Search } from "./components/Search/Search";
import { YoutubeCardsList } from "./components/YoutubeCardsList/YoutubeCardsList";
import youtubeApi from "./api/youtube";
import React, { useState } from "react";

function App() {
  const [videosFound, setVideosFound] = useState({
    videoMetaInfo: [],
    selectedVideoId: null,
  });

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    setVideosFound({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });

    console.log(response.data.items);
  };



  return (
    <div className="App">
      <Search onSearch={onSearch}></Search>
      <YoutubeCardsList videosFound={videosFound}></YoutubeCardsList>
    </div>
  );
}

export default App;

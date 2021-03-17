import React from "react";
import { YoutubeVideoCard } from "../YoutubeVideoCard/YoutubeVideoCard";

import "./YoutubeCardsList.css";

export const YoutubeCardsList = (props) => {
  return (
    <ul>
      {props.videosFound.videoMetaInfo.map((video) => (
        <YoutubeVideoCard
          key={video.id}
          snippet={video.snippet}
        ></YoutubeVideoCard>
      ))}
    </ul>
  );
};

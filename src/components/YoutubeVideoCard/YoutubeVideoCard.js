import React from "react";

import "./YoutubeVideoCard.css";

export const YoutubeVideoCard = (props) => {
  console.log("snippet", props.snippet);
  return (
    <li className="card-container">
      <div>
        <img
          src={props.snippet.thumbnails.high.url}
          className="card-img"
          alt={props.snippet.title}
        ></img>
      </div>
      <div>
        <h2>{props.snippet.title}</h2>
        <h6>{props.snippet.publishTime + " years ago"}</h6>
        <h4>{props.snippet.channelTitle}</h4>
        <p>{props.snippet.description}</p>
      </div>
    </li>
  );
};

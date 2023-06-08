import React from "react";
import ReactPlayer from "react-player";

function MovieDetailVideoBackground({ videoList }) {
  return (
    <ReactPlayer
      // className="absolute mt-[-16rem]"
      className="mt-[-16rem] fixed z-[-1]"
      width="100%"
      height="100%"
      url={`https://www.youtube.com/watch?v=${
        videoList[Math.floor(Math.random() * videoList.length)]?.key ||
        "b9EkMc79ZSU"
      }`}
      playing
      muted
      loop={true}
    />
  );
}

export default MovieDetailVideoBackground;

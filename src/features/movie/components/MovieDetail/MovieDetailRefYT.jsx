import React from "react";
import ReactPlayer from "react-player";

function MovieDetailRefYT({ videoList }) {
  return (
    <div
      className="w-full px-[2rem] md:px-[4rem] xl:px-[6.5rem] 2xl:px-[13rem]
                mt-[2rem] lg:mt-[5rem] duration-100 transition-all delay-[30ms]"
    >
      {videoList?.splice(0, 2)?.map((video) => (
        <div key={video.id} className="mb-10">
          <div className="text-[1.5rem] mb-2 font-bold">
            {video?.name || "VID NAME"}
          </div>
          <ReactPlayer
            className="shadow-fuchsia-500/50 shadow-lg rounded-lg 
        max-h-[18rem] sm:max-h-[22rem] md:max-h-[24rem]
         lg:max-h-[30rem] xl:max-h-[34rem] 2xl:max-h-[40rem] 
         duration-100 transition-all delay-[30ms]"
            controls
            url={`https://www.youtube.com/watch?v=${video?.key}`}
            muted
            width="100%"
            height="40rem"
          />
        </div>
      ))}
    </div>
  );
}

export default MovieDetailRefYT;

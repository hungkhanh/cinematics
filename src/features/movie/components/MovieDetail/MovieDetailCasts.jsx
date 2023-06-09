import React from "react";
import { randomRange } from "../../../../utils";

function MovieDetailCasts({ info }) {
  const imgLink = `https://picsum.photos/id/${randomRange(1, 200)}/1000/1000`;

  return (
    <div className="hover:-translate-0.5 hover:scale-110 duration-100 transition-all delay-[30ms]">
      <img
        src={
          (info?.profile_path &&
            `${"https://image.tmdb.org/t/p/original" + info.profile_path}`) ||
          `${imgLink}`
        }
        className="h-[9rem] min-w-[7rem] rounded-md shadow-emerald-500/50 shadow-lg mb-2
"
      />
      <div>{info.name}</div>
    </div>
  );
}

export default MovieDetailCasts;

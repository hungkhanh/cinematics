import React from "react";
import { randomRange, removeFirstSlash } from "../../../../utils";
import MovieDetailGuestReviewsContent from "./MovieDetailGuestReviewsContent";

function MovieDetailGuestReviews({ rev }) {
  const imgLink = `https://picsum.photos/id/${randomRange(1, 200)}/1000/1000`;
  return (
    <div
      className="text-white flex gap-4 mb-[1.5rem] bg-[#222] py-5 px-7 rounded-lg 
        border-b-2 border-b-lime-500 shadow-lime-500/50 shadow-md"
    >
      <img
        className="w-[3rem] h-[3rem] rounded-full"
        src={
          (rev?.author_details?.avatar_path &&
            removeFirstSlash(rev?.author_details?.avatar_path)) ||
          `${imgLink}`
        }
      />
      <MovieDetailGuestReviewsContent rev={rev} />
    </div>
  );
}

export default MovieDetailGuestReviews;

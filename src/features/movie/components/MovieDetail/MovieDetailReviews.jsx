import React from "react";
import { sortedTimestamps } from "../../../../utils/sortTimestamps";
import { removeFirstSlash, truncateText } from "../../../../utils";
import moment from "moment";

function MovieDetailReviews({ reviewList }) {
  return (
    <div
      className="w-full px-[2rem] md:px-[4rem] xl:px-[6.5rem] 2xl:px-[13rem]
  mt-[2rem] lg:mt-[5rem] duration-100 transition-all delay-[30ms]"
    >
      <div className="text-2xl inline-block font-bold mb-4 border-b-4 border-b-rose-600 pb-1">
        Reviews ({reviewList.length})
      </div>

      <div className="post-cmt-container pb-5 border-b-2 border-b-slate-700 mb-12">
        <div className="cmt flex gap-3">
          <img
            src={`https://picsum.photos/200`}
            className="w-[3rem] h-[3rem] rounded-full"
            alt=""
          />
          <div className="flex flex-col w-full">
            <div className="name mb-3 text-2xl font-semibold">Your name</div>
            <textarea
              className="mb-3 bg-[#111] w-full h-[6rem] p-2 outline-none border border-slate-400 
          rounded-md"
              placeholder="Write your review..."
            ></textarea>
            <button
              className="bg-rose-600 w-[8.5rem] p-2 rounded-lg font-semibold
        hover:-translate-0.5 hover:scale-110 duration-100 transition-all delay-[30ms]"
            >
              <span className="mr-1">POST</span>
              <i class="fa-solid fa-share"></i>
            </button>
          </div>
        </div>
      </div>

      {sortedTimestamps(reviewList).map((rev) => (
        <div
          key={rev.id}
          className="text-white flex gap-4 mb-[1.5rem] bg-[#222] py-5 px-7 rounded-lg 
      border-b-2 border-b-lime-600 "
        >
          <img
            className="w-[3rem] h-[3rem] rounded-full"
            src={
              (rev?.author_details?.avatar_path &&
                removeFirstSlash(rev?.author_details?.avatar_path)) ||
              `https://picsum.photos/200`
            }
          />
          <div className="flex flex-col">
            <div className="mb-2 text-2xl font-semibold">
              {rev.author_details.username}
            </div>
            <div className="mb-3 text-sm">
              {moment(rev.updated_at).format("DD/MM/YYYY HH:mm")}
            </div>
            <div className="">
              {truncateText(rev.content, 500)}
              <span>See more...</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieDetailReviews;

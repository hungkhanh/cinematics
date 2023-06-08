import React from "react";

function MovieDetailYourReview() {
  return (
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
          <i className="fa-solid fa-share"></i>
        </button>
      </div>
    </div>
  );
}

export default MovieDetailYourReview;

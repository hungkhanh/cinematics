import React from "react";
import { useNavigate } from "react-router-dom";

function MovieDetailRecommendations({ recommendedvideoList }) {
  const navigate = useNavigate();
  const recommendationsClick = (rcmId) => {
    navigate(`/movie/${rcmId}`, { top: true });
  };
  return (
    <div className="w-full px-[2rem] md:px-[4rem] mt-[6rem]">
      <div className="text-[1.75rem] font-bold">Recommendations</div>
      <div
        className="hide-scroll py-6 px-3 md:px-7 h-[30rem] flex gap-3 md:gap-5 overflow-x-scroll overflow-y-hidden 
  scroll-smooth"
      >
        {recommendedvideoList?.map((item) => (
          <div
            onClick={() => recommendationsClick(item.id)}
            key={item.id}
            className="hover:cursor-pointer hover:-translate-0.5
      hover:scale-110 duration-100 transition-all delay-[30ms] "
          >
            <img
              src={
                (item &&
                  ((item?.backdrop_path &&
                    `${
                      "https://image.tmdb.org/t/p/original" + item.backdrop_path
                    }`) ||
                    (item?.poster_path &&
                      `${
                        "https://image.tmdb.org/t/p/original" + item.poster_path
                      }`))) ||
                "https://picsum.photos/1900 "
              }
              alt="fail"
              className="h-[10rem] sm:h-[14rem] md:h-[15rem] xl:h-[20rem] min-w-[8rem] sm:min-w-[10rem]
           md:min-w-[11rem] xl:min-w-[14rem]
           rounded-xl bg-auto 
          object-cover bg-center shadow-cyan-500/50 shadow-lg mb-2"
            />
            <div className="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem]">
              {item?.title || "Name"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetailRecommendations;

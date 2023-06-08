import React from "react";

function MovieDetailInfo({ movie, credit }) {
  return (
    <div className="w-full flex justify-center gap-9 px-8 md:px-14 lg:p-12 xl:p-0 duration-100 transition-all delay-[30ms]">
      {/* Thumbnail n IMDB */}
      <div className="hidden xl:block xl:w-[30%] 2xl:w-[20%] lg:h-[32rem] duration-100 transition-all delay-[30ms]">
        <img
          className="h-full w-full bg-auto object-cover bg-center shadow-rose-500/50 rounded-3xl 
        shadow-lg"
          src={
            (movie &&
              ((movie?.backdrop_path &&
                `${
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                }`) ||
                (movie?.poster_path &&
                  `${
                    "https://image.tmdb.org/t/p/original" + movie.poster_path
                  }`))) ||
            "https://picsum.photos/1900"
          }
          alt="failImg"
        />
        <div className="flex font-semibold text-xl mt-4">
          IMDB: {movie?.vote_average}
        </div>
      </div>

      <div className="w-full xl:w-[50%] mt-[-1rem] md:mt-[-4rem] xl:mt-[-1rem] duration-100 transition-all delay-[30ms]">
        {/* Title */}
        <div
          className="text-[4rem] sm:text-[4.2rem] md:text-[4.4rem] lg:text-[4.5rem] xl:text-[4.6rem]
     font-bold w-full leading-[5rem] duration-100 transition-all delay-[30ms]"
        >
          {movie?.original_title || movie?.title}
        </div>

        <div
          className="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] flex flex-wrap 2xl:flex-nowrap gap-3
     items-center my-4 duration-100 transition-all delay-[30ms]"
        >
          {movie?.genres.map((genre) => (
            <div
              key={genre.id}
              className="rounded-3xl px-[1rem] lg:px-[2rem] py-2 text-center font-semibold
             border-white border-2 bg-[#111] hover:text-amber-500 hover:border-amber-500
             hover:shadow-amber-500/50 shadow-lg hover:-translate-0.5 hover:scale-110 duration-100 
             transition-all delay-[30ms] hover:cursor-pointer"
            >
              {genre?.name}
            </div>
          ))}
        </div>
        <div className="text-justify mb-4">{movie?.overview}</div>
        <div className="block lg:hidden font-semibold text-xl my-2">
          IMDB: {movie?.vote_average}
        </div>

        {/* Casts */}

        <div className="font-semibold text-2xl">Casts</div>
        <div
          className="hide-scroll h-[15rem] px-2 py-4 flex gap-3 overflow-x-scroll 
    overflow-y-hidden scroll-smooth
    
    "
        >
          {credit?.cast.map((info) => (
            <div
              key={info.cast_id}
              className="hover:-translate-0.5 hover:scale-110 duration-100 transition-all delay-[30ms]"
            >
              <img
                src={
                  (info?.profile_path &&
                    `${
                      "https://image.tmdb.org/t/p/original" + info.profile_path
                    }`) ||
                  "https://picsum.photos/1900"
                }
                alt="fail"
                className="h-[9rem] min-w-[7rem] rounded-md shadow-emerald-500/50 shadow-lg mb-2
            "
              />
              <div>{info.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailInfo;

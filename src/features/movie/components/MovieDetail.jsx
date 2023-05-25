import { Box } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axiosTMDB from "../../../api/axiosTMDB";
import { API_KEY } from "../../../utils/constants";
import "./MovieDetail.css";
import ReactPlayer from "react-player";

function MovieDetail() {
  const { movie_id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [recommendedvideoList, setRecommendedVideoList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosTMDB.get(
          `/movie/${movie_id}?api_key=${API_KEY}`
        );
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      try {
        const response = await axiosTMDB.get(
          `/movie/${movie_id}/credits?api_key=${API_KEY}`
        );
        setCredit(response);
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      try {
        const response = await axiosTMDB.get(
          `/movie/${movie_id}/videos?api_key=${API_KEY}`
        );
        setVideoList(response?.results);
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      try {
        const response = await axiosTMDB.get(
          `/movie/${movie_id}/recommendations?api_key=${API_KEY}`
        );
        setRecommendedVideoList(response?.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movie_id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [movie_id]);

  const recommendationsClick = (rcmId) => {
    navigate(`/movie/${rcmId}`, { top: true });
  };

  const checkHeightForRendering = (list) => {
    if (list.length === 0) {
      return `h-[80rem] sm:h-[80rem]`;
    }
    if (list.length === 1) {
      return `h-[95rem] sm:h-[135rem]`;
    }
    if (list.length === 2) {
      return `h-[120rem] sm:h-[135rem] md:h-[140rem] lg:h-[155rem] xl:h-[170rem] 2xl:h-[180rem]`;
    }
    if (list.length === 3) {
      return `h-[145rem] sm:h-[165rem] md:h-[170rem] lg:h-[190rem] 2xl:h-[225rem]`;
    }
  };

  return (
    <div
      className={checkHeightForRendering(videoList?.splice(0, 2))}
      style={{ textShadow: "1px 1px #333" }}
    >
      <div className="h-[70rem] relative w-full ">
        <ReactPlayer
          className="absolute mt-[-16rem]"
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${
            videoList[Math.floor(Math.random() * videoList.length)]?.key ||
            "4Sfu5eAQ5sk"
          }`}
          playing
          muted
          loop={true}
        />
        <div className="absolute w-full text-white z-10 mt-[8rem] md:mt-[12rem] duration-100 transition-all delay-[30ms]">
          {/* Info */}
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
                        "https://image.tmdb.org/t/p/original" +
                        movie.backdrop_path
                      }`) ||
                      (movie?.poster_path &&
                        `${
                          "https://image.tmdb.org/t/p/original" +
                          movie.poster_path
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
                       border-white border-2 bg-[#111]"
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
                className="row-cast h-[15rem] px-2 py-4 flex gap-3 overflow-x-scroll 
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
                            "https://image.tmdb.org/t/p/original" +
                            info.profile_path
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

          {/* Ref Youtube */}
          {/* w-[90%] md:w-[83%] lg:w-[60%] mx-auto */}
          {videoList.length > 0 && (
            <div
              className="
            w-full px-[2rem] md:px-[4rem] xl:px-[6.5rem] 2xl:px-[13rem]
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
          )}

          {/* Recommendations */}
          <div className="w-full px-[2rem] md:px-[4rem] mt-[6rem]">
            <div className="text-[1.75rem] font-bold">Recommendations</div>
            <div
              className="row-cast py-6 px-3 md:px-7 h-[30rem] flex gap-3 md:gap-5 overflow-x-scroll overflow-y-hidden 
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
                            "https://image.tmdb.org/t/p/original" +
                            item.backdrop_path
                          }`) ||
                          (item?.poster_path &&
                            `${
                              "https://image.tmdb.org/t/p/original" +
                              item.poster_path
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
        </div>
        <Box
          className="fade-bottom"
          sx={{
            height: "100%",
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(27, 27, 27, 0.61),#000)",
            position: "absolute",
            width: "100%",
          }}
        ></Box>
      </div>
    </div>
  );
}

export default MovieDetail;

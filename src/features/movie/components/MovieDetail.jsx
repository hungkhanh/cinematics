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

  return (
    <div className="h-[225rem]" style={{ textShadow: "1px 1px #333" }}>
      <div className="h-[70rem] relative w-full ">
        <ReactPlayer
          className="absolute mt-[-11rem]"
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${
            videoList[Math.floor(Math.random() * videoList.length - 1)]?.key
          }`}
          playing
          muted
          loop="true"
        />
        <div className="absolute w-full text-white z-10 mt-[12rem]">
          {/* Info */}
          <div className="flex justify-center gap-9 ">
            <div className="w-[20%] sm:h-[32rem]">
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

            <div className="w-[50%] mt-[-1rem]">
              <div className="text-[4.2rem] sm:text-[4.6rem] font-bold w-[80%] leading-[5rem]">
                {movie?.original_title || movie?.title}
              </div>

              <div className="flex gap-3 items-center">
                {movie?.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="rounded-3xl px-[2rem] mt-6 mb-4 py-2 text-center font-semibold
                       border-white border-2 bg-[#111]"
                  >
                    {genre?.name}
                  </div>
                ))}
              </div>
              <div className="text-justify mb-4">{movie?.overview}</div>
              <div className="hidden sm:flex font-semibold text-xl my-2">
                IMDB: {movie?.vote_average}
              </div>
              <div className="font-semibold text-2xl">Casts</div>
              <div
                className="row-cast h-[14rem] px-2 py-4 flex gap-3 overflow-x-scroll 
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
          <div className="w-[72.5%] mx-auto my-[5rem]">
            {videoList.splice(0, 3)?.map((video) => (
              <div key={video.id} className="mb-5">
                <div className="text-[1.5rem] mb-2 font-bold">
                  {video?.name || "VID NAME"}
                </div>
                <ReactPlayer
                  className="shadow-fuchsia-500/50 shadow-lg rounded-lg"
                  controls
                  url={`https://www.youtube.com/watch?v=${video?.key}`}
                  muted
                  width="100%"
                  height="40rem"
                />
              </div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="w-[80%] mx-auto">
            <div className="text-[1.75rem] font-bold">Recommendations</div>
            <div
              className="row-cast py-6 px-7 h-[30rem] flex gap-5 overflow-x-scroll overflow-y-hidden 
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
                    className="h-[20rem] min-w-[14rem] rounded-xl bg-auto 
                    object-cover bg-center shadow-cyan-500/50 shadow-lg mb-2"
                  />
                  <div>{item?.title || "Name"}</div>
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

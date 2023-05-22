import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosTMDB from "../../../api/axiosTMDB";
import { API_KEY } from "../../../utils/constants";
import "./MovieDetail.css";

function MovieDetail() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState(null);

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
  }, []);

  return (
    <div className="h-[60rem]" style={{ textShadow: "1px 1px #333" }}>
      <div className="relative w-full h-[40rem]">
        <img
          className="absolute object-fill w-full h-full"
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
        <div className="absolute text-white z-10 ">
          <div className="mx-[2rem] sm:mx-[4rem] mt-[10rem] sm:mt-[12rem] flex justify-between gap-3">
            <div className="hidden sm:w-[37%] sm:h-[30rem]">
              <img
                className="h-full object-fill shadow-rose-500/50 rounded-xl 
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

            <div className="w-[28rem] sm:w-[31rem] mt-[-0.5rem]">
              <div className="text-[4.2rem] sm:text-[4.6rem] font-bold w-[80%] leading-[5rem]">
                {movie?.original_title || movie?.title}
              </div>

              <div className="flex gap-3 items-center">
                {movie?.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="rounded-3xl mt-6 mb-4 py-2 text-center font-semibold w-[7rem]
                     border-white border-2 "
                  >
                    {genre?.name}
                  </div>
                ))}
              </div>
              <div className="text-justify mb-4">{movie?.overview}</div>
              <div className="font-semibold text-2xl mb-2">Casts</div>
              <div className="row-cast w-full h-[12rem] flex gap-3 overflow-x-scroll overflow-y-hidden scroll-smooth">
                {credit?.cast.map((info) => (
                  <div key={info.cast_id} className="">
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
                      className="h-[9rem] min-w-[7rem]"
                    />
                    <div>{info.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Box
          className="fade-bottom"
          sx={{
            height: "100%",
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(27, 27, 27, 0.61),#111)",
            position: "absolute",
            width: "100%",
          }}
        ></Box>
      </div>
    </div>
  );
}

export default MovieDetail;

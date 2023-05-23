import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "../movieSlice";
import movieManagementApi from "../../../api/movieManagementApi.js";
import axiosTMDB from "../../../api/axiosTMDB";
import "./MovieRow.css";
import { Link } from "react-router-dom";
import { truncateText } from "../../../utils/truncateText";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // muon render tung hang thi minh nen call truc tiep o day vs params khac nhau de no render cai nao xong
  // trc thi render trc

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosTMDB.get(fetchUrl);
        setMovies(response?.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="pb-6 ">
      <div className="text-white text-xl font-bold px-4">{title}</div>
      <div
        className="px-7 sm:px-4 py-6 row-posters flex flex-wrap gap-6 overflow-x-scroll overflow-y-hidden 
      scroll-smooth"
      >
        {movies?.map((movie) => (
          <Link
            to={`/movie/${movie?.id}`}
            className="hover:cursor-pointer hover:-translate-0.5
          hover:scale-110 duration-100 transition-all delay-[30ms] 
          2xl:w-[15.2%] xl:w-[18.3%] lg:w-[23%] md:w-[30.8%] sm:w-[47%] w-full"
            key={movie?.id}
          >
            <img
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
              alt="dsa"
              className="w-full h-[16rem] sm:h-[11rem] md:h-[9rem] shadow-rose-500/50 rounded-lg 
              shadow-lg object-fill"
            />
            <div className="text-white mt-1">
              {`${
                movie?.original_title ||
                movie?.title ||
                movie?.original_name ||
                "Name"
              }`}
            </div>
          </Link>
        ))}
      </div>
    </div>
    // <div className="pb-6 ">
    //   <div className="text-white text-xl font-bold px-4">{title}</div>
    //   <div className="px-4 py-6 row-posters flex gap-6 overflow-x-scroll overflow-y-hidden scroll-smooth">
    //     {movies?.map((movie) => (
    //       <img
    //         key={movie?.id}
    //         src={
    //           movie &&
    //           `${
    //             "https://image.tmdb.org/t/p/original" + movie?.backdrop_path ||
    //             movie?.poster_path ||
    //             "https://picsum.photos/1900"
    //           } `
    //         }
    //         alt="dsa"
    //         className="w-[9rem] h-[12rem] shadow-rose-500/50 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-0.5
    //          hover:scale-110 duration-100"
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}

export default MovieRow;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "../movieSlice";
import movieManagementApi from "../../../api/movieManagementApi.js";
import axiosTMDB from "../../../api/axiosTMDB";
import "./MovieRow.css";

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
    <div className="mb-6 ">
      <div className="text-white text-xl font-bold px-4">{title}</div>
      <div className="px-4 py-6 row-posters flex gap-6 overflow-x-scroll overflow-y-hidden scroll-smooth">
        {movies?.map((movie) => (
          <img
            key={movie?.id}
            src={
              movie &&
              `${
                "https://image.tmdb.org/t/p/original" + movie?.backdrop_path ||
                movie?.poster_path ||
                "https://picsum.photos/1900"
              } `
            }
            alt="dsa"
            className="w-[9rem] h-[12rem] shadow-rose-500/50 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-0.5
             hover:scale-110 duration-100"
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;

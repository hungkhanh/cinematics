import React, { useState } from "react";
import MovieList from "../components/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../searchSlice";

function SearchPage() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies({ query: value }));
  };

  return (
    <div className="min-h-screen pt-[8rem]">
      <div className="flex justify-center my-2">
        <form
          onSubmit={handleSearch}
          className="text-white w-[60%] mx-9 px-6 py-4
            text-3xl rounded-full border-[2px] border-rose-500 
            hover:shadow-rose-500/50
            shadow-md focus:shadow-rose-500/50 flex items-center justify-between"
        >
          <input
            type="text"
            className="bg-[#111] w-[95%] outline-none  "
            placeholder="Enter something..."
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button>
            <i
              className="fa-solid fa-magnifying-glass text-white hover:cursor-pointer
            hover:-translate-0.5
            hover:scale-110 duration-100 transition-all delay-[30ms]"
            ></i>
          </button>
        </form>
      </div>
      <MovieList />
    </div>
  );
}

export default SearchPage;

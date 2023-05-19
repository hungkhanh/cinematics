import { Box } from "@mui/material";
import { truncateText } from "../../../utils/truncateText";
import { useEffect, useState } from "react";
import tmdbApi from "../../../api/tmdbApi";

function Banner({}) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await tmdbApi.getBanner();
        setMovie(
          response?.results[
            Math.floor(Math.random() * response.results.length - 1)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="relative h-[40rem]">
      <img
        className="absolute object-fill w-full h-full"
        src={
          movie &&
          `${
            "https://image.tmdb.org/t/p/original" + movie?.backdrop_path ||
            movie?.poster_path ||
            "https://picsum.photos/1900"
          } `
        }
        alt="failImg"
      />
      <div className="absolute text-white top-[35%] ml-[3rem]">
        <div className="text-[5rem] font-bold w-[75%] leading-[5rem]">
          {movie?.original_title || movie?.title || "Movie name"}
        </div>
        <div className="btn-group flex gap-4 my-4 ">
          <button
            className=" px-9 py-2 text-white font-semibold bg-[#3333337f] rounded-sm 
          hover:text-white hover:bg-rose-600 transition-all delay-[30ms] hover:-translate-0.5 hover:scale-110 duration-100"
          >
            Play
          </button>
          <button
            className="px-5 py-2 text-white font-semibold bg-[#3333337f] rounded-sm
          hover:text-black hover:bg-[#e6e6e6] transition-all delay-[30ms] hover:-translate-0.5 hover:scale-110 duration-100"
          >
            More Info
          </button>
        </div>
        <div className="w-[45%]">
          {truncateText(
            `${
              movie?.overview ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit "
            }`,
            285
          )}
        </div>
      </div>
      <Box
        className="fade-bottom"
        sx={{
          height: "42%",
          backgroundImage:
            "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)",
          position: "absolute",
          width: "100%",
          bottom: "0",
        }}
      ></Box>
    </div>
  );
}

export default Banner;

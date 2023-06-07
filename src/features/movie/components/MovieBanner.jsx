import { Box, Skeleton } from "@mui/material";
import { truncateText } from "../../../utils/truncateText";
import { useEffect, useState } from "react";
import tmdbApi from "../../../api/tmdbApi";
import { Link } from "react-router-dom";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";

function MovieBanner({}) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomElement, setRandomElement] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await tmdbApi.getMovieBanner();
        setMovie(response.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * movie.length);
      setRandomElement(movie[randomIndex]);
    }, 3000);
    return () => {
      clearInterval(timeout);
    }; // Clear the timeout if component unmounts or the array changes
  }, [movie]);

  if (loading) {
    return <LoadingModal />;
  }

  return (
    <div
      className="relative min-h-[30rem] md:min-h-[35rem] lg:min-h-[40rem]"
      style={{ textShadow: "1px 1px #333" }}
    >
      <img
        className="absolute bg-auto object-cover bg-center w-full h-full"
        src={
          (randomElement?.backdrop_path &&
            `${
              "https://image.tmdb.org/t/p/original" +
              randomElement.backdrop_path
            }`) ||
          (randomElement?.poster_path &&
            `${
              "https://image.tmdb.org/t/p/original" + randomElement.poster_path
            }`) ||
          "https://image.tmdb.org/t/p/original/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg"
        }
        alt="failImg"
      />
      {randomElement ? (
        <div className="absolute z-20 text-white top-[20%] lg:top-[28%] mx-[3rem]">
          <div
            className="text-[3.5rem] sm:text-[4rem] lg:text-[4.5rem] font-bold w-[80%]
         leading-[4rem] sm:leading-[4.1rem] lg:leading-[5rem]"
          >
            {randomElement?.original_title ||
              randomElement?.title ||
              randomElement?.original_name ||
              "Movie name"}
          </div>

          <div className="btn-group flex gap-4 my-4 ">
            <Link
              to={`/movie/${randomElement?.id}`}
              className=" px-9 py-2 text-white font-semibold bg-[#3333337f] rounded-sm 
          hover:text-white hover:bg-rose-600 transition-all delay-[30ms] hover:-translate-0.5 hover:scale-110 duration-100"
            >
              Play
            </Link>
            <Link
              to={`/movie/${randomElement?.id}`}
              className="px-5 py-2 text-white font-semibold bg-[#3333337f] rounded-sm
          hover:text-black hover:bg-[#e6e6e6] transition-all delay-[30ms] hover:-translate-0.5 hover:scale-110 duration-100"
            >
              More Info
            </Link>
          </div>
          <div className=" w-[80%] sm:w-[75%] xl:w-[45%]">
            {truncateText(
              `${
                randomElement?.overview ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit "
              }`,
              285
            )}
          </div>
        </div>
      ) : (
        <div className="absolute z-20 text-white top-[20%] lg:top-[28%] mx-[3rem]">
          <Skeleton
            sx={{ bgcolor: "#555" }}
            variant="rounded"
            height={130}
            width={800}
          />
          <div className="my-4 flex gap-4">
            <Skeleton
              sx={{ bgcolor: "#555" }}
              variant="rounded"
              height={45}
              width={85}
            />
            <Skeleton
              sx={{ bgcolor: "#555" }}
              variant="rounded"
              height={45}
              width={85}
            />
          </div>
          <Skeleton
            sx={{ bgcolor: "#555" }}
            variant="rounded"
            height={100}
            width={600}
          />
        </div>
      )}
      <Box
        className="fade-bottom"
        sx={{
          height: "38%",
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

export default MovieBanner;

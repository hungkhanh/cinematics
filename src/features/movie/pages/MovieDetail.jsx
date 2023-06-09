import { Box } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosTMDB from "../../../api/axiosTMDB";
import "../../../components/Common/HideScroll/HideScroll.css";
import { API_KEY } from "../../../utils/constants";
import MovieDetailInfo from "../components/MovieDetail/MovieDetailInfo";
import MovieDetailRecommendations from "../components/MovieDetail/MovieDetailRecommendations";
import MovieDetailReviews from "../components/MovieDetail/MovieDetailReviews";
import MovieDetailVideoBackground from "../components/MovieDetail/MovieDetailVideoBackground";
import MovieDetailRefYT from "../components/MovieDetail/MovieDetailRefYT";
import Footer from "../../../components/Common/Footer/Footer";

function MovieDetail() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [recommendedvideoList, setRecommendedVideoList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

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

    (async () => {
      try {
        const response = await axiosTMDB.get(
          `/movie/${movie_id}/reviews?api_key=${API_KEY}`
        );
        setReviewList(response?.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movie_id]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [movie_id]);

  // const checkHeightForRendering = (list) => {
  //   if (list.length === 0) {
  //     return `h-[80rem] sm:h-[80rem]`;
  //   }
  //   if (list.length === 1) {
  //     return `h-[95rem] sm:h-[135rem]`;
  //   }
  //   if (list.length === 2) {
  //     return `h-[120rem] sm:h-[135rem] md:h-[140rem] lg:h-[155rem] xl:h-[170rem] 2xl:h-[180rem]`;
  //   }
  //   if (list.length === 3) {
  //     return `h-[145rem] sm:h-[165rem] md:h-[170rem] lg:h-[190rem] 2xl:h-[225rem]`;
  //   }
  // };

  return (
    <div
      // className={checkHeightForRendering(videoList?.splice(0, 2))}
      style={{ textShadow: "1px 1px #333" }}
    >
      {/* <div className="h-[70rem] relative w-full "> */}
      <div>
        <MovieDetailVideoBackground videoList={videoList} />
        {/* <div
          className="absolute 
         w-full text-white z-10 mt-[8rem] md:mt-[12rem] duration-100 transition-all delay-[30ms]"
        > */}
        <div
          className=" 
         w-full text-white z-10 mt-[8rem] md:mt-[12rem] duration-100 transition-all delay-[30ms]"
        >
          {/* Info */}
          <MovieDetailInfo movie={movie} credit={credit} />

          {/* Ref Youtube */}
          {videoList.length > 0 ? (
            <MovieDetailRefYT videoList={videoList} />
          ) : (
            <div className=" bg-[#111] py-12">
              <div className="text-center text-[3rem] border-2 border-amber-500 py-6 mx-[10rem]">
                No Referenced YouTube Videos
              </div>
            </div>
          )}

          {/* Reviews */}
          {<MovieDetailReviews reviewList={reviewList} />}

          {/* Recommendations */}
          {recommendedvideoList.length > 0 ? (
            <MovieDetailRecommendations
              recommendedvideoList={recommendedvideoList}
            />
          ) : (
            <div className=" bg-[#111] py-12">
              <div className="text-center text-[3rem] border-2 border-rose-500 py-6 mx-[10rem]">
                {" "}
                No Recommended Videos
              </div>
            </div>
          )}
        </div>
        <Box
          className="fade-bottom"
          sx={{
            height: "170%",
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(27, 27, 27, 0.61),#000)",
            position: "fixed",
            width: "100%",
            bottom: "0",
            zIndex: "-1",
          }}
        ></Box>
      </div>
    </div>
  );
}

export default MovieDetail;

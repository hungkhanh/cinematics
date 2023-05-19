import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanner } from "../bannerSlice";
import { fetchMovieList } from "../movieSlice";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import MovieRow from "../components/MovieRow";
import { requests } from "../../../utils/constants";

function Movies() {
  //muon render dong thoi song song thi call o day roi nhet vao 1 mang chung roi pass prop

  return (
    <div>
      <Banner />
      <div className="m-8">
        <MovieRow
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <MovieRow title="Trending" fetchUrl={requests.fetchTrending} />
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <MovieRow
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <MovieRow
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>

      {/* {movieLoading ? (
        <LoadingModal />
      ) : (
        <div className="flex gap-2 bg-black">
          {movieList?.map((movie) => (
            <div>
              <img src={`${movie.hinhAnh}`} />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default Movies;

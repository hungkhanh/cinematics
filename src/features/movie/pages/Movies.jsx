import React from "react";
import { requests } from "../../../utils/constants";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";

function Movies() {
  //muon render dong thoi song song thi call o day roi nhet vao 1 mang chung roi pass prop

  return (
    <div>
      <Banner />
      <div className="mt-8 mx-8">
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
    </div>
  );
}

export default Movies;

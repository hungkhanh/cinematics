import React from "react";
import { requests } from "../../../utils/constants";
import MoviesBanner from "../components/Movies/MoviesBanner";
import MoviesRow from "../components/Movies/MoviesRow";

function Movies() {
  //muon render dong thoi song song thi call o day roi nhet vao 1 mang chung roi pass prop

  return (
    <div>
      <MoviesBanner />
      <div className="pt-8 mx-8">
        <MoviesRow title="Trending" fetchUrl={requests.fetchTrending} />
        <MoviesRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MoviesRow
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <MoviesRow
          title="Adventure Movies"
          fetchUrl={requests.fetchAdventureMovies}
        />
        <MoviesRow
          title="Animation Movies"
          fetchUrl={requests.fetchAnimationMovies}
        />
        <MoviesRow title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
        <MoviesRow
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <MoviesRow
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <MoviesRow
          title="Fantasy Movies"
          fetchUrl={requests.fetchFantasyMovies}
        />
        <MoviesRow
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <MoviesRow
          title="Documentary Movies"
          fetchUrl={requests.fetchDocumentaryMovies}
        />
      </div>
    </div>
  );
}

export default Movies;

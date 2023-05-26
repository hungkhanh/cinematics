import React from "react";
import { requests } from "../../../utils/constants";
import MovieBanner from "../components/MovieBanner";
import MovieRow from "../components/MovieRow";

function Movies() {
  //muon render dong thoi song song thi call o day roi nhet vao 1 mang chung roi pass prop

  return (
    <div>
      <MovieBanner />
      <div className="mt-8 mx-8">
        <MovieRow title="Trending" fetchUrl={requests.fetchTrending} />
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <MovieRow
          title="Adventure Movies"
          fetchUrl={requests.fetchAdventureMovies}
        />
        <MovieRow
          title="Animation Movies"
          fetchUrl={requests.fetchAnimationMovies}
        />
        <MovieRow title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <MovieRow
          title="Fantasy Movies"
          fetchUrl={requests.fetchFantasyMovies}
        />
        <MovieRow
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <MovieRow
          title="Documentary Movies"
          fetchUrl={requests.fetchDocumentaryMovies}
        />
      </div>
    </div>
  );
}

export default Movies;

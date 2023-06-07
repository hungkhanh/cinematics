export const API_KEY = '82a5a8f5c061e462bc3c82fc59e48151'

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchNewsTV: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
    fetchFamilyTV: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
    fetchKidsTV: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchMysteryTV: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
    fetchRealityTV: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
    fetchTalkTV: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
    searchMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
}


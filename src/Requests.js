const API_KEYS = '2b356169ac16a2746f59db8fba6a8b96'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEYS}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEYS}&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEYS}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=28`,
    fetchComdeyMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEYS}&with_genres=99`,
}

export default requests
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3df6184500ed5682d4d34cc3cdc4b7c7';

function fetchData(url) {
  const result = fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });

  return result;
}

export function fetchTrendingMovies() {
  return fetchData(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovies(query) {
  return fetchData(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
}

export function fetchMoviesById(moviesId) {
  return fetchData(`${BASE_URL}movie/${moviesId}?api_key=${API_KEY}`);
}

export function fetchCast(moviesId) {
  return fetchData(`${BASE_URL}movie/${moviesId}/credits?api_key=${API_KEY}`);
}

export function fetchReviews(moviesId) {
  return fetchData(
    `${BASE_URL}movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}

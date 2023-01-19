import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://api.themoviedb.org/3/search/multi',
  apiUrlMovieTrend: 'https://api.themoviedb.org/3/trending/movie/week',
  apiUrlTvTrend: 'https://api.themoviedb.org/3/trending/tv/week',
  api_key: '13bf53bf9461d4c0dfd2b6ae837171ea',
  query: '',
  page: '',
  language: 'it-IT',
  include_adult: false,
  movieTvList: [],
  pathImage: 'https://image.tmdb.org/t/p/w500/',
  limitStars: 5,

});
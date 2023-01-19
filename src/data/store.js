import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  api_key: '13bf53bf9461d4c0dfd2b6ae837171ea',
  query: 'harry potter',
  page: '',
  language: 'it-IT'

});
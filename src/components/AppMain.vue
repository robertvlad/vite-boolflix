<script>

import {store} from '../data/store';
import MovieCard from './MovieCard.vue';

export default {
  name: 'AppMain',

  components: {
    MovieCard
  },

  props: {
    title: String,
    type: String
  },

  data(){
    return{
      store
    }
  },
  methods: {

  }
}

</script>

<template>

  <div class="container-custom mb-5">
    <h5 class="mb-3">{{ title }}</h5>
    <div class="row row-cols-6">
      <MovieCard v-for="card in store[type]" :key="card.id" :card="card"/>
    </div>    
  </div>  
  
</template>

<style lang="scss" scoped>
@use '../style/partials/vars' as *;

h5 {
  color: $light-color;
}

</style>
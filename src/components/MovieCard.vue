<script>

import {store} from '../data/store';
import flags from '../data/flags';

export default {
  name: 'MovieCard',

  props: {
    card: Object
  },

  data(){
    return{
      store,
      flags
    }
  },

  methods: {    
    getDate(date) {
      return date.split('-').reverse().join('/');
    }
  }
}

</script>

<template>

  <div class="col mb-4">
    <div class="card-default card h-100 rounded-2">
      <div class="h-100 overflow-hidden rounded-2">        
        <img v-if="card.poster_path" :src="store.pathImage + card.poster_path"  class="card-img-top" :alt="card.title">
        <img v-else src="../assets/error_img_1.png"  class="card-img-top" :alt="card.title">        
      </div>
      
      <div class="card-zoom card">
        <div class="overflow-hidden image-zoom">          
          <img v-if="card.backdrop_path" :src="`${store.pathImage}${card.backdrop_path}`" class="card-img-top" :alt="card.title">
          <img v-else src="../assets/error_img_2.png" class="card-img-top" :alt="card.title">
        </div>

        <div class="card-body">          
          <h6 class="">{{card.title || card.name}}</h6>
          <p class="mb-1">Original Title: <strong>{{card.original_title || card.original_name}}</strong></p>

          <p v-if="card.release_date || card.first_air_date" class="mb-1">Release date: {{getDate(card.release_date || card.first_air_date)}}</p>

          <p class="mb-1">Lenguage: 
            <span 
              v-if="flags.includes(card.original_language)"
              class="fi" :class="`fi-${card.original_language}`"></span>
            <span 
              v-else-if="card.original_language === 'en'"
              class="fi fi-gb"></span>
            <span 
              v-else>{{card.original_language}}</span>  
          </p>
          <p class="mb-1">Rating:
            <i v-for="i in Math.ceil(card.vote_average / 2)" :key="i" class="fa-solid fa-star"></i>
            <i v-for="i in (store.limitStars - Math.ceil(card.vote_average / 2))" :key="i" class="fa-regular fa-star"></i>
          </p>
          <p class="description mb-0">
            {{card.overview}}
          </p>
        </div>
      </div>  

    </div>
  </div>
    
    
  
</template>

<style lang="scss" scoped>
@use '../style/partials/vars' as *;

.card {
  border: 1px solid $primary-color;
  background-color: $primary-color;
  color: $light-color;

  .image-zoom{
    height: 130px;
    object-fit: contain;
    object-position: center;
  }

  .card-body {
    font-size: 0.55rem;

    .description {
      height: 80px;
      padding-right: 10px;
      overflow-y: auto;
    }
    
    i {
      color: #ffe224d5;
    }
  }
}

.card-default{
  position: relative;

  .card-zoom {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    transition: all 4s;
  }

  &:hover .card-zoom{
    display: block; 
    transform: scale(1.4);
  }
}

</style>
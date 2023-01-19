<script>

import {store} from '../data/store';
import {headerMenu} from '../data/menu'; 

export default {
  name: 'AppHeader',

  data(){
    return{
      store,
      headerMenu,
    }
  }
}

</script>

<template>

  <header class="pt-3">
    <div class="container-custom">
      <div class="row">
        <div class="col-3 p-0">
          <h1 class="title-page">BOOLFLIX</h1>
        </div>
        <div class="col-6">
          <ul class="menu-ul d-flex justify-content-between pt-4">
            <li v-for="(link, index) in headerMenu" :key="index" class="ps-3">
              <a href="link.href" :class="{'active': link.active}">{{link.text}}</a>
            </li>
          </ul>
        </div>

        <div class="col-3 search-bar">
          <input @keydown.enter="$emit('search')" v-model.trim="store.apiParams.query" class="form-control" type="text" placeholder="Movies, Series and Characters">
          
          <select v-model="store.type" @change="$emit('search')">
            <option value="" selected>All</option>
            <option value="movie">Movies</option>
            <option value="tv">Series</option>
          </select>
          <button
            @click="$emit('search')"
            class="btn btn-light">Search</button>
        </div>
      </div>    
    </div>    
  </header>
  
</template>

<style lang="scss" scoped>
@use '../style/partials/vars' as *;

header{

  .title-page{
    color: #E50914;
    font-weight: bold;
    font-size: 4rem;
  }

  .menu-ul li a{
    font-size: 0.9rem;
  }  

  .browse {
    font-size: 0.8rem;
    color: $light-color;
    font-weight: 400;
  }

  a{
    color: $light-color;
    font-weight: 300;
    font-size: 0.8rem;

    &:hover{
      color: $light-primary-color;
    }

    &.active{
      font-weight: 400;
    }
  }

  .search-bar input{
    margin-bottom: 10px;
  }

  .search-bar select{
    margin-right: 30px;
    border-radius: 5px;
    padding: 8.5px;
  }

  .search-bar button{
    padding: 9px;
  }
}

</style>
<script>

import {store} from '../data/store';

export default {
  name: 'AppHeader',

  data(){
    return{
      store
    }
  }
}

</script>

<template>

  <header>
    <input v-model="store.query" class="form-control" type="text" placeholder="Cerca i tuou Film, Serie o attori preferiti">
    <button
      @click="$emit('clickSearch')"
      class="btn btn-light">Cerca</button>
  </header>
  
</template>

<style lang="scss" scoped>

</style>
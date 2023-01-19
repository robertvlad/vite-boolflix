<script>

import { getImagePath } from '../data/methods';
import { footerMenu } from '../data/menu';

export default {
  name: 'AppFooter',

  data(){
    return{
      getImagePath,
      footerMenu
    }
  }
}

</script>

<template>

  <footer class="container-custom-sm">
    <div class="row">
      <div v-for="(menu, index) in footerMenu" :key="index" class="col-6 col-lg-3">
        <ul class="ps-0">
          <li v-for="(link, index) in menu" :key="index">
            <a href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <div class="col-auto">
        <p class="code">Service Code</p>
        <p><i class="fa-regular fa-copyright"></i> 1997-2023 Netflix, Inc</p>
      </div>
    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
@use '../style/partials/vars' as *;

.container-custom-sm {
  width:65%;
  margin: 0 auto;
}

li{
  padding-bottom: 7px;

  a {
  color: $light-primary-color;
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline;
    color: $light-primary-color;
    }
  }
}

p {
  font-size: 0.75rem;
  color:  $light-primary-color;
  
  &.code {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid  $light-primary-color;
    cursor: pointer;
  }
}

</style>
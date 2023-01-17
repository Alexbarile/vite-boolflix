<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';
import AppFilms from './components/AppFilms.vue';
import {store} from './store.js';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFilms,
    AppSearch,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  
</template>

<style lang="scss">
@use './styles/generals.scss' as *;

</style>

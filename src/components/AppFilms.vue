<script>
import { store } from '../store';
export default {
    props: {
        films: Object,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
     <div class="col card">
         <div class="card-body">
            <div class="mb-5">
                <h4 class="card-title">{{ films.title }}</h4>
            </div>
            <div class="mt-3">
                <h5>Titolo originale: {{ films.original_title }}</h5>
                <h5>Voto: {{ films.vote_average }}</h5>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${(films.original_language).toUpperCase()}.png`">
            </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
   
</style>
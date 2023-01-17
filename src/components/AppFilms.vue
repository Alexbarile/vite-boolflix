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
                <h5>Lingua: {{ films.original_language }}</h5>
            </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
   
</style>
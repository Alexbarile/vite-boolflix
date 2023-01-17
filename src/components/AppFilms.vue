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
            <div class="path">
                <img class="card-img-top" :src="`https://www.themoviedb.org/t/p/w300/${(films.poster_path)}`">
            </div>
            <div class="info mt-4">
                <h4 class="card-title">{{ films.title }}</h4>
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

    .card{
        cursor: pointer;
    }
</style>
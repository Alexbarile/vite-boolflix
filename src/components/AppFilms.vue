<script>
import { store } from '../store';
export default {
    props: {
        films: Object,
    },
    data() {
        return {
            store,
            visibility: true
        }
    },

    methods: {

        // stelle come voto
        
        countStars(vote){
            return Math.ceil(vote / 2)
        },
        
        // cambio bandiera per mostare bandiera EN to GB

        changeFlag(value){
            let flag = '';
            if(value.original_language){
                switch(value.original_language){
                    case 'en': 
                    flag = 'gb' 
                    break

                    default:
                    flag = (value.original_language)
                    break

                }
                let urlFlag = flag.toUpperCase()
                return urlFlag
            }
        },
    },
}
</script>

<template>
    <div class="card-single" @mouseover="visibility=false" @mouseleave="visibility=true">
        <div v-if="visibility">
            <!-- <img class="img" :src="`https://www.themoviedb.org/t/p/w342/${(films.poster_path)}`"> -->
            <img class="img" :src="films.poster_path == null ? `img/N.png` : `https://www.themoviedb.org/t/p/w342/${films.poster_path}`">
        </div>
        <div v-if="!visibility" class="info">
            <div class="info-bg">
                <h4 class="title">{{ films.title }}</h4>
                <h5 class="original-title" >Titolo originale: <span>{{ films.original_title }}</span></h5>
                <h5 class="rating" >Voto: 
                    <i v-for="i in countStars(films.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="i in 5-countStars(films.vote_average)" class="fa-regular fa-star"></i>
                </h5>
                <img class="flag" :src="`https://www.countryflagicons.com/FLAT/64/${changeFlag(films)}.png`">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;


</style>
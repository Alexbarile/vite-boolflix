<script>
import { store } from '../store';
export default {
    props: {
        series: Object,
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
            <img class="img" :src="`https://www.themoviedb.org/t/p/w342/${(series.poster_path)}`">
        </div>
        <div v-if="!visibility" class="info">
            <h4 class="title">{{ series.name }}</h4>
            <h5 class="original-title">Titolo originale: <span>{{ series.original_name }}</span></h5>
            <h5 class="rating">Voto: 
                <i v-for="i in countStars(series.vote_average)" class="fa-solid fa-star"></i>
                <i v-for="i in 5-countStars(series.vote_average)" class="fa-regular fa-star"></i>
            </h5>
            <img class="flag" :src="`https://www.countryflagicons.com/FLAT/64/${changeFlag(series)}.png`">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;


</style>
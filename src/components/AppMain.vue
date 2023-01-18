<script>
import AppFilms from './AppFilms.vue';
import AppSeries from './AppSeries.vue';
import { store } from '../store';

export default {
    components:{
        AppFilms,
        AppSeries
    },
    data() {
        return {
            store,
        }
    },
    computed:{
        numberFilms(){
            return store.movieArray.length
        },
        numberSeries(){
            return store.serieArray.length
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row mt-3 mb-3">

            <!-- conteggio Film e Serie -->

            <div class="col-12">
                <p>Ho trovato {{ numberFilms }} Film </p>
                <p>Ho trovato {{ numberSeries }} Serie</p>
            </div>
        </div>

        <!-- sezione Film e Serie -->

        <div class="row row-cols-6 gap-5 mt-5">
            <AppFilms v-for="(item, index) in store.movieArray" :key="index" :films="item"/>
            <AppSeries v-for="(item, index) in store.serieArray" :key="index" :series="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
   
</style>
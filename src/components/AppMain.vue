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
    <main class="black-bg">

        <div class="container">
    
            <!-- conteggio Film -->
    
            <div class="row p-3">
                <div class="col-12">
                    <h3>{{ numberFilms }} FILM </h3>
                </div>
            </div>
    
            <!-- sezione Film -->
    
            <div class="row ow-cols-5 gap-2">
                
                <AppFilms v-for="(item, index) in store.movieArray" :key="index" :films="item"/>
                
            </div>
    
            <!-- conteggio Serie -->
    
            <div class="row p-3">
                <div class="col-12">
                    <h3>{{ numberSeries }} SERIE</h3>
                </div>
            </div>
    
            <!-- sezione Serie -->
    
            <div class="row row-cols-5 gap-2"> 
                 <AppSeries v-for="(item, index) in store.serieArray" :key="index" :series="item"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    h3{
        font-size: 25px;
        font-weight: 700;
        color: $white;
    }
</style>
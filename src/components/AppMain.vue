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

        <div class="container-main">
    
            <!-- conteggio Film -->
    
            <div class="row p-3">
                <div class="col-12">
                    <h3>{{ numberFilms }} Film </h3>
                </div>
            </div>
    
            <!-- sezione Film -->
    
            <div class="row-object">
                <AppFilms v-for="(item, index) in store.movieArray" :key="index" :films="item"/>
            </div>
    
            <!-- conteggio Serie -->
    
            <div class="row p-3">
                <div class="col-12">
                    <h3>{{ numberSeries }} Serie TV</h3>
                </div>
            </div>
    
            <!-- sezione Serie -->
    
            <div class="row-object"> 
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
        font-weight: 500;
        color: $white;
    }

    .row-object{
        display: flex;
        width: 100%;
        overflow-y: hidden; 
    }
</style>
<script>
import AppFilms from './AppFilms.vue';
import { store } from '../store';

export default {
    components:{
        AppFilms,
    },
    data() {
        return {
            store,
        }
    },
    computed:{
        numberFilms(){
            return store.movieArray.length
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row mt-3 mb-3">
            <div class="col-12">
                <div>
                    Ho trovato {{ numberFilms }} film
                </div>
            </div>
        </div>
        <div class="row row-cols-6 gap-5 mt-5">
            <AppFilms v-for="(item, index) in store.movieArray" :key="index" :films="item" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
   
</style>
<script>
import {store} from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            searchText: '',
        }
    },
    methods: {

        // richiamo l'API dei film e delle serie + nome della ricerca

        search(search){
            let apiCallFilm = store.apiFilms + search
            axios.get(apiCallFilm).then((response) => {
                store.movieArray = response.data.results
            })
            let apiCallSerie = store.apiSeries + search
            axios.get(apiCallSerie).then((response) => {
                store.serieArray = response.data.results
            })
        },
    },
}
</script>

<template>
    <div class="input-group p-4 mb-3">
        <input type="text" class="form-control" placeholder="Inserisci il film" aria-label="Inserisci il film" aria-describedby="basic-addon2" v-model="searchText" @keyup.enter="search(searchText)">
        <button class="btn btn-light" type="button" id="button-addon2" @click="search(searchText)">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
   
</style>
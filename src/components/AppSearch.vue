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
                    store.movieArray = response.data.results;
                })
                let apiCallSerie = store.apiSeries + search
                axios.get(apiCallSerie).then((response) => {
                    store.serieArray = response.data.results;
                })

            // funzione per tornare alla schermata vuota una volta tolto il film dala searchbar

            // if(search == ''){
            //     store.movieArray = [];
            //     store.serieArray = [],

            // }
            // else{
            //     let apiCallFilm = store.apiFilms + search
            //     axios.get(apiCallFilm).then((response) => {
            //         store.movieArray = response.data.results
            //     })
            //     let apiCallSerie = store.apiSeries + search
            //     axios.get(apiCallSerie).then((response) => {
            //         store.serieArray = response.data.results
            //     })
            // }
        },
    },
}
</script>

<template>
    <div class="input-group p-4 mb-3">
        <input type="text" class="form-control" placeholder="Titolo" aria-label="Titolo" aria-describedby="basic-addon2" v-model="searchText" @keyup.enter="search(searchText)">
        <button class="btn btn-dark" type="button" id="button-addon2" @click="search(searchText)"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.input-group{
    margin: 0 !important;
    width: 250px;

    .form-control{
        border-radius: 20px;
        border: 1px solid gray;
        background-color: rgb(27, 27, 27);
        color: $white;
    }
    .btn{
        border: 1px solid gray;
    }
}
</style>
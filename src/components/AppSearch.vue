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
        search (search){
            let apiCall = store.api + search
            axios.get(apiCall).then((response) => {
                store.movieArray = response.data.results
            })

        }
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
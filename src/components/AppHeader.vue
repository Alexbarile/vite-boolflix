<script>
import AppSearch from './AppSearch.vue';
import {store} from '../store';
export default {
    components:{
        AppSearch,
    },
    data() {
        return {
            store,
        }
    },
    
}
</script>

<template>
    <AppSearch></AppSearch>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
   
</style>
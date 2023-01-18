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
    <header>
        <div class="bg-black">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-8 d-flex align-items-center">

                        <!-- logo -->

                        <div class="logo">
                            <img src="../../public/img/Netflix.png" alt="">
                        </div>

                        <!-- navbar -->

                        <nav>
                            <ul class="d-flex">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Serie TV</a></li>
                                <li><a href="#">Film</a></li>
                                <li><a href="#">Originali</a></li>
                                <li><a href="#">Aggiunti di recente</a></li>
                                <li><a href="#">La mia lista</a></li>
                            </ul>
                        </nav>
                    </div>

                    <!-- searchbar -->

                    <div class="col-4">
                        <AppSearch></AppSearch>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    .logo{

        img{
            width: 250px;
        }
    }

    li{
        padding: 10px;
        list-style-type: none;
        
        a{
            @include noTextDecoration;
            color: $white;

            &:hover{
                color: $gray;
            }
        }
    }
</style>
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
        <div class="black-bg">
            <div class="container-header">
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

                    <div class="col-4 d-flex align-items-center justify-content-end">
                        <AppSearch></AppSearch>
                        <a href="#"><i class="fa-solid fa-bell"></i></a>
                        <div class="logo-profilo">
                             <img src="../../public/img/logo profilo netflix.png" alt="">
                        </div>
                        <div class="dropdown">
                            <a class="btn btn-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
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
            width: 150px;
        }
    }

    nav{

        ul{
            margin: 0 !important;
            padding: 0 !important;

            li{
                font-size: 15px;
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
        }
    }
    .fa-bell{
        color: $white;
        padding: 5px;

        &:hover{
            color: gray;
        }
    }
    .col-4{
        padding-right: 20px;
        .logo-profilo{
            img{
                width: 30px;
                padding-left: 5px;
            }
        }
        .dropdown{
            a{
                padding: 5px
            }
        }
    }
</style>
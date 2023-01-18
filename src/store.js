import { reactive } from 'vue'

export const store = reactive({
    apiKey: '2d0a008a54b70e4f39c99ebec1a62b1a',
    apiFilms: 'https://api.themoviedb.org/3/search/movie?api_key=2d0a008a54b70e4f39c99ebec1a62b1a&language=it-IT&query=',
    apiSeries: 'https://api.themoviedb.org/3/search/tv?api_key=2d0a008a54b70e4f39c99ebec1a62b1a&language=it_IT&query=',
    movieArray: [],
    serieArray: [],
})
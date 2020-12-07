import { FETCH_FILMS, SORTING_FILMS_YEAR, FETCH_FILM_FULL, GET_MOVIES_WTH_FAILURE, GET_MOVIE_WTH_FAILURE } from './types'



const initialStateMovies = {
    fetchedFilms: [],
    incorrectRequestMovies:'' 
}


export const MoviesRequestReducer  = (state = initialStateMovies, action: any) => {
    switch (action.type) {
        case FETCH_FILMS:   
        return {...state, fetchedFilms: Object.values(action.payload.Search)};    //state.fetchedFilms.concat()
        case SORTING_FILMS_YEAR: 
        return {...state, fetchedFilms: state.fetchedFilms.map((item, index, arr) => action.payload[index]).sort(function(a, b){
            if (a.Year > b.Year) {
                return 1;
              }
              if (a.Year < b.Year) {
                return -1;
              }
              // a должно быть равным b
              return 0;
        })};
        case GET_MOVIES_WTH_FAILURE:
        return {...state, incorrectRequestMovies: 'Не, ну камон, введите корректо'}; 
     
        default: return state;
    }
}


const initialStateMovie = {
    fetchedFullMovie: [],
    incorrectRequestMovie:'' 
}

export const paramFullMovieReducer = (state = initialStateMovie, action: any) => {
    switch(action.type){
    case FETCH_FILM_FULL: 
    return {...state, fetchedFullMovie: Object.values(action.payload)};
    case GET_MOVIE_WTH_FAILURE:
        return {...state, incorrectRequestMovie: 'Не, ну камон, введите корректо'};
    default: return state
    }
}
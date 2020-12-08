import { FETCH_FILMS, SORTING_FILMS_YEAR, FETCH_FILM_FULL, GET_MOVIES_WTH_FAILURE, GET_MOVIE_WTH_FAILURE,  SORTING_FILMS_TITLE_STRAIGHT, SORTING_FILMS_TITLE_REVERSE } from './types'



const initialStateMovies = {
    fetchedFilms: [],
    incorrectRequestMovies: null
}


export const MoviesRequestReducer  = (state = initialStateMovies, action: any) => {
    switch (action.type) {
        case FETCH_FILMS:   
            return {...state, fetchedFilms: Object.values(action.payload.Search)};  

        case SORTING_FILMS_YEAR: 
            return {...state, fetchedFilms: state.fetchedFilms.map((item, index, arr) => action.payload[index]).sort(function(a, b){
            if (a.Year > b.Year) {
                return 1;
              }
              if (a.Year < b.Year) {
                return -1;
              }
              return 0;
        })};

        case  SORTING_FILMS_TITLE_STRAIGHT:
            return {...state, fetchedFilms: state.fetchedFilms.map((item, index, arr) => action.payload[index]).sort((a, b) => a.Title.localeCompare(b.Title))}

        case SORTING_FILMS_TITLE_REVERSE:
            return {...state, fetchedFilms: state.fetchedFilms.map((item, index, arr) => action.payload[index]).sort((a, b) => b.Title.localeCompare(a.Title))}
        
        case GET_MOVIES_WTH_FAILURE:
            return {...state, incorrectRequestMovies: state.incorrectRequestMovies = action.payload}; 
     
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
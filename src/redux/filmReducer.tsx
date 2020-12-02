import { FETCH_FILMS, SORTING_FILMS_YEAR, FETCH_FILM_FULL } from './types'



const initialStateMovies = {
    fetchedFilms: []
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
        // case GET_FULL_INFO:
        // return {...state, fullFilmInfo: state.fullFilmInfo.concat(action.payload)} 
     
        default: return state;
    }
}


// const paramRequestMovie = {
//     titleRequest: '', 
//     paramRequest: 's',
// }

// export const paramRequestReducer = (state = paramRequest, action: any) => {
//     switch(action.type){
//     case GET_PARAMS_REQUEST: 
//     return {...state, titleRequest: state.titleRequest = action.titleLoad, paramRequest: state.paramRequest = action.paramLoad};
//     default: return state
//     }
// }

const initialStateMovie = {
    fetchedFullMovie: []
}

export const paramFullMovieReducer = (state = initialStateMovie, action: any) => {
    switch(action.type){
    case FETCH_FILM_FULL: 
    return {...state, fetchedFullMovie: Object.values(action.payload)};
    default: return state
    }
}
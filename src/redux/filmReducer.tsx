import { FETCH_FILMS, SORTING_FILMS_YEAR } from './types'



const initialState = {
    fetchedFilms: []
}


export const filmReducer  = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_FILMS:   
        return {...state, fetchedFilms: state.fetchedFilms.concat(Object.values(action.payload.Search))};
        case SORTING_FILMS_YEAR: 
        // return {...state, fetchedFilms: action.payload.sort((a, b) => a.Year - b.Year)}
        // return {...state, fetchedFilms: state.fetchedFilms.filter((item, ind, arr) => action.payload[0]!==item)}
        // return {...state, fetchedFilms: state.fetchedFilms.sort(function(a, b) {
        //     console.log(action.payload)
        //     if (a[action.payload.Year] > b[action.payload.Year]) {
        //         return 1;
        //       }
        //       if (b[action.payload.Year] < a[action.payload.Year]) {
        //         return -1;
        //       }
        //       // a должно быть равным b
        //       return 0;
        //   }
        //   )}
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
        default: return state;
    }
}

// action
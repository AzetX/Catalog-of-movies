import { REQUEST_FILMS, SORTING_FILMS_YEAR, REQUEST_FULL_INFO } from './types'



export function fetchFilms(){
    return {
        type: REQUEST_FILMS   
    }
    
}

export const sortByYear = (movies) => ({
    type: SORTING_FILMS_YEAR,
    payload: movies
})


export const getFullMovie = () => {
    return {
        type: REQUEST_FULL_INFO
    }
}
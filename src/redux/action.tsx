import { REQUEST_FILMS, SORTING_FILMS_YEAR, REQUEST_FULL_INFO,  SORTING_FILMS_TITLE_REVERSE, SORTING_FILMS_TITLE_STRAIGHT } from './types'



export function fetchFilms(){
    return {
        type: REQUEST_FILMS 
    }
    
}

export const sortByYear = (movies) => ({
    type: SORTING_FILMS_YEAR,
    payload: movies
})

export const sortByTitleStraight = (movies) => ({
    type: SORTING_FILMS_TITLE_STRAIGHT,
    payload: movies
})

export const sortByTitleReverse = (movies) => ({
    type: SORTING_FILMS_TITLE_REVERSE,
    payload: movies
})




export const getFullMovie = () => {
    return {
        type: REQUEST_FULL_INFO
    }
}

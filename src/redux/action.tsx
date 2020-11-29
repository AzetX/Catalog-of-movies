import { newFilmsequest } from '../components/FindFilmsForm'
import { REQUEST_FILMS  } from './types'



export function fetchFilms(){
    
    // return async dispatch => {
    //     const response = await fetch(`http://www.omdbapi.com/?${newFilmsequest.paramMovies}=${newFilmsequest.titleMovie}&apikey=27834fd8`)
    //     const json = await response.json()
    //     dispatch({type: FETCH_FILMS, payload: json })
    // }
    return {
        type: REQUEST_FILMS   
    }
    
}


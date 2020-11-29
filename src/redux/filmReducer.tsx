import { FETCH_FILMS } from './types'



const initialState = {
    fetchedFilms: []
}


export const filmReducer  = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_FILMS:   
        return {...state, fetchedFilms: Object.values(action.payload.Search)}
        default: return state
    }
}

// action
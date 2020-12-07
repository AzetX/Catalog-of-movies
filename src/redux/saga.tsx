import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_FILMS, REQUEST_FILMS, REQUEST_FULL_INFO, FETCH_FILM_FULL, GET_MOVIE_WTH_FAILURE, GET_MOVIES_WTH_FAILURE } from './types'
import { parametrMovies }  from '../components/FindFilmsForm'
import { fullInfoMovie } from '../components/FilmsList'


export function* sagaWatcher() {
   yield takeEvery(REQUEST_FILMS, sagaWorkerAllMovies)
   yield takeEvery(REQUEST_FULL_INFO, sagaWorkerFullMovie)
}

function* sagaWorkerAllMovies() {
    try {
    const payload =  yield call(fetchFilms)
    yield put({ type: FETCH_FILMS, payload})
    }
    catch(e){
        yield put({type: GET_MOVIES_WTH_FAILURE, payload: e.payload})
    }
}

function* sagaWorkerFullMovie() {
    try {
        const payload =  yield call(fetchFullInfoMovie)
        yield put({ type: FETCH_FILM_FULL, payload})
    }
    catch(e){
        yield put({type: GET_MOVIE_WTH_FAILURE, payload: e.payload})
        console.error(e)
    }
}


async function fetchFilms() {
    // const response = await fetch(`http://www.omdbapi.com/?${newFilmsequest.paramMovies}=${newFilmsequest.titleMovie}&plot=full&apikey=27834fd8`)
    const response = await fetch(`http://www.omdbapi.com/?${parametrMovies.paramMovies}=${parametrMovies.titleMovie}&plot=full&apikey=27834fd8`)
    
    const json =  await response.json()
    return json    
}

async function fetchFullInfoMovie() {
    const response = await fetch(`http://www.omdbapi.com/?t=${fullInfoMovie.titleMove}&plot=full&apikey=27834fd8`)
    const json = await response.json()
    return json
}
import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_FILMS, REQUEST_FILMS, REQUEST_FULL_INFO, FETCH_FILM_FULL, GET_MOVIE_WTH_FAILURE, GET_MOVIES_WTH_FAILURE } from './types'
import { parametrMovies }  from '../components/FindFilmsForm'
import { fullInfoMovie } from '../components/FilmsList'
import { expectSaga } from 'redux-saga-test-plan';

export function* sagaWatcher() {
   yield takeEvery(REQUEST_FILMS, sagaWorkerAllMovies)
   yield takeEvery(REQUEST_FULL_INFO, sagaWorkerFullMovie)
}

export function* sagaWorkerAllMovies() {
    try {
    const payload =  yield call(fetchFilms)
    yield put({ type: FETCH_FILMS, payload})
    yield put({type: GET_MOVIES_WTH_FAILURE, payload: false})
    }
    catch(e){
        yield put({type: GET_MOVIES_WTH_FAILURE, payload: true})
    }
}

export function* sagaWorkerFullMovie() {
    try {
        const payload =  yield call(fetchFullInfoMovie)
        yield put({ type: FETCH_FILM_FULL, payload})
    }
    catch(e){
        yield put({type: GET_MOVIE_WTH_FAILURE, payload: 'Error'})
    }
}


export async function fetchFilms() {
    // const response = await fetch(`http://www.omdbapi.com/?${newFilmsequest.paramMovies}=${newFilmsequest.titleMovie}&plot=full&apikey=27834fd8`)
    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?${parametrMovies.paramMovies}=${parametrMovies.titleMovie}&plot=full&apikey=27834fd8`)
    const json =  await response.json()
    return json    
}

export async function fetchFullInfoMovie() {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=${fullInfoMovie.titleMove}&plot=full&apikey=27834fd8`)
    const json = await response.json()
    return json
}












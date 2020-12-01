import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_FILMS, REQUEST_FILMS } from './types'
import { newFilmsequest } from '../components/FindFilmsForm'







export function* sagaWatcher() {
   yield takeEvery(REQUEST_FILMS, sagaWorker)
}

function* sagaWorker() {
    try {
    const payload =  yield call(fetchFilms)
    yield put({ type: FETCH_FILMS, payload})
    }
    catch(e){
        console.error('bad request')
    }
}



async function fetchFilms() {
    const response = await fetch(`http://www.omdbapi.com/?${newFilmsequest.paramMovies}=${newFilmsequest.titleMovie}&plot=full&apikey=27834fd8`)
    const json =  await response.json()
    return json    
}

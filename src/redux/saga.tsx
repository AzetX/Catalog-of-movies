import { takeEvery, put, call, take } from 'redux-saga/effects';
import {
  FETCH_FILMS, REQUEST_FILMS, REQUEST_FULL_INFO, FETCH_FILM_FULL, GET_MOVIE_WTH_FAILURE, GET_MOVIES_WTH_FAILURE,
} from './types';
import { parametrMovies } from '../components/FindFilmsForm';
import { fullInfoMovie } from '../components/FilmsList';
import { SagaIterator } from 'redux-saga';

export function* sagaWatcher(): SagaIterator<void> {
  yield takeEvery(REQUEST_FILMS, sagaWorkerAllMovies);
  yield takeEvery(REQUEST_FULL_INFO, sagaWorkerFullMovie);
}

export function* sagaWorkerAllMovies(): SagaIterator<void> {
  try {
    yield take(REQUEST_FILMS);
    const payload = yield call(fetchFilms);
    yield put({ type: FETCH_FILMS, payload });
    yield put({ type: GET_MOVIES_WTH_FAILURE, payload: false });
  } catch (e) {
    yield put({ type: GET_MOVIES_WTH_FAILURE, payload: true });
  }
}

export function* sagaWorkerFullMovie(): SagaIterator<void> {
  try {
    const payload = yield call(fetchFullInfoMovie);
    yield put({ type: FETCH_FILM_FULL, payload });
  } catch (e) {
    yield put({ type: GET_MOVIE_WTH_FAILURE, payload: 'Error' });
  }
}

export async function fetchFilms(): Promise<object> {
  const response = await fetch(`http://www.omdbapi.com/?s=Bill&plot=full&apikey=27834fd8`);
  const json = await response.json();
  return json;
}

// `http://www.omdbapi.com/?s=Bill&plot=full&apikey=27834fd8`
// `http://www.omdbapi.com/?${parametrMovies.paramMovies}=${parametrMovies.titleMovie}&plot=full&apikey=27834fd8`

export async function fetchFullInfoMovie(): Promise<object> {
  const response = await fetch(`http://www.omdbapi.com/?t=${fullInfoMovie.titleMove}&plot=full&apikey=27834fd8`);
  const json = await response.json();
  return json;
}
// https://cors-anywhere.herokuapp.com/
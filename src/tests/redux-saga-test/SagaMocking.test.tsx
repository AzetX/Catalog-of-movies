import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import {
  fetchFilms, fetchFullInfoMovie, sagaWorkerAllMovies, sagaWorkerFullMovie,
} from '../../redux/saga';

// Mocking with Providers - integration testing

test('fetching Movies request', () => {
  const fakeFilms = {
    Title: "Inside Bill's Brain: Decoding Bill Gate", Year: '2019', imdbID: 'tt10837476', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  };

  return expectSaga(sagaWorkerAllMovies)
    .provide([
      [call(fetchFilms), fakeFilms],
    ])
    .put({
      type: 'FILMS/FETCH_FILMS',
      payload: fakeFilms,
    })
    .dispatch({ type: 'FILMS/REQUEST_FILMS' })
    .run();
});

test('fetchingMovies wth error', () => {
  const error = new Error('error');

  return expectSaga(sagaWorkerAllMovies)
    .provide([
      [call(fetchFilms), throwError(error)],
    ])
    .put({ type: 'GET_MOVIES_WTH_FAILURE', payload: true })
    .dispatch({ type: 'FILMS/REQUEST_FILMS' })
    .run();
});

test('fetching FullMovie', () => {
  const fakeFullmovie = {
    Title: 'Bill', Year: '2015', Rated: 'PG', Released: '18 Sep 2015', Runtime: '94 min', Genre: 'Comedy, Family, History', Director: 'Richard Bracewell', Writer: 'Laurence Rickard, Ben Willbond', Actors: 'Mathew Baynton, Simon Farnaby, Martha Howe-Douglas, Jim Howick',
  };

  return expectSaga(sagaWorkerFullMovie)
    .provide([
      [call(fetchFullInfoMovie), fakeFullmovie],
    ])

    .put({ type: 'FILM/FETCH_FILM_FULL', payload: fakeFullmovie })
    .dispatch({ type: 'FILM/REQUEST_MOVIE' })
    .run();
});

test('fetching FullMovie with Error', () => {
  const error = new Error('Error');

  return expectSaga(sagaWorkerFullMovie)
    .provide([
      [call(fetchFullInfoMovie), throwError(error)],
    ])

    .put({ type: 'GET_MOVIE_WTH_FAILURE', payload: error.message })
    .dispatch({ type: 'FILM/REQUEST_MOVIE' })
    .run();
});

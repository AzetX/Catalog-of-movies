import React from 'react';
import { call, put, take } from 'redux-saga/effects';
import {
  fetchFilms, sagaWatcher, sagaWorkerAllMovies,
} from '../../redux/saga';
import { MoviesRequestReducer } from '../../redux/filmReducer';
import { FETCH_FILMS, REQUEST_FILMS } from '../../redux/types';

describe('Sequenced Saga', () => {
  const saga = sagaWorkerAllMovies();
  let output = null;
  const movies = [{
    Title: "Inside Bill's Brain: Decoding Bill Gate", Year: '2019', imdbID: 'tt10837476', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: "Bill & Ted's Excellent Adventure", Year: '1989', imdbID: 'tt0096928', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg',
  },
  {
    Title: 'Kill Bill: Vol. 1', Year: '2003', imdbID: 'tt0266697', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  }];

  it('should take fetch users success', () => {
    output = saga.next().value;
    const expected = take(REQUEST_FILMS);
    expect(output).toEqual(expected);
  });

  it('should select the state from store', () => {
    output = saga.next().value;
    const expected = call(fetchFilms);
    expect(output).toEqual(expected);
  });

  it('should call sagaWorkerAllMovies with the movies obj', (done) => {
    output = saga.next(movies).value;
    const expected = [call(fetchFilms), movies];
    done();
    expect(output).toEqual(expected);
  });

  it('should put Fetch dashboard success', (done) => {
    output = saga.next(movies).value;
    const expected = [put({ type: FETCH_FILMS, payload: { movies } }), put({ type: 'GET_MOVIES_WTH_FAILURE', payload: false })];/// check there
    const finished = saga.next().done;
    done();
    expect(finished).toEqual(false);
    expect(output).toEqual(expected);
  });
});

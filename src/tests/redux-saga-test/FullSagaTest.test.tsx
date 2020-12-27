import React from "react";
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import {
    fetchFilms,  sagaWorkerAllMovies, sagaWatcher
  } from '../../redux/saga';
  import { call, put, take, select } from 'redux-saga/effects';
import {MoviesRequestReducer, initialStateMovies} from '../../redux/filmReducer'
import { mockComponent } from "react-dom/test-utils";
import  { FETCH_FILMS, REQUEST_FILMS, GET_MOVIES_WTH_FAILURE } from '../../redux/types'
import * as matchers from 'redux-saga-test-plan/matchers';





test('recorded effects with redux-saga-test-plan', () => {
    const movies = [{
                Title: "Inside Bill's Brain: Decoding Bill Gate", Year: '2019', imdbID: 'tt10837476', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
              },
              {
                Title: "Bill & Ted's Excellent Adventure", Year: '1989', imdbID: 'tt0096928', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg',
              },
              {
                Title: 'Kill Bill: Vol. 1', Year: '2003', imdbID: 'tt0266697', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
              }];


              
    return expectSaga(sagaWorkerAllMovies)
   
   .provide([
        [call(fetchFilms), movies]
    ])

    // .put({ type: GET_MOVIES_WTH_FAILURE, payload:  false})
    .put({ type:  FETCH_FILMS, payload:   movies  } )
  
    .withReducer(MoviesRequestReducer)
    
   
    .dispatch({ type: REQUEST_FILMS, payload:  movies })

    .hasFinalState({
        fetchedFilms: movies,
        incorrectRequestMovies: false
      
    })
    
    .run();
    
})
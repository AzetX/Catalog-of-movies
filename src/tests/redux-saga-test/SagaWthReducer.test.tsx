import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { fetchFilms, sagaWorkerAllMovies, sagaWorkerFullMovie }  from '../../redux/saga';
import { FETCH_FILMS, FETCH_FILM_FULL }  from '../../redux/types'


const initialStateMovies = {
    fetchedFilms: [],
    incorrectRequestMovies: null
}

const MoviesRequestReducer  = (state = initialStateMovies, action: any) => {
    
    switch (action.type) {
        case FETCH_FILMS:   
            return {...state, fetchedFilms: Object.values(action.payload.Search)};  
    
         default: return state;
        }
    }

    test('Initial State reducer WorkerMovies', () => {
        return expectSaga(sagaWorkerAllMovies)
        .withReducer(MoviesRequestReducer)
        .hasFinalState({
            fetchedFilms: [],
            incorrectRequestMovies: null
          })
          .run();

    })


 ///(??????????????????????????????????????????????)
    // test('reducer with sagaWorkerMovies', () => {    
    //     const fakeFilms = {Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}
    //     return expectSaga(sagaWorkerAllMovies)
        

    //     .provide([
    //         [call(fetchFilms), fakeFilms]
    //     ])
    //     .put({
    //         type: 'FILMS/FETCH_FILMS',
    //         payload: fakeFilms
    //     })
    //     .dispatch({type: 'FILMS/REQUEST_FILMS'})

    //     .withReducer(MoviesRequestReducer)
    //     .hasFinalState({
    //         fetchedFilms: [{Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}],
    //         incorrectRequestMovies: null
    //       })
          
    //       .run();

    // })


    
const initialStateMovie = {
    fetchedFullMovie: [],
    incorrectRequestMovie:'' 
}

export const paramFullMovieReducer = (state = initialStateMovie, action: any) => {
    switch(action.type){
    case FETCH_FILM_FULL: 
        return {...state, fetchedFullMovie: Object.values(action.payload)};
    default: return state
    }
}

test('Initial State reducer WorkerMovies', () => {
    return expectSaga(sagaWorkerFullMovie)

    
    .withReducer(paramFullMovieReducer)
    .hasFinalState({
        fetchedFullMovie: [],
        incorrectRequestMovie: ''
      })
      .run();

})


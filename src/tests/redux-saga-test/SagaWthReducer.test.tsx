import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { fetchFilms, sagaWorkerAllMovies, sagaWorkerFullMovie, fetchFullInfoMovie }  from '../../redux/saga';

import { MoviesRequestReducer }  from '../../redux/filmReducer';


it ('saga Failure wth reduce', () => {
    return expectSaga(sagaWorkerAllMovies)

        .withReducer(MoviesRequestReducer)

        .hasFinalState({
            fetchedFilms: [],
            incorrectRequestMovies: true
        })

        .run()
})
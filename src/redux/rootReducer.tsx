import { combineReducers } from 'redux';
import { MoviesRequestReducer, paramFullMovieReducer } from './filmReducer';

export const rootReducer = combineReducers({
  films: MoviesRequestReducer,
  paramFullMovieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

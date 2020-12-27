import {
  REQUEST_FILMS, SORTING_FILMS_YEAR, REQUEST_FULL_INFO, SORTING_FILMS_TITLE_REVERSE, SORTING_FILMS_TITLE_STRAIGHT, 
} from './types';
import {
  FetchFilms, SortByYear, SortByTitleStraight, SortByTitleReverse, GetFullMovie
} from '../interfaces'

export function fetchFilms(): FetchFilms {
  return {
    type: REQUEST_FILMS,
  };
}

export const sortByYear = (movies: []): SortByYear => ({
  type: SORTING_FILMS_YEAR,
  payload: movies,
});

export const sortByTitleStraight = (movies: []): SortByTitleStraight => ({
  type: SORTING_FILMS_TITLE_STRAIGHT,
  payload: movies,
});

export const sortByTitleReverse = (movies: []): SortByTitleReverse => ({
  type: SORTING_FILMS_TITLE_REVERSE,
  payload: movies,
});

export const getFullMovie = (): GetFullMovie => ({
  type: REQUEST_FULL_INFO,
});

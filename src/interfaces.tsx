import {
  REQUEST_FILMS, SORTING_FILMS_YEAR, REQUEST_FULL_INFO, SORTING_FILMS_TITLE_REVERSE, SORTING_FILMS_TITLE_STRAIGHT, 
} from './redux/types';

export interface MoviesInfo {
  kolMovies?: number;
  films?: [];
  incorrectData?: boolean;
}

export interface Movie {
  Poster: string;
  Title: string;
  Year: number;
  Type: string;
}


export interface SortingFilms {
  sortingByYear(films:[]): void;
  sortByTitleReverse(films:[]): void;
  sortByTitleStraight(films:[]): void;
  films?: [];
}

export interface Count {
  count: [];
  incorrectRequestMovie: boolean;
}

export interface ParamSorting {
  films: [];
  count?: [];
  incorrectRequestMovie?: boolean;
  sortByYear(movie: []): void;
  sortByTitleStraight(movie: []): void;
  sortByTitleReverse(movie: []): void;
}

export interface InputFilmsProps {
  changeHandler?: any;
  title?: string;
  incorrectData? : string;
  submitHandleKeyPress?: any;
}

export interface ClickFilmsProps {
  clickHandler?: any;
  submitHandler?: any;
}

export interface FetchedButtonProp {
  submitHandler?: any;
}

export interface FilmsCollection {
  films?: [];
  kol?: number;
  alert?: string;
}

export interface Movie {
  movie: any;
}

export interface StateMovies {
  fetchedFilms: any;
  incorrectRequestMovies: boolean;
}

export interface StateMovie {
  fetchedFullMovie: [];
  incorrectRequestMovie: boolean;
}


export interface FetchFilms {
  type: typeof REQUEST_FILMS
}

export interface SortByYear {
  type: typeof SORTING_FILMS_YEAR,
  payload: []
}

export interface SortByTitleStraight {
  type: typeof SORTING_FILMS_TITLE_STRAIGHT,
  payload: []
}

export interface SortByTitleReverse {
  type: typeof SORTING_FILMS_TITLE_REVERSE,
  payload: []
}

export interface GetFullMovie {
  type: typeof REQUEST_FULL_INFO
}
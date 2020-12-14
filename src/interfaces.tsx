export interface MoviesInfo {
    kolMovies?: number;
    films?: any
    incorrectData?: boolean;
}


export interface SortingFilms {
    sortingByYear(films:any): void;
    sortByTitleReverse(films:any): void;
    sortByTitleStraight(films:any): void;
    films?: any;
}

export interface Count {
    count: [];
}

export interface ParamSorting {
    films: [];
    count?: [];
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


export interface State {
    fetchedFilms: any,
    incorrectRequestMovies: any;
}
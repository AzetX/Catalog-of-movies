export interface MoviesInfo {
    kolMovies?: number;
    films?: any
}


export interface SortingFilms {
    sortingByYear(films:any): void
    films?: any;
}

export interface Count {
    count: [];
}

export interface ParamSorting {
    films: [];
    count?: [];
    sortByYear(movie: []): void;
}

export interface InputFilmsProps {
    changeHandler?: any;
    title?: string;
    incorrectData? : string;
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

export interface Movie{
    movie: any;
}

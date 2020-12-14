import React from 'react';
import { render, screen } from '@testing-library/react';
import  { MoviesRequestReducer, } from '../redux/filmReducer';
import { State }  from '../interfaces'
import { sortByYear } from '../redux/action'




test('', () => {
    const initialStateMovies: State = {
        fetchedFilms: [{Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}, {Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}],
        incorrectRequestMovies: false
    }

    const movie = [[{Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}, {Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}]]
    const newState = MoviesRequestReducer(initialStateMovies, sortByYear(movie))

    expect(newState.incorrectRequestMovies).toBeFalsy
});


test('[]', () => {
    const initialStateMovies: State = {
        fetchedFilms: [{Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}, {Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}],
        incorrectRequestMovies: true
    }

    const movie = [{Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}, {Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}]
    const newState = MoviesRequestReducer(initialStateMovies, sortByYear(movie))

    // expect(newState.fetchedFilms[0].find({})).toBe(true)
    expect(newState.incorrectRequestMovies).toBeTruthy()
});

// CНЭПШОТЫ
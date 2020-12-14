import * as actions from '../redux/action'
import * as types from '../redux/types'



//sunc action

describe('action: sortByYear', () => {
    it('should create an action to sort films by Year', () => {
        const movies = [{Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}, {Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}];
        const expectedAction = {
            type: types.SORTING_FILMS_YEAR,
            payload: movies
        }
        expect(actions.sortByYear(movies)).toEqual(expectedAction)
    }) 
    
})

describe('action: sortByTitleStraight', () => {
    it('should create an action to sort films by title', () => {
        const movies = [{Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}, {Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}];
        const expectedAction = {
            type: types.SORTING_FILMS_TITLE_STRAIGHT,
            payload: movies
        }
        expect(actions.sortByTitleStraight(movies)).toEqual(expectedAction)
    }) 
})

describe('action: sortByTitleReverse', () => {
    it('should create an action to sort films by title', () => {
        const movies = [{Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}, {Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}];
        const expectedAction = {
            type: types.SORTING_FILMS_TITLE_REVERSE,
            payload: movies
        }
        expect(actions.sortByTitleReverse(movies)).toEqual(expectedAction)
    }) 
})


//async ation test


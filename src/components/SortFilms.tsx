import React from 'react'
import { connect } from 'react-redux'
import { FilmsCollection } from './FindFilmsForm'
import { fetchFilms } from '../redux/action'

const SortigMovies: React.FC = () => {
    return (
        <div className="soring">
            <div> Sorting by: </div> 
            <div className="release-date"> date of release </div>
            <div className="raiting"> raiting </div>
        </div>
    )
}


const CounterMovies: React.FC<FilmsCollection> = ( { films } ) => {
    (Array.of(films).length-1===0) ? console.log('sad'): console.log('good')//не рендерится, принимает в значение начальный стейт
    return (
        <div className="counter"> Movies found: {Array.of(films).length-1} </div>
    )
}


export const SortFilms: React.FC = () => {
    return (
        <div className="sort-movies">
            <CounterMovies />
            <SortigMovies />
        </div>
    )
}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms
    };
  }

const mapDispatchToProps = function (dispatch) {
    return {
        fetchFilms: () => {
            dispatch(fetchFilms())
        }
    }
}

 connect(mapStateToProps, mapDispatchToProps)(CounterMovies)
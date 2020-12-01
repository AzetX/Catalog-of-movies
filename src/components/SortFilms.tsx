import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FilmsCollection } from './FindFilmsForm'
import { fetchFilms, sortByYear } from '../redux/action'


interface Nigga {
    sortingByYear?: any
    films?: any;
}

const SortigMovies: React.FC<Nigga> = ( { sortingByYear, films } ) => {
    
    return (
        <div className="soring">
            <div> Sorting by: </div> 
            <div className="release-date" onClick={() => sortingByYear(films)}> Year </div>
            <div className="raiting"> raiting </div>
        </div>
    )
}


interface Count {
    count: any
}

const CounterMovies: React.FC<Count> = ( { count } ) => {

    
    return (
        <div className="counter"> Movies found: { count.length } </div>
    )
}


interface Hui {
    films?: any;
    count?:number;
    newState?: any;
    sortByYear: any;//function
}

 const SortFilms: React.FC<Hui> = ( { films, sortByYear } ) => {


    function sortingByYear(){
    
        let newState = films.concat()
        // return newState.sort((a, b) => a.Year - b.Year)
         return newState.sort((a, b) => a.Year - b.Year)//работай со стейтом
        // 
    } 

     return (

        <div className="sort-movies">
            <CounterMovies count={films} />
            <SortigMovies sortingByYear = {sortByYear} films={films}/>
        </div>
    )
}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms
    };
  }

  const mapDispatchToProps = {
        sortByYear: sortByYear
  }


export default connect(mapStateToProps, mapDispatchToProps)(SortFilms)
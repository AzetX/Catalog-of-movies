import React from 'react'
import { connect } from 'react-redux'
import { sortByYear } from '../redux/action'
import { SortingFilms, Count, ParamSorting }  from '../interfaces'


const SortigMovies: React.FC<SortingFilms> = ( { sortingByYear, films } ) => {
    
    return (
        <div className="sorting">
            <div> Sorting by: </div> 
            <div className="release-date" onClick={() => sortingByYear(films)}> year </div>
            <div className="raiting"> raiting </div>
        </div>
    )
}



const CounterMovies: React.FC<Count> = ( { count } ) => {

    
    return (
        <div className="counter"> Movies found: { count.length } </div>
    )
}


 const SortFilms: React.FC<ParamSorting> = ( { films, sortByYear } ) => {


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
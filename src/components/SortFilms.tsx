import React from 'react'
import { connect } from 'react-redux'
import { sortByYear, sortByTitleStraight, sortByTitleReverse } from '../redux/action'
import { SortingFilms, Count, ParamSorting }  from '../interfaces'


const SortigMovies: React.FC<SortingFilms> = ( { sortingByYear, sortByTitleStraight, sortByTitleReverse, films } ) => {
    
    return (
        <div className="sorting">
            <div> Sorting by: </div> 
            <div className="release-date" onClick={() => sortingByYear(films)}> year </div>
         
                    <div className="sort-straight" onClick={()=> sortByTitleStraight(films)}>a-z</div>
                    <div className="sort-reverse" onClick={()=> sortByTitleReverse(films)}>z-a</div>
        
        </div>
    )
}


const CounterMovies: React.FC<Count> = ( { count } ) => {

    
    return (
        <div className="counter"> Movies found: { count.length } </div>
    )
}


 const SortFilms: React.FC<ParamSorting> = ( { films, sortByYear, sortByTitleReverse, sortByTitleStraight } ) => {


     return (

        <div className="sort-movies">
            <CounterMovies count={films} />
            <SortigMovies sortingByYear={sortByYear} films={films}  sortByTitleStraight={sortByTitleStraight} sortByTitleReverse={sortByTitleReverse}/>
        </div>
    )
}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms
    };
  }

  const mapDispatchToProps = {
        sortByYear: sortByYear,
        sortByTitleStraight: sortByTitleStraight,
        sortByTitleReverse: sortByTitleReverse
  }


export default connect(mapStateToProps, mapDispatchToProps)(SortFilms)
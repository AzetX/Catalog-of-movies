import React from 'react';
import { connect } from 'react-redux';
import { sortByTitleReverse, sortByTitleStraight, sortByYear } from '../redux/action';
import { Count, ParamSorting, SortingFilms } from '../interfaces';

const SortigMovies: React.FC<SortingFilms> = function ({
  sortingByYear, sortByTitleStraight, sortByTitleReverse, films,
}) {
  return (
    <div className="sorting">
      <div> Sorting by: </div>
      <div className="release-date" onClick={() => sortingByYear(films)}> year </div>

      <div className="sort-straight" onClick={() => sortByTitleStraight(films)}>a-z</div>
      <div className="sort-reverse" onClick={() => sortByTitleReverse(films)}>z-a</div>

    </div>
  );
};

const CounterMovies: React.FC<Count> = function ({ count, incorrectRequestMovie }) {
  if(incorrectRequestMovie){
    return (
      <div className="counter">
        Movies found:&nbsp;
        { count.length }
      </div>
    );
  }
  else{
    return (
      <div className="counter">
        Movies found:&nbsp;
        { 0 }
      </div>
    );
  }

};

const SortFilms: React.FC<ParamSorting> = function ({
  films, sortByYear, sortByTitleReverse, sortByTitleStraight, incorrectRequestMovie
}) {
  return (
    <div className="sort-movies">
      <CounterMovies count={films} incorrectRequestMovie={incorrectRequestMovie} />
      <SortigMovies films={films} sortByTitleReverse={sortByTitleReverse} sortByTitleStraight={sortByTitleStraight} sortingByYear={sortByYear} />
    </div>
  );
};

const mapStateToProps = function (store) {
  return {
    films: store.films.fetchedFilms,
    incorrectRequestMovie: store.films.incorrectRequestMovie
  };
};

const mapDispatchToProps = {
  sortByYear,
  sortByTitleStraight,
  sortByTitleReverse,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortFilms);

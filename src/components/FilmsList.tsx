import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFullMovie } from '../redux/action';
import { MoviesInfo, Movie } from '../interfaces';

export let fullInfoMovie: any;
const getFullInfoMovie = (titleMove: string): object => ({
  titleMove,
});

export const FilmsList: React.FC<MoviesInfo> = function ({ films, incorrectData }) {
  const dispatch = useDispatch();

  if (incorrectData === true) {
    return (<p className="none-movies">ERROR &#128533;, TRY TO ENTER AGAIN </p>);
  }
  if (!films.length) {
    return (<p className="none-movies"> Sorry, but movies none found &#128533; </p>);
  }

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, moveTitle): object {
    fullInfoMovie = getFullInfoMovie(moveTitle);
    return fullInfoMovie;
  }

  return (

    <div className="movies-content">
      {
            films.map((movie: Movie, index) => (
              <div key={index} className="films-content">
                <div className="movie-img">
                  <img alt="Poster" src={movie.Poster} />
                </div>
                <div className="movie-title">
                  <b>Title:&nbsp;</b>
                  <i>{movie.Title.length <= 30 ? movie.Title : `${movie.Title.slice(0, 30)}...` }</i>
                </div>
                <div className="movie-year">
                  <b>Year:&nbsp;</b>
                  <i>{movie.Year}</i>
                </div>
                <div className="movie-type">
                  <b>Type:&nbsp;</b> 
                  <i>{movie.Type}</i>
                </div>
                <NavLink id="full-info" onClick={(event) => { handleClick(event, movie.Title); dispatch(getFullMovie()); }} to="/fullInfo">Get more info</NavLink>
              </div>
            ))
}
    </div>

  );
};

const mapStateToProps = function (store) {
  return {
    films: store.films.fetchedFilms,
    incorrectData: store.films.incorrectRequestMovies,
  };
};

export default connect(mapStateToProps, null)(FilmsList);

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Movie } from '../interfaces';

const InfoMoviePage: React.FC<Movie> = function ({ movie }) {
  const history = useHistory();
  return (
    <div key={0} className="film-content">
      <div className="film-img"><img alt="Poster" src={movie[13]} /></div>
      <div className="film-title">
        <b>Movie:&nbsp;</b>
        <i>{movie[0]}</i>
      </div>
      <div className="film-year">
        <b>Year:&nbsp;</b>
        <i>{movie[3]}</i>
      </div>
      <div className="film-rait">
        <b>Raiting:&nbsp;</b>
        <i>{movie[16]}</i>
      </div>
      <div className="film-descr">
        <b>Descipton:&nbsp;</b>
        <br />
        <i>{movie[9]}</i>
      </div>

      <button className="btn-back" onClick={() => { history.push('/Catalog-of-movies'); }}>Обратно к списку</button>

    </div>
  );
};

const mapStateToProps = function (store) {
  return {
    movie: store.paramFullMovieReducer.fetchedFullMovie,
  };
};

export default connect(mapStateToProps, null)(InfoMoviePage);

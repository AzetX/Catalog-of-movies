import { render } from '@testing-library/react'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchFilms, sortByYear } from '../redux/action'

interface MoviesInfo {
    kolMovies?: number;
    films?: any;
}


 const FilmsList: React.FC<MoviesInfo> = ({ films }) => {
   
    if(!films.length) {
        return (<p className="none-movies"> Sorry, but movies none found &#128533; </p>)
    }
    console.log('СТАЙТ', films)
    return (
      
        <div className="movies-content">
            {
            films.map((movie, index) =>(
            <Fragment key={index}>
                <div className="movie-img"><img src={movie.Poster} alt="Poster"/></div>
                <div className="movie-img"> {movie.Title} </div>   
                <div className="movie-img">{movie.Year}</div>   
                <div className="movie-img">{movie.Type}</div>  
            </Fragment>
            ))}
        </div>
    )

}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms //смотри на стэйт
    };
  }




  export default connect(mapStateToProps, null)(FilmsList)
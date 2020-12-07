import { render } from '@testing-library/react'
import React, { Fragment } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getFullMovie } from '../redux/action'
import { NavLink } from "react-router-dom";
import { MoviesInfo }  from '../interfaces'



export let fullInfoMovie;
function getFullInfoMovie(titleMove: string){
    return {
        titleMove 
    }
}

 const FilmsList: React.FC<MoviesInfo> = ({ films }) => {
    const dispatch = useDispatch()
    
    if(!films.length) {
        return (<p className="none-movies"> Sorry, but movies none found &#128533; </p>)
    }
    
    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, moveTitle){

        fullInfoMovie = getFullInfoMovie(moveTitle)
        return fullInfoMovie
    }



    return (
  
        <div className="movies-content">
            {
            films.map((movie, index) =>(
            <div className='films-content' key={index}>
                <div className="movie-img"><img src={movie.Poster} alt="Poster"/></div>
                <div className="movie-title"><b>Title:</b> <i>{(movie.Title.length <= 30)? movie.Title: `${movie.Title.slice(0, 30)}...` }</i> </div>   
                <div className="movie-year"><b>Year:</b> <i>{movie.Year}</i></div>   
                <div className="movie-type"><b>Type:</b> <i>{movie.Type}</i></div> 
                <NavLink to= "/fullInfo" id="full-info" onClick={(event) => { handleClick(event, movie.Title); dispatch(getFullMovie())} }>Get more info</NavLink>
            </div>
            ))}
        </div>
  
    )
    
}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms, 
      incorrectData: store.films.incorrectRequestMovies
    };
  }



  export default connect(mapStateToProps, null)(FilmsList)
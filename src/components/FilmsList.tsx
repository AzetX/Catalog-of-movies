import { render } from '@testing-library/react'
import React, { Fragment } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getFullMovie } from '../redux/action'


// import { getInfoMovie } from '../redux/action'

interface MoviesInfo {
    kolMovies?: number;
    films?: any;
    // getInfoMovie: any;
}

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
        event.preventDefault()
        fullInfoMovie = getFullInfoMovie(moveTitle)
        return fullInfoMovie
    }


    return (
        <div className="movies-content">
            {
            films.map((movie, index) =>(
            <Fragment key={index}>
                <div className="movie-img"><img src={movie.Poster} alt="Poster"/></div>
                <div className="movie-title"> {movie.Title} </div>   
                <div className="movie-year">{movie.Year}</div>   
                <div className="movie-type">{movie.Type}</div> 
                {/* <div className="movie-fullInfo">Get more info</div>    */}
                <a href="/" id="full-info" onClick={(event) => { handleClick(event, movie.Title); dispatch(getFullMovie())} }>Get more info</a>
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

// const mapDispatchToProps = {
//     getInfoMovie: getInfoMovie
// }


  export default connect(mapStateToProps, null)(FilmsList)
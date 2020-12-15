import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Movie }  from '../interfaces'

const InfoMoviePage: React.FC<Movie> = ( { movie }) => {
    const history = useHistory()
    return(
         <div className='film-content' key={0}>
            <div className="film-img"><img src={movie[13]} alt="Poster"/></div>
            <div className="film-title"><b>Movie:</b> <i>{movie[0]} </i> </div>   
            <div className="film-year"><b>Year:</b> <i>{movie[3]}</i></div>   
            <div className="film-rait"><b>Raiting:</b> <i>{movie[16]}</i></div> 
            <div className="film-descr"><b>Descipton:</b> <br /> <i>{movie[9]}</i></div> 
    
            <button className="btn-back" onClick = {()=>{history.push('/Catalog-of-movies')}}>Обратно к списку</button>
            
        </div>
    )
} 


const mapStateToProps = function(store){
    return {
        movie: store.paramFullMovieReducer.fetchedFullMovie
    }
}



export default connect(mapStateToProps, null)(InfoMoviePage)
import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { fetchFilms } from '../redux/action'
import { InputFilmsProps, ClickFilmsProps, FetchedButtonProp, FilmsCollection }  from '../interfaces'


export let parametrMovies;   //
 function getParamsMovies(titleMovie:string, paramMovies:string){
    return {
        titleMovie,
        paramMovies
    }
}


const FethDataButton: React.FC<FetchedButtonProp> = ({ submitHandler }) => {
    const dispatch = useDispatch()    
    return (
        <div className="form-button-find">
          <button id="button-find-films" title="FIND" type="submit" onClick={(event)=> {submitHandler(event); dispatch(fetchFilms())}}>FIND MOVIES</button>
        </div>
    )
}



const ButtonsForm: React.FC <ClickFilmsProps>= ( { clickHandler } ) => {
    return (
           <div className="form-buttons-categories">
               <button id="button-title-films" title="TITLE"  onClick={ () => clickHandler('s') }>BY TITLE</button> 
               <button id="button-director-films" title="DIRECTOR"  onClick={ () => clickHandler('i') }>BY IMDb</button>
           </div>
    )
}

const InputForm: React.FC <InputFilmsProps> = ( { title, changeHandler } ) => {
    return (    
        <div className="input-form"> 
        <label htmlFor="title"> FIND THE MOVIES </label>
        <input type="text" id="title" placeholder="Enter the movie or director..." title="FINT YOUR MOVIES" onChange={changeHandler} value={ title }/>
        </div>
    )
}


 const FilmsForm: React.FC <FilmsCollection> = ( {  } ) => {
    const [title, setTitle] = useState<string>('')//for input
    const [paramMovies, setParamMovies] = useState<string>('s') 

    const changeHandler = ({ target }: React.ChangeEvent<HTMLFormElement>) => { 
        setTitle(target.value)
    }

    const clickHandler = (paramReq: string) => { 
        setParamMovies(paramReq)
    }

    const submitHandler = ( event: React.ChangeEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const titleMovie = title;
        parametrMovies = getParamsMovies(titleMovie, paramMovies);
        setTitle('')
        return parametrMovies
    }
    
    return(
     
        <div className="search-form">
            <InputForm  title={ title } changeHandler={changeHandler}/>
            
            <ButtonsForm clickHandler={ clickHandler } submitHandler={submitHandler} />
            <FethDataButton submitHandler={submitHandler} /> 
          
        </div>
     
    )
}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms
    };
  }

 export default connect(mapStateToProps, null)(FilmsForm)

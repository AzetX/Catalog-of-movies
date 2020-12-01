import React, { useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { fetchFilms } from '../redux/action'
import { RootState } from '../redux/rootReducer'

 interface InputFilmsProps {
    changeHandler?: any;
    title?: string;
}

interface ClickFilmsProps {
    clickHandler?: any;
    submitHandler?: any;
    // films?: any[] = [];
}

interface FetchedButtonProp {
    submitHandler?: any;
    // films?: any;
    // fetchedFilms?: ;
}

interface FilmsRequest {
    paramMovies?: string;
    titleMovie?: string;
  }


 export interface FilmsCollection {
      films?: any;
      kol?: number;
  }
export let newFilmsequest: FilmsRequest = {}


const FethDataButton: React.FC<FetchedButtonProp> = ({submitHandler}) => {
    const dispatch = useDispatch()
    // const films = useSelector((state: RootState) => {
    //     // return state.films.fetchedFilms //!!!!!!!!!!!!!!!!!!!!
    
    // })
    //   console.log(films)
    
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

 const FilmsForm: React.FC <FilmsCollection> = ( { films, kol } ) => {
    const [title, setTitle] = useState<string>('')//for input
    const [paramMovies, setParamMovies] = useState<string>('s') //for parap search: param s - for title film. По умолчанию стейт s - title film. (http://www.omdbapi.com/?s=!!${Kill}&&apikey=27834fd8)
                                                                             // Если на IMBD, то setState на i http://www.omdbapi.com/?i=tt1285016&plot=short&apikey=27834fd8 
    console.log(films)
    console.log(kol)
    const changeHandler = ({ target }: React.ChangeEvent<HTMLFormElement>) => { //for change input state. название фильма
        setTitle(target.value)
    }

    const clickHandler = (paramReq: string) => { //for change button state. Получаем параметры фидьтра в инпуте
        setParamMovies(paramReq)
    }

    const submitHandler = ( event: React.ChangeEvent<HTMLFormElement> ) => {//Параметры сабмиты
        event.preventDefault();
        const titleMovie = title;
        newFilmsequest = {
            titleMovie,
            paramMovies
        }
        setTitle('')
    }
  
    return(
     
        <div className="search-form">
            <InputForm  title={ title } changeHandler={changeHandler}/>
            <div className="buttons-form">
            <ButtonsForm clickHandler={ clickHandler } submitHandler={submitHandler} />
            <FethDataButton submitHandler={submitHandler} /> 
            </div>
        </div>
     
    )
}


const mapStateToProps = function(store) {
    return {
      films: store.films.fetchedFilms
    };
  }

  
 export default connect(mapStateToProps, null)(FilmsForm)

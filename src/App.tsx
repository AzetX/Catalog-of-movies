import React from 'react';
import { Navbar } from './components/Navbar'
import FilmsForm  from './components/FindFilmsForm'
import { SortFilms } from './components/SortFilms'

const App: React.FunctionComponent = () => {

  // const [title, setTitle] = useState<string>('')//for input!!
    

  return (
    <>
      <Navbar />
      <div className="container">
        <FilmsForm />
        <SortFilms />
      </div>
    </>
  );
}

export default App;


//for full info: http://www.omdbapi.com/?t=Kill&plot=full&apikey=27834fd8
//Short:
// by title: http://www.omdbapi.com/?s=Kill&plot=short&apikey=27834fd8
//by ibmd: http://www.omdbapi.com/?i=tt1285016&plot=short&apikey=27834fd8 
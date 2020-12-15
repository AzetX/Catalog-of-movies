import React from 'react'
import { Provider} from "react-redux";
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FilmsList } from '../components/FilmsList'


configure({ adapter: new Adapter() });




const mockStore = configureStore()
const store = mockStore(({
    films:[{Title:"Inside Bill's Brain: Decoding Bill Gate", Year:"2019", imdbID:"tt10837476", Type:"series", Poster:"https://m.media-amazon.com/images/M/MV5BNjI4OWJlOGUtMjhlNy00MTA3LTkzZTgtMTZiZjU5YWJjZWZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}, {Title:"Bill & Ted's Excellent Adventure", Year:"1989", imdbID:"tt0096928", Type:"movie", Poster:"https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"}, {Title: "Kill Bill: Vol. 1", Year:"2003", imdbID:"tt0266697", Type:"movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}]
}))



describe('My Footer Component', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <FilmsList {...store.props} />
            </Provider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
  })
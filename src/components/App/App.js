import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Details from '../Details/Details';
import MovieList from '../MovieList/MovieList';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.getMovies();
    this.getGenres();
  }

  // Dispatch call for GET
  getMovies = () => {
    this.props.dispatch({
      type: 'FETCH_MOVIE'
    });
  }

  getIndividualMovie = () => {
    this.props.dispatch({
      type: 'FETCH_INDIVIDUAL_MOVIE',
      payload: this.props.movies.id
    });
  }

  getGenres = () => {
    this.props.dispatch({
      type: 'FETCH_GENRE'
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movies!</h1>
          <Route path='/' exact>
            <MovieList />
          </Route>

          <Route path='/details' exact>
            <Details 
              getIndividualMovie={this.getIndividualMovie}
            />
          </Route>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (storeInstance) => ({
  movies: storeInstance.movies
});
export default connect(mapStateToProps)(App);
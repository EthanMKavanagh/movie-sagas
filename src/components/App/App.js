import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Details from '../Details/Details';
import MovieList from '../MovieList/MovieList';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.getMovies();
  }

  // Dispatch call for GET
  getMovies = () => {
    this.props.dispatch({
      type: 'FETCH_MOVIE'
    });
  }

  getGenres = () => {
    this.props.dispatch({
      type: 'FETCH_GENRE'
    });
  }

  render() {
    console.log('Movie:', this.props.movie);
    return (
      <Router>
        <div className="App">
          <h1>Movies!</h1>
          <MovieList />

          <Route path='/details' exact>
            <Details />
          </Route>
        </div>
      </Router>
    );
  }
}
export default connect()(App);
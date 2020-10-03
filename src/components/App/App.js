import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieList from '../MovieList/MovieList';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
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

          <Route path='/add-movie-form' exact>
            <AddMovieForm />
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
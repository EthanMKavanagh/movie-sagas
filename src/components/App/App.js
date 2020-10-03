import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieList from '../MovieList/MovieList';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import Details from '../Details/Details';
import Header from '../Header/Header';
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
          <Route path='/' exact>
            <Header />
          </Route>

          <Route path='/' exact>
            <MovieList />
          </Route>

          <Route path='/details' exact>
            <Details />
          </Route>

          <Route path='/add-movie-form' exact>
            <AddMovieForm />
          </Route>

        </div>
      </Router>
    );
  }
}
export default connect()(App);
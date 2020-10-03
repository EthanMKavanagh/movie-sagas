import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';

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
            {this.props.movies.map(movie => 
              <div>
                <img src={movie.poster} alt=''/>
                <span>
                {movie.title}
                <hr />
                {movie.description}
                </span>
              </div>
            )}
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (storeInstance) => ({
  movies: storeInstance.movies
});
export default connect(mapStateToProps)(App);

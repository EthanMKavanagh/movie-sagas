import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';
import NavigationBar from '../NavigationBar/NavigationBar';

class MovieList extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                {this.props.movies.map(movie => 
                    <MovieListItem
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
    movies: storeInstance.movies
});
export default connect(mapStateToProps)(withRouter(MovieList));
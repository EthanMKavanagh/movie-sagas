import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
    render() {
        return (
            <>
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
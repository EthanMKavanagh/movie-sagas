import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';
import NavigationBar from '../NavigationBar/NavigationBar';
import {Grid} from '@material-ui/core';

class MovieList extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}
                >
                    {this.props.movies.map(movie => 
                        <Grid item xs={2}>
                            <MovieListItem
                                key={movie.id}
                                movie={movie}
                            />
                        </Grid>
                    )}
                </Grid>
            </>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
    movies: storeInstance.movies
});
export default connect(mapStateToProps)(withRouter(MovieList));
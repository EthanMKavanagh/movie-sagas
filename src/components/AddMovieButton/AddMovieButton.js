import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class AddMovieButton extends Component {

    addMovie = () => {
        this.props.history.push('/add-movie-form');
    }

    render() {
        return (
            <button onClick={this.addMovie}>Add Movie</button>
        );
    }
}
export default connect()(withRouter(AddMovieButton));
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieListItem extends Component {

  // Dispatch on click to the details view
  getIndividualMovie = () => {
    this.props.dispatch({
      type: 'FETCH_INDIVIDUAL_MOVIE',
      payload: this.props.movie.id
    });
    // Route back to home page
    this.props.history.push('/details');
  }

  render() {
    return (
      <div onClick={this.getIndividualMovie}>
        <img src={this.props.movie.poster} width='185px' height='274px' alt='' />
      </div>
    );
  }
}
export default connect()(withRouter(MovieListItem));
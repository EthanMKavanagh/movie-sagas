import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieListItem extends Component {

  getIndividualMovie = () => {
    this.props.dispatch({
      type: 'FETCH_INDIVIDUAL_MOVIE',
      payload: this.props.movie.id
    });
    this.props.history.push('/details');
  }

  render() {
    return (
      <div onClick={this.getIndividualMovie}>
        <img src={this.props.movie.poster} alt=''/>
      </div>
    );
  }
}
export default connect()(withRouter(MovieListItem));
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Details extends Component {

    backToList = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                {this.props.movies.map(movie => 
                    <div key={movie.id}>
                        <h1>{movie.title}</h1>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                        <button onClick={this.backToList}>Back To List</button>
                    </div>
                )}
            </>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
    movies: storeInstance.individualMovie
});
export default connect(mapStateToProps)(withRouter(Details));
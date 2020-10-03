import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class MovieList extends Component {

    details = () => {
        this.props.history.push('/details');
    }

    render() {
        return (
            <>
                {this.props.movies.map(movie => 
                    <div onClick={this.details} key={movie.id}>
                        <img src={movie.poster} alt=''/>
                        {/* <br /> Just for now until I get to styling */}
                        <br />
                        <span>
                        {movie.title}
                        <hr />
                        {movie.description}
                        </span>
                    </div>
                )}
            </>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
    movies: storeInstance.movies
});
export default connect(mapStateToProps)(withRouter(MovieList));
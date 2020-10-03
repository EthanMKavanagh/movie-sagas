import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount = () => {
        this.props.getIndividualMovie();
    }

    render() {
        return (
            <div>
                {/* <img src={movie.poster} alt=''/>
                <br /> Just for now until I get to styling
                <br />
                <span>
                {movie.title}
                {genre.name}
                <hr />
                {movie.description}
                </span> */}
            </div>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
  movies: storeInstance.movies,
  genre: storeInstance.genres
});
export default connect(mapStateToProps)(Details);
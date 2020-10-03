import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Card, CardContent, CardActions} from '@material-ui/core';
import '../Details/Details.css';

class Details extends Component {

    // On click, route back to home page
    backToList = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                {this.props.movies.map(movie => 
                    <Card key={movie.id} className='card'>
                        <CardContent>
                            <h1>{movie.title}</h1>
                            <h4>{movie.name}</h4>
                            <img src={movie.poster} alt={movie.title}/>
                            <p>{movie.description}</p>
                        </CardContent>
                        <CardActions>
                            <button onClick={this.backToList}>Back To List</button>
                        </CardActions>
                    </Card>
                )}
            </>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
    movies: storeInstance.individualMovie
});
export default connect(mapStateToProps)(withRouter(Details));
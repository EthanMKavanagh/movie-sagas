import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

class AddMovieButton extends Component {
    
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre: ''
        }
    }

    addMovie = (propertyName, event) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [propertyName]: event.target.value
            }
        });
    }

    submit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'CREATE_MOVIE',
            payload: this.state.newMovie
        });

        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                genre: ''
            }
        });

        this.props.history.push('/');
    }

    cancel = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add New Movie</h1>
                <NavigationBar />
                <form onSubmit={this.submit}>
                    <input 
                        placeholder='Title' 
                        type='text'
                        onChange={(event) => this.addMovie('title', event)}
                    />
                    <input 
                        placeholder='Poster Image (url)' 
                        type='text'
                        onChange={(event) => this.addMovie('poster', event)}
                    />
                    <input 
                        placeholder='Description' 
                        type='text'
                        onChange={(event) => this.addMovie('description', event)}
                    />
                    <select 
                        name='genres' 
                        placeholder='Genre'
                        onChange={(event) => this.addMovie('genre', event)}
                    >
                        <option value='Adventure'>Adventure</option>
                        <option value='Animated'>Animated</option>
                        <option value='Biographical'>Biographical</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Disaster'>Disaster</option>
                        <option value='Drama'>Drama</option>
                        <option value='Epic'>Epic</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Musical'>Musical</option>
                        <option value='Romantic'>Romantic</option>
                        <option value='Science Fiction'>Science Fiction</option>
                        <option value='Space-Opera'>Space-Opera</option>
                        <option value='Superhero'>Superhero</option>
                    </select>
                    <button onClick={this.cancel}>Cancel</button>
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }
}
export default connect()(withRouter(AddMovieButton));
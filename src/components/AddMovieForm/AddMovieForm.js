import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class AddMovieButton extends Component {
    render() {
        return (
            <div>
                <h1>Add New Movie</h1>
                <form>
                    <input placeholder='Title' type='text'/>
                    <input placeholder='Poster Image (url)' type='text'/>
                    <input placeholder='Description' type='text'/>
                    <label for='genres'>Genre</label>
                    <select name='genres'>
                        <option value='Adventure' />
                        <option value='Animated' />
                        <option value='Biographical' />
                        <option value='Comedy' />
                        <option value='Disaster' />
                        <option value='Drama' />
                        <option value='Epic' />
                        <option value='Fantasy' />
                        <option value='Musical' />
                        <option value='Romantic' />
                        <option value='Science Fiction' />
                        <option value='Space-Opera' />
                        <option value='Superhero' />
                    </select>
                </form>
            </div>
        );
    }
}
export default connect()(withRouter(AddMovieButton));
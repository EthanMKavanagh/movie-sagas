import React, { Component } from 'react';
import {connect} from 'react-redux';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <li><a href='/#/'>Home</a></li>
                <li><a href='/#/add-movie-form/'>Add Movie</a></li>
            </div>
        )
    }
}
export default connect()(NavigationBar);
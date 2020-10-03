import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <h1>MOVIES!</h1>
        );
    }
}
export default connect()(Header);
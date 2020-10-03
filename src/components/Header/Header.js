import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <h1><b>MOVIES!</b></h1>
        );
    }
}
export default connect()(Header);
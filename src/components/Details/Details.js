import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        return (
            <>
                <h1>Hello Details</h1>
            </>
        );
    }
}

export default connect()(Details);
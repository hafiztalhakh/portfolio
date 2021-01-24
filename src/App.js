import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

import './App.css';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Layout />
            </Fragment>
        );
    }
}

export default withRouter(App);
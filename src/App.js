import React, { Component, Fragment } from 'react';

//React Router
import { withRouter } from 'react-router-dom';

// Website Layout
import Layout from './Containers/Layout/Layout';

// Stylesheet
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
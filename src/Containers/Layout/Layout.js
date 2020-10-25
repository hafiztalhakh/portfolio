import React, { Fragment, useEffect } from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

//Components
import Navbar from '../../Components/Navbar';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Education from '../../Components/Education';

const styles = makeStyles(theme => ({
    desktop: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    }
}));

function Layout() {

    const classes = styles();

    return (
        <Fragment>
            <Navbar />
           <div style={{height: 80}} />
            <About />
            <div style={{height: 100}} />
            <Skills />
            <div style={{height: 50}} />
            {/* <Education /> */}
        </Fragment >
    );
}

export default withRouter(Layout);
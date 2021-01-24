import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

//Components
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';

const useStyles = makeStyles(theme => ({
    paddingBlock: {
        height: 100,
        [theme.breakpoints.up('md')]: {
            height: 10
        }
    }
}));

function Layout() {
    const classes = useStyles();
    const theme = useTheme();
    const mediumScreens = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Fragment>
            <Navbar />
            <div className={classes.paddingBlock} />
            <About />
            <div className={classes.paddingBlock} />
            <Skills />
            <div className={classes.paddingBlock} />
            <Education />
            <div className={classes.paddingBlock} />
        </Fragment >
    );
}

export default withRouter(Layout);
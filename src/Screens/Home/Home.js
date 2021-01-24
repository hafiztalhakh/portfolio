import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

//Components
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Proficiency from './Components/Proficiency';

const useStyles = makeStyles(theme => ({
    paddingBlockTop: {
        height: 50,
        [theme.breakpoints.up('md')]: {
            height: 0
        }
    },
    paddingBlock: {
        height: 50,
        [theme.breakpoints.up('md')]: {
            height: 50
        }
    }
}));

function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const mediumScreens = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Fragment>
            <About />
            <div className={classes.paddingBlock} />
            <Skills />
            <div className={classes.paddingBlock} />
            <Education />
            <div className={classes.paddingBlock} />
            <Experience />
            <div className={classes.paddingBlock} />
            <Proficiency />
            <div className={classes.paddingBlock} />
        </Fragment >
    );
}

export default withRouter(Home);
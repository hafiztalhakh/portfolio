import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

//Components
import Navbar from '../Components/Navbar';
import NavMenu from '../Components/Navmenu';
import Home from '../Screens/Home/Home';
import Footer from '../Components/Footer';

const useStyles = makeStyles(theme => ({
    paddingBlockTop: {
        height: 100,
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

function Layout() {
    const classes = useStyles();
    const theme = useTheme();
    const mediumScreens = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Fragment>
            {
                mediumScreens ?
                    <Navbar />
                    :
                    <NavMenu />
            }

            <div className={classes.paddingBlockTop} />
            <Home />
            <div className={classes.paddingBlock} />
            <Footer />
        </Fragment >
    );
}

export default withRouter(Layout);
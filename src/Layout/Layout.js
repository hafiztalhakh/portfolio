import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

//Components
import Navbar from '../Components/Navbar';
import NavMenu from '../Components/Navmenu';
import Home from '../Screens/Home/Home';
import Footer from '../Components/Footer/Footer';

const useStyles = makeStyles(theme => ({
    paddingBlockTop: {
        height: 100,
        [theme.breakpoints.up('md')]: {
            height: 0
        }
    },
    paddingBlock: {
        height: 100,
        [theme.breakpoints.up('md')]: {
            height: 200
        }
    }
}));

function Layout() {
    const classes = useStyles();
    const theme = useTheme();
    const mediumScreens = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        if (window.location.pathname === '/') {
            window.scrollTo(0, 0);
        }
    });

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
            <div id="contact" className={classes.paddingBlock} />
            <Footer />
        </Fragment >
    );
}

export default withRouter(Layout);
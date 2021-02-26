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
    // const HomeRef = React.useRef(null);
    const SKillsRef = React.useRef(null);
    const EducationRef = React.useRef(null);
    const ExperienceRef = React.useRef(null);
    const ProjectsRef = React.useRef(null);
    const ContactRef = React.useRef(null);

    React.useEffect(() => {

        if (window.location.pathname === '/') {
            window.scrollTo(0, 0);
        }
        else if (window.location.pathname === '/skills') {
            scrollToRef(SKillsRef);
        }
        else if (window.location.pathname === '/education') {
            scrollToRef(EducationRef);
        }
        else if (window.location.pathname === '/experience') {
            scrollToRef(ExperienceRef);
        }
        else if (window.location.pathname === '/projects') {
            scrollToRef(ProjectsRef);
        }
        else if (window.location.pathname === '/contact') {
            scrollToRef(ContactRef);
        }
    });

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Fragment>
            {
                mediumScreens ?
                    <Navbar />
                    :
                    <NavMenu />
            }

            <div className={classes.paddingBlockTop} />
            <Home
                SKillsRef={SKillsRef}
                EducationRef={EducationRef}
                ExperienceRef={ExperienceRef}
                ProjectsRef={ProjectsRef}
            />
            <div ref={ContactRef} className={classes.paddingBlock} />
            <Footer />
        </Fragment >
    );
}

export default withRouter(Layout);
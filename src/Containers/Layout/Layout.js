import React, { Fragment, useEffect } from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

//Components
import Navbar from '../../Components/Navbar';
import About from '../Screens/About';

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
            <About />
        </Fragment >
    );
}

export default withRouter(Layout);
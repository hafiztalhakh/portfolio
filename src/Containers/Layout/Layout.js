import React, { Fragment, useEffect } from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

//Components
import Navbar from '../../Components/Navbar';
// import MobileNavigationsMenu from '../../Components/MobileNavigationMenu';
// import Footer from '../../Components/Footer';

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
            {/* <div className={classes.mobile}>
                <MobileNavigationsMenu />
            </div> */}
            <div className={classes.desktop}>
                <Navbar />
            </div>

            {/* <Footer /> */}
        </Fragment >
    );
}

export default withRouter(Layout);
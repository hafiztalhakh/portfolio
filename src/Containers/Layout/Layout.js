import React, { Fragment, useEffect } from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

//Components
import Navbar from '../../Components/Navbar';
import MobileNavigationsMenu from '../../Components/MobileNavigationMenu';
import Footer from '../../Components/Footer';

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

    useEffect(() => {

        let navElement = document.getElementById('my-navbar');
        let logoElement = document.getElementById('my-logo');

        const listenScroll = document.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (winScroll > 99) {
                navElement.classList.add("fixed-nav");
                navElement.classList.remove("transparent-nav");
                logoElement.classList.add("blue-logo");
                logoElement.classList.remove("white-logo");
            }
            else if (winScroll < 99) {
                navElement.classList.add("transparent-nav");
                navElement.classList.remove("fixed-nav");
                logoElement.classList.add("white-logo");
                logoElement.classList.remove("blue-logo");
            }
        });

        return () => {
            document.removeEventListener("scroll", listenScroll)
        }
    }, []);


    return (
        <Fragment>
            <div className={classes.mobile}>
                <MobileNavigationsMenu />
            </div>
            <div className={classes.desktop}>
                <Navbar />
            </div>

            <Footer />
        </Fragment >
    );
}

export default withRouter(Layout);
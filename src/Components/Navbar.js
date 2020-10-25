import React from 'react';
//Material UI
import { Container, Typography, AppBar, Toolbar } from '@material-ui/core';
//React Router
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {

    return (
        <AppBar position="fixed" style={{backgroundColor: '#171717'}}>
            <Container maxWidth="lg">
                <Toolbar>
                    <div style={{ width: '100%' }}>
                        <div className="logo-box">
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <Typography variant="h6" id="my-logo" className="developer-name">
                                   Talha Khalid
                                </Typography>
                            </Link>
                        </div>
                        <div className="navigations">
                            <ul>
                                <li> <Link className='navLinks underline' to='/'>About</Link> </li>
                                <li> <Link className='navLinks underline' to='/about'>Skills</Link> </li>
                                <li> <Link className='navLinks underline' to='/services'>Education</Link> </li>
                                <li> <Link className='navLinks underline' to='/portfolio'>Experience</Link> </li>
                                <li> <Link className='navLinks underline' to='/contact'>Open Source</Link> </li>
                                <li> <Link className='navLinks underline' to='/contact'>Contact</Link> </li>
                            </ul>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default withRouter(Navbar);

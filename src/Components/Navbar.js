import React from 'react';
import { Container, Typography, AppBar, Toolbar } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#171717' }}>
            <Container maxWidth="lg">
                <Toolbar>
                    <div style={{ width: '100%' }}>
                        <div className="logo-box">
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <Typography variant="h6" id="my-logo" className="developer-name">
                                    &lt;
                                    Talha Khalid
                                    /&gt;
                                </Typography>
                            </Link>
                        </div>
                        <div className="navigations">
                            <ul>
                                <li> <Link className='navLinks underline' to='/'>About</Link> </li>
                                <li> <Link className='navLinks underline' to='/#skills'>Skills</Link> </li>
                                <li> <Link className='navLinks underline' to='/#education'>Education</Link> </li>
                                <li> <Link className='navLinks underline' to='/#experience'>Experience</Link> </li>
                                <li> <Link className='navLinks underline' to='/#projects'>Projects</Link> </li>
                                <li> <Link className='navLinks underline' to='/#contact'>Contact</Link> </li>
                            </ul>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default withRouter(Navbar);

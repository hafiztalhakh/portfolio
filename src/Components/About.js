import React from 'react';
//Material UI
import { Container, Grid, makeStyles, Button } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';

const styles = makeStyles(theme => ({
    textContainer: {
        position: 'relative',
        marginLeft: 110
    },
    hi: {
        color: '#ffff00',
        marginBottom: -10
    },
    developeName: {
        color: '#ffff00'
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'left',
        fontSize: 16,
        letterSpacing: 0.48,
        lineHeight: 1.8
    },
}));

const About = () => {
    const classes = styles();

    return (
        <Container maxWidth="lg">
            <Grid contaienr spacing={3}>
                <Grid item md={6}>
                    <div>
                        <h5 className='title-left'>Introduction</h5>
                        <div className={classes.textContainer}>
                            <h1 className={classes.hi}>Hi!</h1>
                            <h4>My name is <span className={classes.developeName}>Talha Khalid</span></h4>
                            <p className={classes.text}>
                                I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software engineering and I will graduate in the year 2021. I am Ui Ux designer and currently working as a freelancer.
                            </p>
                            <Button
                                variant="contain"
                                className="btn"
                            >CONTACT ME</Button>
                        </div>
                    </div>

                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(About);

import React from 'react';
//Material UI
import { Container, Grid, makeStyles } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';

const styles = makeStyles(theme => ({
    title: {
        display: 'inline-block',
        color: '#fff',
        fontSize: 30,
        fontWeight: 600,
        wordSpacing: 9,
        transform: 'rotate(-90deg)',
        position: 'relative',
        top: 60,
        left: -53
    },
    titleUnderline: {
        display: 'inline-block',
        color: '#fff',
        border: '6px solid yellow',
        wordSpacing: 9,
        transform: 'rotate(-90deg)',
        position: 'relative',
        top: 60,
        left: -53
    }
}));

const About = () => {
    const classes = styles();

    return (
        <Container maxWidth="lg">
            <Grid contaienr spacing={3}>
                <Grid item md={6}>
                    <div>
                        <h5 className={classes.title}>Introduction</h5>
                        <hr className={classes.titleUnderline} />
                        <h1>HI!</h1>
                        <h3>My name is <span className={classes.developeName}>Talha Khalid</span></h3>
                    </div>

                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(About);

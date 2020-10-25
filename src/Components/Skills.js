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

const Skills = () => {
    const classes = styles();

    return (
        <Container maxWidth="lg">
            <h1 className='title-left' style={{ marginLeft: 53, top: 300 }}>Skills</h1>
            <div className={classes.textContainer}>
                <h1 className="title center-text">What I do</h1>
                <p className="text-info center-text">
                    I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software engineering and I will graduate in the year 2021. I am Ui Ux designer and currently working as a freelancer.
                    </p>
            </div>
            <Grid contaienr spacing={3}>
                <Grid item md={12}>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(Skills);

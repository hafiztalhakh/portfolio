import React from 'react';
import { Container, Grid, makeStyles, Button, useTheme, useMediaQuery } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import Image01 from '../../../Assets/Images/Group 34.png';

const styles = makeStyles(theme => ({
    textContainer: {
        // position: 'relative',
        [theme.breakpoints.up('md')]: {
            marginLeft: 110
        }
    },
    title: {
        display: 'inline-block',
        position: 'relative',
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
        wordSpacing: 9,
        transform: 'rotate(-90deg)',
        top: 230,
        left: -40,
        "& :after": {
            margin: "margin: 20px auto 0px",
            content: "",
            display: 'block',
            height: 7,
            width: '100%',
            backgroundColor: '#087059',
            borderRadius: 5,
            marginTop: 5
        }
    },
    hi: {
        color: '#087059',
        marginBottom: -10
    },
    developeName: {
        color: '#087059'
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'left',
        fontSize: 16,
        letterSpacing: 0.48,
        lineHeight: 1.8
    },
    btn: {
        backgroundImage: 'linear-gradient(90deg, rgb(2, 0, 36) 0%, #087059 0%, rgb(119 115 14 / 71%) 100%)',
        color: 'white',
        width: 180,
        padding: 10,
        marginTop: 30,
    },
    image01Style: {
        width: '90%',
        [theme.breakpoints.up('md')]: {
            marginLeft: 60
        },
    },
}));

const About = () => {
    const classes = styles();
    const {
        textContainer,
        title,
        hi,
        developeName,
        text,
        btn,
        image01Style,
    } = classes;
    const theme = useTheme();
    const mediumScreens = useMediaQuery(theme.breakpoints.up('md'));
    const smallScreens = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container maxWidth="lg">
            {
                mediumScreens && <h1 className="title-left">Introduction</h1>
            }
            <Grid contaienr style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
            }}>
                <Grid item sm={6} md={6}>
                    <div>
                        <div className={textContainer}>
                            <h1 className={hi}>Hi!</h1>
                            <h4 style={{ fontWeight: 'normal' }}>My name is <strong className={developeName}>Talha Khalid</strong></h4>
                            <p className="text-info left-text">
                                I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software engineering and I will graduate in the year 2021. I am Ui Ux designer and currently working as a freelancer.
                            </p>
                            <Button
                                variant="contain"
                                className={btn}
                            >CONTACT ME</Button>
                        </div>
                    </div>

                </Grid>
                {
                    smallScreens &&
                    <Grid item sm={6} md={6}>
                        <img src={Image01} alt="image01" className={image01Style} />
                    </Grid>
                }
            </Grid>
        </Container>
    )
}

export default withRouter(About);

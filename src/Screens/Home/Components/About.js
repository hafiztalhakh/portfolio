import React from 'react';
import { Container, Grid, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Fade } from "react-reveal";

import Image01 from '../../../Assets/Images/Group 34.png';
import { customColorTheme, about } from '../../../Portfolio/portfolio';

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
        color: customColorTheme.defaultColor,
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
            backgroundColor: customColorTheme.primaryColor,
            borderRadius: 5,
            marginTop: 5
        }
    },
    hi: {
        color: customColorTheme.primaryColor,
        marginBottom: -10
    },
    developeName: {
        color: customColorTheme.primaryColor
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'left',
        fontSize: 16,
        letterSpacing: 0.48,
        lineHeight: 1.8
    },
    btn: {
        backgroundImage: `linear-gradient(90deg, rgb(2, 0, 36) 0%, ${customColorTheme.primaryColor} 0%, rgb(119 115 14 / 71%) 100%)`,
        color: customColorTheme.defaultColor,
        width: 180,
        padding: '15px 30px',
        marginTop: 30,
        textDecoration: 'none',
        textTransform: 'uppercase',
        borderRadius: 4,
        textAlign: 'center',
        fontWeight: 'normal'
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
                            <h4 style={{ fontWeight: 'normal' }}>My name is <strong className={developeName}>{about.developerName}</strong></h4>
                            <p className={text}>
                                {about.aboutText}
                            </p>
                            <div style={{ height: 10 }} />
                            <Fade bottom duration={1000} distance="100px">
                                <div>
                                    <a
                                        href={about.resumeLink}
                                        target="blank"
                                        className={btn}
                                    >
                                        CONTACT ME
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </div>

                </Grid>
                {
                    smallScreens &&

                    <Grid item sm={6} md={6}>
                        <Fade right duration={1000}>
                            <img src={Image01} alt="image01" className={image01Style} />
                        </Fade>
                    </Grid>
                }
            </Grid>
        </Container >
    )
}

export default withRouter(About);

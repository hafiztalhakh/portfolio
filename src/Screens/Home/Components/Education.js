import React, { useState } from 'react';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Fade } from "react-reveal";

import { customColorTheme, education } from '../../../Portfolio/portfolio';

const styles = makeStyles(theme => ({
    sectionTitleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    sectionTitle: {
        color: customColorTheme.defaultColor,
        fontSize: 36,
        textAlign: 'center'
    },
    underline: {
        backgroundColor: customColorTheme.primaryColor,
        height: 5,
        borderRadius: 40
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        padding: 20,
        backgroundColor: customColorTheme.backgroundColor,
        color: customColorTheme.defaultColor,
        boxShadow: '10px 20px 30px #0000004D',

    },
    eduLogo: {
        height: 100,
        width: 100,
        borderRadius: 50,
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        }
    },
    instituteStyle: {
        color: customColorTheme.primaryColor,
        fontSize: 22,
        marginTop: 0,
        marginBottom: 10,
        fontWeight: 'normal'
    },
    infoDegree: {
        color: customColorTheme.defaultColor,
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'left',
        fontSize: 12,

    },
}));

export default function Education() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        paper,
        eduLogo,
        instituteStyle,
        infoDegree,
        text
    } = classes;

    return (
        <Container maxWidth="lg">
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    Education
                <div className={underline} />
                </h1>
            </div>
            <Fade bottom duration={1000} distance="100px">
                <Grid container spacing={3}>
                    {
                        education && education.length &&
                        education.map((el, i) => (
                            <Grid item sm={12} md={6}>
                                <Paper elevation={3} className={paper}>
                                    <Grid container>
                                        <Grid item xs={4} sm={3}>
                                            <img
                                                src={el.img}
                                                alt={`institute-pic${i}`}
                                                className={eduLogo}
                                            />
                                        </Grid>
                                        <Grid item xs={8} sm={9}>
                                            <h4 className={instituteStyle}>{el.institute}</h4>
                                            <p className={infoDegree}>{el.degree}</p>
                                            <p className={infoDegree}>{el.duration}</p>
                                        </Grid>
                                    </Grid>
                                    <p className={text}>{el.description}</p>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Fade>
        </Container>
    )
}

import React, { useState } from 'react';
import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

import { customColorTheme, experience } from '../../../Portfolio/portfolio';

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
        padding: '40px 30px',
        backgroundColor: customColorTheme.backgroundColor,
        color: customColorTheme.defaultColor,
        boxShadow: '10px 20px 30px #0000004D',
        minHeight: 430
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    orgImg: {
        height: 100,
        width: 100,
        // borderRadius: 50,
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        }
    },
    jobTitle: {
        fontSize: 30,
        fontWeight: 'normal'
    },
    occupationTitle: {
        color: customColorTheme.primaryColor,
        fontSize: 20,
        margin: "20px 0",
    },
    experienceDate: {
        color: customColorTheme.defaultColor,
        fontSize: 16,
        margin: "20px 0"
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'center',
        fontSize: 16,

    },
}));

export default function Experience() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        paper,
        orgImg,
        displayCenter,
        jobTitle,
        occupationTitle,
        experienceDate,
        text
    } = classes;

    return (
        <Container maxWidth="md">
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    Experience
                <div className={underline} />
                </h1>
            </div>
            <Grid container spacing={3}>
                {
                    experience && experience.length &&
                    experience.map((el, i) => (
                        <Grid item sm={12} md={6}>
                            <Paper elevation={3} className={paper}>
                                <div className={displayCenter}>
                                    <img src={el.img} alt={el.experienceName} className={orgImg} />
                                </div>
                                <div className={displayCenter}>
                                    <h4 className={jobTitle}>
                                        {el.experienceName}
                                    </h4>
                                </div>
                                <div className={displayCenter}>
                                    <Typography className={occupationTitle}>
                                        {el.experienceOccup}
                                    </Typography>
                                </div>
                                <div className={displayCenter}>
                                    <Typography className={experienceDate}>
                                        {el.experienceDate}
                                    </Typography>
                                </div>
                                <div className={displayCenter}>
                                    <Typography className={text}>
                                        {el.experienceDetails}
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

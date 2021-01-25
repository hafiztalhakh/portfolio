import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { customColorTheme, projects } from '../../../Portfolio/portfolio';

const useStyles = makeStyles(theme => ({
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

    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: "75%",
        height: "auto",
        // borderRadius: 15,
    },
    description: {
        backgroundColor: "#0A0A0A",
        fontSize: 16,
        color: customColorTheme.defaultColor,
        textAlign: "center",
        paddingTop: 20,
    }
})
);

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
}

export default function Projects() {
    const classes = useStyles();
    const {
        paper,
        sectionTitleContainer,
        sectionTitle,
        underline,
        displayCenter,
        image,
        workTitle,
        text
    } = classes;

    return (
        <Container maxWidth="lg" style={{ marginTop: 60 }}>
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    PROJECTS
                        <div className={underline} />
                </h1>
            </div>
            <Grid container spacing={3}>

            </Grid>
            <AliceCarousel
                mouseTracking
                items={
                    projects && projects.length &&
                    projects.map((el, i) => (
                        <Paper key={i} elevation={3} className={paper}>
                            <div className={displayCenter}>
                                <img src={el.img} alt={el.workName} className={image} />
                            </div>
                            <div className={displayCenter}>
                                <h4 className={workTitle}>
                                    {el.workName}
                                </h4>
                            </div>
                        </Paper>
                    ))
                }
                responsive={responsive}
                disableButtonsControls
            />
        </Container>
    );
}

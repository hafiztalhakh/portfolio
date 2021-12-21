import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Container, Grid, Paper, Typography } from '@material-ui/core';
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
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        padding: '20px 20px',
        backgroundColor: customColorTheme.backgroundColor,
        color: customColorTheme.defaultColor,
        boxShadow: '10px 20px 30px #0000004D',
        "&:hover": {
            "& .show": {
                display: "flex"
            }
        }
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "auto",
        // borderRadius: 15,
    },
    description: {
        backgroundColor: "#0A0A0A",
        fontSize: 16,
        color: customColorTheme.defaultColor,
        textAlign: "center",
        paddingTop: 20,
    },

    hidden: {
        display: "none",
        zIndex: 9999,
        position: "absolute",
        // top: 100,
        backgroundColor: "#171717d1",
        height: "92%",
        width: "100%"
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
        hidden,
        text
    } = classes;

    return (
        <Container maxWidth="lg" style={{ marginTop: 60 }}>
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    Projects
                    <div className={underline} />
                </h1>
            </div>
            <Grid container spacing={3}>
                {
                    projects && projects.length &&
                    projects.map((el, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4}>
                            <Paper elevation={3} className={paper}>
                                <div className={displayCenter}>
                                    <img src={el.img} alt={el.workName} className={image} />
                                </div>
                                <div className={`${displayCenter} ${hidden} show`}>
                                    <h4>{el.workName}</h4>
                                    {/* <Chip label={el.workName} style={{
                                        backgroundColor: customColorTheme.backgroundColor,
                                        color: customColorTheme.defaultColor
                                    }} /> */}
                                </div>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

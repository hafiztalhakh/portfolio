import React, { useState } from 'react';
import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

import Freelancing from '../Assets/Images/freelancing.svg';
import Novasoft from '../Assets/Images/logo.png';

const styles = makeStyles(theme => ({
    sectionTitleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 36,
        textAlign: 'center'
    },
    underline: {
        backgroundColor: '#ffff00',
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
        backgroundColor: '#171717',
        color: '#fff',
        boxShadow: '10px 20px 30px #0000004D',

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
        color: '#ffff00',
        fontSize: 20,
        margin: "20px 0",
    },
    experienceDate: {
        color: '#fff',
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
        text,

    } = classes;

    const [data, setData] = useState([
        {
            img: Freelancing,
            experienceName: "FREELANCING",
            experienceOccup: "FULL STACK DEVELOPER",
            experienceDate: "JUNE 2019 - Present",
            experienceDetails: `
            Creating rich proefssional web applications
            Created various Portfolio websites
            CRM Development`,
        },
        {
            img: Novasoft,
            experienceName: "TechNest",
            experienceOccup: "SOFTWARE ENGINEER",
            experienceDate: "JUNE 2019 - 2020",
            experienceDetails: `
            Designs and creates professional web applications
            Checks feasibility of software prototypes
            Modifies code to fix errors`,
        },
    ])

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
                    data && data.length &&
                    data.map((el, i) => (
                        <Grid item sm={12} md={6}>
                            <Paper elevation={3} className={paper}>
                                <Grid container style={{ height: "100%" }}>
                                    <Grid item xs={12} className={displayCenter}>
                                        <img src={el.img} alt={el.experienceName} className={orgImg} />
                                    </Grid>
                                    <Grid item xs={12} className={displayCenter}>
                                        <h4 className={jobTitle}>
                                            {el.experienceName}
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} className={displayCenter}>
                                        <Typography className={occupationTitle}>
                                            {el.experienceOccup}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={displayCenter}>
                                        <Typography className={experienceDate}>
                                            {el.experienceDate}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={displayCenter}>
                                        <Typography className={text}>
                                            {el.experienceDetails}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

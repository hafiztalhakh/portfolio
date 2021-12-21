import React from 'react';
import { Container, Grid, makeStyles, Typography, Paper } from '@material-ui/core';

import { customColorTheme, skillSet } from '../../../Portfolio/portfolio';

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
    skillLogo: {
        height: 80,
        width: 80,
    },
    skillName: {
        color: customColorTheme.defaultColor,
        fontSize: 18,
        fontWeight: 'normal'
    },
    mongooseContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    mongooseStyle: {
        color: "#800",
        fontWeight: 100,
        fontSize: 35,
        [theme.breakpoints.down('md')]: {
            fontSize: 27,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        }
    }
}));

export default function Skills() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        skillLogo,
        mongooseContainer,
        mongooseStyle,
        skillName
    } = classes;

    return (
        <Container maxWidth="md">
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    What I do
                <div className={underline} />
                </h1>
            </div>
            <Grid container spacing={3}>
                {
                    skillSet && skillSet.length &&
                    skillSet.map((el, i) => (
                        <Grid item xs={6} sm={4} md={3}>
                            <Paper elevation={3} className={classes.paper} key={i}>
                                {
                                    el.skill !== "Mongoose"
                                        ?
                                        <img src={el.icon} alt={el.skill} className={skillLogo} />
                                        :
                                        <div className={mongooseContainer}>
                                            <Typography className={mongooseStyle}>
                                                Mongoose
                                            </Typography>
                                        </div>
                                }
                                <h4 className={skillName}>{el.skill}</h4>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

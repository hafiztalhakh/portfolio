import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from '@material-ui/core';

import { customColorTheme, proficiency } from '../../../Portfolio/portfolio';
import CustomizedProgress from '../../../Components/CustomisedProgress';

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
    mainHeading: {
        fontSize: 32,
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    underlineStyle: {
        background: "#087059",
        height: "4px",
        borderRadius: 30,
    },
    skill: {
        fontSize: 26,
        color: customColorTheme.defaultColor,
        padding: 20,
    }
}));



export default function Proficiency() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        skill,
    } = classes;

    return (
        <Container maxWidth="md" style={{ marginTop: 60 }}>
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    PROFICIENCY
                <div className={underline} />
                </h1>
            </div>
            <Grid container spacing={3}>
                {
                    proficiency.map((proficiency, index) => {
                        return (
                            <Grid item xs={12} md={6} key={index}>
                                <Typography className={skill}>
                                    {proficiency.name}
                                </Typography>
                                <CustomizedProgress level={proficiency.level} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    );
}

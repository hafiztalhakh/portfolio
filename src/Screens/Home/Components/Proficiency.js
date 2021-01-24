import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import CustomizedProgress from '../Components/CustomisedProgress';

const styles = theme => ({
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
        background: "#ffff00",
        height: "4px",
        borderRadius: 30,
    },
    skill: {
        fontSize: 26,
        color: "white",
        padding: 20,
    }
});

const proficiencies = [
    {
        name: "ReactJS",
        level: 95,
    },
    {
        name: "NodeJS/Express",
        level: 90,
    },
    {
        name: "MongoDB/Mongoose",
        level: 85,
    },
    {
        name: "React Native",
        level: 70,
    },
    {
        name: "SQL Database",
        level: 65,
    },
    {
        name: "Javascript",
        level: 95,
    },
    {
        name: "HTML",
        level: 90,
    },
    {
        name: "CSS3",
        level: 87,
    },
    {
        name: "Github",
        level: 80,
    },
]

class Proficiency extends Component {

    render() {
        const { classes } = this.props;
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
                        Experience
                <div className={underline} />
                    </h1>
                </div>
                <Grid container spacing={3}>
                    {
                        proficiencies.map((proficiency, index) => {
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
}

export default withStyles(styles)(Proficiency);

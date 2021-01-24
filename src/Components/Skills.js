import React, { useState } from 'react';
import { Container, Grid, makeStyles, Typography, Paper } from '@material-ui/core';

import HTML from '../Assets/Images/Mask Group 22.png';
import ReactIcon from '../Assets/Images/react.svg';
import NodeIcon from '../Assets/Images/nodejs.svg';
import ExpressIcon from '../Assets/Images/expressjs.png';
import MongoDbIcon from '../Assets/Images/mongodb.svg';
import SqlDatabase from '../Assets/Images/sql-database.svg';
import CSSIcon from '../Assets/Images/css-3.svg';
import GithubIcon from '../Assets/Images/github.svg';
import JavascriptIcon from '../Assets/Images/javascript.svg';

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
        padding: 20,
        backgroundColor: '#171717',
        color: '#fff',
        boxShadow: '10px 20px 30px #0000004D',

    },
    skillLogo: {
        height: 80,
        width: 80,
    },
    skillName: {
        color: "white",
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
    const [data, setData] = useState([
        {
            skill: "MongoDB",
            icon: MongoDbIcon,
        },
        {
            skill: "Express",
            icon: ExpressIcon,
        },
        {
            skill: "ReactJS",
            icon: ReactIcon,
        },
        {
            skill: "NodeJS",
            icon: NodeIcon,
        },
        {
            skill: "React Native",
            icon: ReactIcon,
        },
        {
            skill: "Mongoose",
            icon: null,
        },
        {
            skill: "SQL Database",
            icon: SqlDatabase,
        },
        {
            skill: "Javascript",
            icon: JavascriptIcon,
        },
        {
            skill: "HTML",
            icon: HTML,
        },
        {
            skill: "CSS3",
            icon: CSSIcon,
        },
        {
            skill: "Github",
            icon: GithubIcon,
        },
    ])

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
                    data && data.length &&
                    data.map((el, i) => (
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

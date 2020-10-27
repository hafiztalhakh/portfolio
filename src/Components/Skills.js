import React from 'react';
//Material UI
import { Container, Grid, makeStyles, Button, Paper } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';

import { FaWordpress, FaReact, FaNode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { RiFlutterLine } from "react-icons/ri";
import { IoLogoJavascript } from 'react-icons/io';
import { DiMongodb, DiFirebase } from 'react-icons/di'

const styles = makeStyles(theme => ({
    textContainer: {
        position: 'relative',
        marginLeft: 150
    },
    hi: {
        color: '#ffff00',
        marginBottom: -10
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
}));

const Skills = () => {
    const classes = styles();

    return (
        <Container maxWidth="lg">
            <h1 className='title-left' style={{ marginLeft: 53, top: 325 }}>Skills</h1>
            <div className={classes.textContainer}>
                <Container maxWidth="md">
                    <h1 className="title center-text">What I do</h1>
                    <p className="text-info center-text">
                        I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software engineering and I will graduate in the year 2021. I am Ui Ux designer and currently working as a freelancer.
                </p>
                    <Grid container spacing={3}>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <FaHtml5 className="skill-icon" />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <FaCss3Alt />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <IoLogoJavascript />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <FaReact />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <FaNode />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <DiMongodb />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <FaReact />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <RiFlutterLine />
                                <h4>HTML</h4>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Container>
    )
}

export default withRouter(Skills);

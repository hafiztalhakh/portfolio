import React from 'react';
//Material UI
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';

const styles = makeStyles(theme => ({
    textContainer: {
        position: 'relative',
        marginLeft: 110
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
    eduLogo: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    uni: {
        color: '#ffff00',
        fontSize: 22,
        marginTop: 0,
        marginBottom: 10,
    },
    eudSubText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'left',
        fontSize: 12,
        // letterSpacing: 0.48,
        // lineHeight: 1.8
    },
}));

const Education = () => {
    const classes = styles();

    return (
        <Container maxWidth="lg">

            <h5 className='title-left' style={{ marginLeft: 10, top: 300 }}>Education</h5>
            <div className={classes.textContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <img
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU'}
                                        alt="uni-logo1"
                                        className={classes.eduLogo}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <h4 className={classes.uni}>University of Karachi</h4>
                                    <p className={classes.eudSubText}>Bachelor Of Science In Computer Science</p>
                                    <p className={classes.eudSubText}>January 2017 - January 2021</p>
                                </Grid>
                            </Grid>
                            <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <img
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU'}
                                        alt="uni-logo1"
                                        className={classes.eduLogo}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <h4 className={classes.uni}>University of Karachi</h4>
                                    <p className={classes.eudSubText}>Bachelor Of Science In Computer Science</p>
                                    <p className={classes.eudSubText}>January 2017 - January 2021</p>
                                </Grid>
                            </Grid>
                            <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <img
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU'}
                                        alt="uni-logo1"
                                        className={classes.eduLogo}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <h4 className={classes.uni}>University of Karachi</h4>
                                    <p className={classes.eudSubText}>Bachelor Of Science In Computer Science</p>
                                    <p className={classes.eudSubText}>January 2017 - January 2021</p>
                                </Grid>
                            </Grid>
                            <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <img
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU'}
                                        alt="uni-logo2"
                                        className={classes.eduLogo}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <h4 className={classes.uni}>University of Karachi</h4>
                                    <p className={classes.eudSubText}>Bachelor Of Science In Computer Science</p>
                                    <p className={classes.eudSubText}>January 2017 - January 2021</p>
                                </Grid>
                            </Grid>
                            <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default withRouter(Education);

import React, { useState } from 'react';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';

import KULogo from '../../../Assets/Images/Group 29.png';
import JouharDegree from '../../../Assets/Images/jouhar.jpg';
import TheEducators from '../../../Assets/Images/the-educators-1.jpg';

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
        backgroundColor: '#087059',
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
    eduLogo: {
        height: 100,
        width: 100,
        borderRadius: 50,
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        }
    },
    instituteStyle: {
        color: '#087059',
        fontSize: 22,
        marginTop: 0,
        marginBottom: 10,
        fontWeight: 'normal'
    },
    infoDegree: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: '#9F9F9F',
        textAlign: 'left',
        fontSize: 12,

    },
}));

export default function Education() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        paper,
        eduLogo,
        instituteStyle,
        infoDegree,
        text
    } = classes;

    const [data, setData] = useState([
        {
            institute: "University of Karachi",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU',
            duration: "January 2017 - January 2021",
            degree: "Bachelor Of Science In Computer Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: JouharDegree,
            institute: "PECHS Edu Found Govt Sci College",
            degree: "Pre-Engineering",
            duration: "2013 - 2016",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: TheEducators,
            institute: "The Educators",
            degree: "Matriculation",
            duration: "2001 - 2013",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU',
            institute: "University of Karachi",
            degree: "Bachelor Of Science In Computer Science",
            duration: "January 2017 - January 2021",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ])

    return (
        <Container maxWidth="lg">
            <div className={sectionTitleContainer}>
                <h1 className={sectionTitle}>
                    Education
                <div className={underline} />
                </h1>
            </div>
            <Grid container spacing={3}>
                {
                    data && data.length &&
                    data.map((el, i) => (
                        <Grid item sm={12} md={6}>
                            <Paper elevation={3} className={paper}>
                                <Grid container>
                                    <Grid item xs={4} sm={3}>
                                        <img
                                            src={el.img}
                                            alt={`institute-pic${i}`}
                                            className={eduLogo}
                                        />
                                    </Grid>
                                    <Grid item xs={8} sm={9}>
                                        <h4 className={instituteStyle}>{el.institute}</h4>
                                        <p className={infoDegree}>{el.degree}</p>
                                        <p className={infoDegree}>{el.duration}</p>
                                    </Grid>
                                </Grid>
                                <p className={text}>{el.description}</p>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

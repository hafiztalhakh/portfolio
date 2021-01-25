import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Project1 from '../../../Assets/Project Images/Project1.png';
import pic1 from '../../../Assets/Work/logo.jpg'

const useStyles = makeStyles(theme => ({
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
    image: {
        width: "75%",
        height: "auto",
        // borderRadius: 15,
    },
    description: {
        backgroundColor: "#0A0A0A",
        fontSize: 16,
        color: "white",
        textAlign: "center",
        paddingTop: 20,
    }
})
);

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



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

    const [data, setData] = useState([
        {
            img: pic1,
            workName: "Giverpays",
            link: "https://giverpays.com/"
        },
        {
            img: Project1,
            workName: "Yout Event Organizer",
            link: "https://youtheventorganizer.com/"
        },
        {
            img: Project1,
            workName: "LIS for PCMD - ICCBS",
            link: "https://pcmd-lab.herokuapp.com/"
        },
        {
            img: Project1,
            workName: "Shaheer Enterprises",
            link: "https://shaheerenterprises.com/"
        },
        {
            img: Project1,
            workName: "Hazir Sain",
            link: "https://hazirsain.com/"
        },
    ])

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
                    data && data.length &&
                    data.map((el, i) => (
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

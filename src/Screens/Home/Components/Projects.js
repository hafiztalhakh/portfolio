import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Project1 from '../../../Assets/Project Images/Project1.png';

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
        backgroundColor: '#087059',
        height: 5,
        borderRadius: 40
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    description: {
        backgroundColor: "#0A0A0A",
        fontSize: 16,
        color: "white",
        textAlign: "center",
        paddingTop: 20,
    }
});

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
};

class Projects extends Component {

    render() {
        const { classes } = this.props;
        const {
            sectionTitleContainer,
        sectionTitle,
        underline,
            image,
            description,
        } = classes;

        return (
            <Container maxWidth="lg" style={{ marginTop: 60 }}>
                <div className={sectionTitleContainer}>
                    <h1 className={sectionTitle}>
                        PROJECTS
                            <div className={underline} />
                    </h1>
                </div>
                <AliceCarousel
                    mouseTracking
                    items={
                        projects.map((project, index) => {
                            return (
                                <div>
                                    <img src={project.img} alt={index} className={image} draggable={false} />
                                    <Typography className={description}>
                                        {project.description}
                                    </Typography>
                                </div>
                            )
                        })
                    }
                    responsive={responsive}
                    disableButtonsControls
                />
            </Container>
        );
    }
}


const projects = [
    {
        img: Project1,
        description: `
            Portfolio website created for an artist using ReactJS
        `,
        link: "www.fathymakhalid.com"
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        img: Project1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
]

export default withStyles(styles)(Projects);

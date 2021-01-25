import React from "react";
import { makeStyles, Grid, Typography, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Fade } from "react-reveal";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import githubIcon from '../../../Assets/Images/github (1).svg';
import linkedInIcon from '../../../Assets/Images/linkedin.svg';
import facebbokIcon from '../../../Assets/Images/facebook.svg';
import { contactInfo, about, socialMediaLinks, customColorTheme } from "../../../Portfolio/portfolio";

const styles = makeStyles(theme => ({
    profileContainer:{
        color: customColorTheme.defaultColor
    },
    developerName: {
        fontFamily: 'Brush Script MT !important',
        fontSize: 30,
        color: customColorTheme.primaryColor,
        font: 'bold',
    },
    mainName: {
        fontSize: 32,
        color: customColorTheme.defaultColor,
        textDecoration: 'none'
    },
    imageContentProfile: {
        textAlign: 'center',
        flex: '20%',
        maxWidth: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95%',
        }
    },
    profileImage: {
        borderRadius: '50%',
        border: '0.5rem solid #6c63ff',
        borderColor: customColorTheme.primaryColor,
        marginLeft: 'auto',
        width: '100%',
        maxWidth: 350,
        height: 'auto',
        "&:hover": {
            boxShadow: 'rgba(0, 0, 0, 1) 0 30px 30px - 30px',
            transition: 'all 0.3s ease - out'
        }
    },
    oppurtunityBool: {
        color: customColorTheme.primaryColor
    },
    contactMe: {
        marginLeft: 5
    },
    listItemIcon: {
        minWidth: 30
    },
    icons: {
        color: customColorTheme.primaryColor
    },
    contactLinks: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

export default function GithubProfileCard({ prof }) {
    const theme = useTheme();
    const dektopScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = styles();
    const {
        profileContainer,
        mainName,
        developerName,
        imageContentProfile,
        profileImage,
        oppurtunityBool,
        contactMe,
        listItemIcon,
        icons,
        contactLinks
    } = classes;

    if (prof.hireable !== null) {
        prof.hireable = "Yes";
    } else {
        prof.hireable = "No";
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className={profileContainer} id="contact">
                <Grid container>
                    {
                        !dektopScreen &&
                        <Grid item xs={12} sm={4} md={3}>
                            <div className={imageContentProfile}>
                                <img src={prof.avatar_url} alt={prof.name} className={profileImage} />
                            </div>
                        </Grid>
                    }
                    <Grid item xs={12} sm={7} md={7}>
                        {
                            dektopScreen &&
                            <div>
                                <Link className={mainName} to='/'>
                                    <Typography variant="h6" id="my-logo" className={developerName}>
                                        &lt;
                                       {about.developerName}
                                        /&gt;
                                </Typography>
                                </Link>
                                <div style={{ height: 20 }} />
                            </div>
                        }
                        <div className="blog-header">
                            <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
                        </div>
                        <h3 className="bio-text">"{String(prof.bio)}"</h3>
                        <div className="opp-div">
                            <span className={oppurtunityBool}>Open for opportunities: <strong>{prof.hireable}</strong></span>
                        </div>
                        <div style={{ height: 15 }} />
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <p className={contactMe}>Contact Me</p>
                                <ListItem disableGutters>
                                    <ListItemIcon className={listItemIcon}>
                                        <PhoneIcon className={icons} />
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <a href={`tel:${contactInfo.number}`} className={contactLinks}>{contactInfo.number}</a>
                                    } />
                                </ListItem>
                                {
                                    contactInfo.number2 &&
                                    <ListItem disableGutters>
                                        <ListItemIcon className={listItemIcon}>
                                            <PhoneIcon className={icons} />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <a href={`tel:${contactInfo.number2}`} className={contactLinks}>{contactInfo.number2}</a>
                                        } />
                                    </ListItem>
                                }
                                <ListItem disableGutters>
                                    <ListItemIcon className={listItemIcon}>
                                        <EmailIcon className={icons} />
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <a href={`mailto:${contactInfo.email}`} className={contactLinks}>{contactInfo.email}</a>
                                    } />
                                </ListItem>
                                {prof.location !== null &&
                                    <ListItem disableGutters>
                                        <ListItemIcon className={listItemIcon}>
                                            <LocationOnIcon className={icons} />
                                        </ListItemIcon>
                                        <ListItemText primary={prof.location} />
                                    </ListItem>
                                }
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p className={contactMe}>Follow Me</p>
                                <a href={socialMediaLinks.github} target="blank" style={{ textDecoration: 'none', width: 60, display: 'inline-flex', justifyContent: 'center' }}>
                                    <img src={githubIcon} alt="Github" style={{ width: 50, height: 50 }} />
                                </a>
                                <a href={socialMediaLinks.linkedin} target="blank" style={{ textDecoration: 'none', width: 60, display: 'inline-flex', justifyContent: 'center' }}>
                                    <img src={linkedInIcon} alt="LinkedIn" style={{ width: 50, height: 50 }} />
                                </a>
                                <a href={socialMediaLinks.facebook} target="blank" style={{ textDecoration: 'none', width: 60, display: 'inline-flex', justifyContent: 'center' }}>
                                    <img src={facebbokIcon} alt="Facebook" style={{ width: 50, height: 50 }} />
                                </a>
                            </Grid>
                        </Grid>

                    </Grid>
                    {
                        dektopScreen && <Grid item xs={12} sm={1} md={2}> </Grid>
                    }

                    {
                        dektopScreen &&
                        <Grid item xs={12} sm={4} md={3}>
                            <div className={imageContentProfile}>
                                <img src={prof.avatar_url} alt={prof.name} className={profileImage} />
                            </div>
                        </Grid>
                    }
                </Grid>
            </div>
        </Fade>
    );
}

import React from "react";
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Fade } from "react-reveal";

import { contactInfo } from "../../../Portfolio/portfolio";

const styles = makeStyles(theme => ({
    textContainer: {
        // position: 'relative',
        [theme.breakpoints.up('md')]: {
            marginLeft: 110
        }
    },
    mainName: {
        fontSize: 32,
        color: "#fff",
        textDecoration: 'none'
    },
    imageContentProfile: {
        textAlign: 'right',
        flex: '20%',
        maxWidth: '100%',
        height: 'auto',
    },
    profileImage: {
        borderRadius: '50%',
        border: '0.5rem solid #6c63ff',
        marginLeft: 'auto',
        width: '100%',
        maxWidth: 350,
        height: 'auto',
        "&:hover": {
            boxShadow: 'rgba(0, 0, 0, 1) 0 30px 30px - 30px',
            transition: 'all 0.3s ease - out'
        }
    }
}));

export default function GithubProfileCard({ prof }) {
    const classes = styles();
    const {
        mainName,
        imageContentProfile,
        profileImage
    } = classes;

    if (prof.hireable !== null) {
        prof.hireable = "Yes";
    } else {
        prof.hireable = "No";
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="contact">
                <Grid container>
                    <Grid item xs={12} sm={8} md={9}>
                        <div>
                            <Link className={mainName} to='/'>
                                <Typography variant="h6" id="my-logo" className="developer-name">
                                    &lt;
                                    Talha Khalid
                                    /&gt;
                                </Typography>
                            </Link>
                        </div>
                        <div className="blog-header">
                            <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
                        </div>
                        <h2 className="bio-text">"{String(prof.bio)}"</h2>
                        {prof.location !== null &&
                            <div className="location-div">
                                <span className="desc-prof">
                                    <svg viewBox="0 0 12 16" version="1.1" width="20" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>{prof.location}
                                </span>
                            </div>}
                        <div className="opp-div">
                            <span className="desc-prof">Open for opportunities: {prof.hireable}</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <div className={imageContentProfile}>
                            <img src={prof.avatar_url} alt={prof.name} className={profileImage} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Fade>
    );
}

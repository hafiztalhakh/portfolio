import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { customColorTheme } from '../../../Portfolio/portfolio';

import FB from '../../../Assets/Images/Group 36.png';
import Linkedin from '../../../Assets/Images/linkedin.png';
import PhoneIcon from '../../../Assets/Images/Icon material-call.png';
import Mail from '../../../Assets/Images/Icon zocial-email.png';

const styles = theme => ({
    mainDiv: {
        width: "100%",
        height: 330,

    },
    mainName: {
        fontSize: 32,
        color: customColorTheme.defaultColor,
        textDecoration: 'none'
    },
    secondaryText: {
        fontSize: 16,
        color: customColorTheme.defaultColor,
        fontStyle: "italic",
    },
    normalText: {
        fontSize: 16,
    },
    socialIcon: {
        width: 50,
        height: 50,
    },
    socialIcon2: {
        width: 16,
        height: 16,
    },
    socialParent: {
        display: "flex",
        alignItems: "center",
    },
    creditDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentList: {
        marginTop: 0,
        paddingTop: 0,
        [theme.breakpoints.up('sm')]: {
            marginTop: -30,
        },
    },
    centerDesktop: {
        display: "flex",
        justifyContent: "left",
        [theme.breakpoints.up('sm')]: {
            justifyContent: "center",
        },
    }
});

class Footer extends Component {

    render() {
        const { classes } = this.props;
        const {
            mainDiv,
            mainName,
            secondaryText,
            normalText,
            socialIcon,
            socialIcon2,
            socialParent,
            creditDiv,
            contentList,
            centerDesktop,
        } = classes;

        return (
            <>
                <div className={mainDiv}>
                    <Container maxWidth="lg" style={{ padding: 30 }}>
                        <Grid container>
                            <Grid item md={4} xs={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Link className={mainName} to='/'>
                                            <Typography variant="h6" id="my-logo" className="developer-name">
                                                &lt;
                                                Talha Khalid
                                                /&gt;
                                            </Typography>
                                        </Link>
                                        <Typography className={secondaryText}>
                                            Software Engineer
                                            <br />
                                            MERN Stack Developer
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 90, marginBottom: 20 }}>
                                        <Typography className={normalText}>
                                            Follow Me
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <img src={FB} alt="fb" className={socialIcon} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4} className={centerDesktop}>
                                <List className={contentList}>
                                    <ListItem>
                                        <ListItemText>
                                            Home
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Skills
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Education
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Experience
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Proficiency
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Projects
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} md={4} className={centerDesktop}>
                                <List className={contentList}>
                                    <ListItem>
                                        <ListItemText>
                                            Contact Me
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <img src={PhoneIcon} alt="phone" />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            03362502067
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <img src={PhoneIcon} alt="phone" />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            03040438807
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <img src={Mail} alt="mail" />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            hafiz.talhakh@gmail.com
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Container>
                    <Divider style={{ background: "#087059" }} />
                    <div className={creditDiv}>
                        <Typography className={normalText} style={{ padding: 20, color: "#087059" }}>
                            All Rights Reserved By Talha Khalid
                        </Typography>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Footer);

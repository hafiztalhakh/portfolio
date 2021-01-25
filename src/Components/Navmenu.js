import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Container, List, ListItem, ListItemText, Typography, Dialog, AppBar, Toolbar, IconButton, Slide } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import { about, customColorTheme } from "../Portfolio/portfolio";

const styles = theme => ({
    root: {
        "& .MuiDialog-paperFullScreen": {
            backgroundColor: customColorTheme.backgroundColor
        }
    },
    appBar: {
        position: 'relative',
    },
    developerName: {
        fontFamily: 'Brush Script MT !important',
        fontSize: 30,
        color: customColorTheme.primaryColor,
        font: 'bold',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    listItem: {
        backgroundColor: customColorTheme.backgroundColor,
        color: customColorTheme.defaultColor,
    },
    listItemActive: {
        margin: 3,
        backgroundColor: customColorTheme.backgroundColor,
        // color: customColorTheme.defaultColor,
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

class Drawer extends Component {

    state = {
        open: false,
        isUserLoggedIn: true,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleButtonPress = (path) => {
        this.props.history.push(path);
        this.handleClose();
    }

    renderMenu = () => {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <React.Fragment>
                <IconButton edge="start" onClick={this.handleClickOpen} aria-label="close">
                    <MenuIcon style={{ color: customColorTheme.defaultColor }} />
                </IconButton>
                <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={Transition} className={classes.root}>
                    <AppBar className={classes.appBar} style={{ backgroundColor: customColorTheme.backgroundColor }}>
                        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="logo-box">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <Typography variant="h6" className={classes.developerName}>
                                        &lt;
                                        {about.developerName}
                                        /&gt;
                                </Typography>
                                </Link>
                            </div>
                            <IconButton edge="start" style={{ color: customColorTheme.defaultColor }} onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <List component="nav">
                        <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/skills') }}>
                            <ListItemText primary="Skills" />
                        </ListItem>
                        <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/education') }}>
                            <ListItemText primary="Education" />
                        </ListItem>
                        <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/experience') }}>
                            <ListItemText primary="Experience" />
                        </ListItem>
                        <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/projects') }}>
                            <ListItemText primary="Projects" />
                        </ListItem>
                        <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/contact') }}>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Dialog>
            </React.Fragment>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar
                position="fixed"
                className={classes.mobileAppBar}
                style={{ backgroundColor: customColorTheme.backgroundColor, fontFamily: '"Noto Sans KR", sans-serif', }} >
                <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="logo-box">
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <Typography variant="h6" className={classes.developerName}>
                                &lt;
                                {about.developerName}
                                /&gt;
                                </Typography>
                        </Link>
                    </div>
                    {this.renderMenu()}
                </Container>
            </AppBar>
        )
    }
}
export default withRouter(withStyles(styles)(Drawer));
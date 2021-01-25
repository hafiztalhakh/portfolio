import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography, Button, Dialog, Divider, AppBar, Toolbar, IconButton, Slide } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdReceipt } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    listItem: {
        backgroundColor: '#fff',
        // color: '#666666',
        '&:hover': {
            backgroundColor: '#087059',
            color: '#fff',
        },
    },
    listItemActive: {
        margin: 3,
        backgroundColor: '#087059',
        // color: '#fff',
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
        const { open, isUserLoggedIn } = this.state;

        return (
            <React.Fragment>
                <IconButton edge="start" onClick={this.handleClickOpen} aria-label="close">
                    <MenuIcon />
                </IconButton>
                <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar} style={{ backgroundColor: '#fff', fontFamily: '"Noto Sans KR", sans-serif', }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                onClick={() => this.props.history.push('/')}
                                style={{
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    display: 'inline-block',
                                    width: '80%',
                                    color: '#666666',
                                    fontWeight: "bold",
                                }}>
                                Shaheer Enterprises
                        </Typography>
                            <IconButton edge="start" color="black" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <React.Fragment>
                        <List component="nav">
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <HomeIcon style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <InfoIcon style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <WorkIcon style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Services" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <HomeIcon style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Find Property" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <ContactPhoneIcon style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Contact" />
                            </ListItem>
                        </List>
                        <Divider />
                        {isUserLoggedIn &&
                            <List
                                component="nav"
                                subheader={
                                    <ListSubheader component="div" style={{ position: 'relative', top: 0, zIndex: 1, }}>
                                        Account
                                     </ListSubheader>
                                }>
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <FaRegUserCircle style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Account" />
                                </ListItem>
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <MdReceipt style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Wishlist" />
                                </ListItem>
                            </List>
                        }
                        <Divider />
                        <List
                            component="nav"
                            subheader={
                                <ListSubheader component="div" style={{ position: 'relative', top: 0, zIndex: 1, }}>
                                    Help & Settings
                        </ListSubheader>
                            }>
                            {isUserLoggedIn &&
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <FiSettings style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Account Settings" />
                                </ListItem>
                            }
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <GiHelp style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Help" />
                            </ListItem>
                            {isUserLoggedIn ?
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <ExitToAppIcon style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </ListItem>
                                :
                                <div
                                    style={{
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        display: 'inline-flex'
                                    }}>
                                    <Button
                                        variant="contained"
                                        style={{
                                            color: '#fff',
                                            backgroundColor: '#087059',
                                            width: '80%',
                                            marginTop: 50
                                        }}>Login</Button>
                                </div>
                            }
                        </List>
                    </React.Fragment>
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
                style={{ backgroundColor: '#fff', fontFamily: '"Noto Sans KR", sans-serif', }} >
                <Container maxWidth="md">
                    {this.renderMenu()}
                    <Typography
                        variant="h6"
                        onClick={() => this.props.history.push('/')}
                        style={{
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            verticalAlign: 'middle',
                            display: 'inline-flex',
                            width: '80%',
                            height: 60,
                            color: '#087059',
                            fontWeight: "bold",

                        }}>
                        Shaheer Enterprises
                        </Typography>
                </Container>
            </AppBar>
        )
    }
}
export default withRouter(withStyles(styles)(Drawer));
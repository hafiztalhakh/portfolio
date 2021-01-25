import React, { useState, useEffect, Fragment } from "react";
import { Container, Divider, Typography, makeStyles } from '@material-ui/core';
import axios from "axios";

import Profile from "./Components/Profile";
import FooterNormal from "./Components/NormalFooter";

import { openSource,customColorTheme } from "../../Portfolio/portfolio";

const styles = makeStyles(theme => ({
    normalText: {
        fontSize: 16,
    },
    creditDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function Footer() {
    const classes = styles();
    const {
        normalText,
        creditDiv,
    } = classes;

    const [prof, setrepo] = useState([]);

    function setProfileFunction(array) {
        setrepo(array);
    }
    function getProfileData() {
        const client = axios.get("https://api.github.com/users/" + openSource.githubUserName)
            .then(function (response) {
                setProfileFunction(response.data);
            });
    }
    useEffect(() => {
        getProfileData();
    }, []);
    if (openSource.showGithubProfile === "true") {
        return (
            <Fragment>
                <Container maxWidth="lg">
                    <Profile prof={prof} />
                </Container>
                <Divider style={{ background: customColorTheme.primaryColor, marginTop: 20 }} />
                <div className={creditDiv}>
                    <Typography className={normalText} style={{ padding: 20, color: customColorTheme.primaryColor }}>
                        All Rights Reserved By Talha Khalid
                    </Typography>
                </div>
            </Fragment>
        );
    } else {
        return (<FooterNormal />);
    }
}

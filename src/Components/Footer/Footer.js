import React, { useState, useEffect } from "react";
import { Container, Grid, makeStyles, Button, useTheme, useMediaQuery } from '@material-ui/core';
import axios from "axios";

import Profile from "./Components/Profile";
import Contact from "./Components/Contact";

import { openSource } from "../../portfolio";

export default function Profile() {
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
        return (<Profile prof={prof} key={prof.id} />);
    } else {
        return (<Contact />);
    }
}

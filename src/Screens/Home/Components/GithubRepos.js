import React, { useState, useEffect } from "react";
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Fade } from "react-reveal";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

import { customColorTheme } from '../../../Portfolio/portfolio';

import GithubRepoCard from "../../../Components/GithubRepoCard";
import { openSource, socialMediaLinks } from "../../../Portfolio/portfolio";

const styles = makeStyles(theme => ({
    sectionTitleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    sectionTitle: {
        color: customColorTheme.defaultColor,
        fontSize: 36,
        textAlign: 'center'
    },
    underline: {
        backgroundColor: customColorTheme.primaryColor,
        height: 5,
        borderRadius: 40
    },
    displayCenter: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    btn: {
        backgroundImage: `linear-gradient(90deg, rgb(2, 0, 36) 0%, ${customColorTheme.primaryColor} 0%, rgb(94 34 3 / 100%) 100%)`,
        color: customColorTheme.defaultColor,
        width: 180,
        padding: '15px 30px',
        marginTop: 50,
        textDecoration: 'none',
        textTransform: 'uppercase',
        borderRadius: 4,
        textAlign: 'center',
        fontWeight: 'normal'
    }
}));

export default function Projects() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        displayCenter,
        btn
    } = classes;
    const [repo, setrepo] = useState([]);

    useEffect(() => {
        getRepoData();

    }, []);

    const getRepoData = () => {

        const client = new ApolloClient({
            uri: "https://api.github.com/graphql",
            request: (operation) => {
                operation.setContext({
                    headers: {
                        authorization: `Bearer ${openSource.githubConvertedToken}`,
                    },
                });
            },
        });

        client
            .query({
                query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
            })
            .then((result) => {
                setrepoFunction(result.data.user.pinnedItems.edges);
                // console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    function setrepoFunction(array) {
        setrepo(array);
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <Container maxWidth="lg">
                <div className={sectionTitleContainer}>
                    <h1 className={sectionTitle}>
                        Open Source Projects
                            <div className={underline} />
                    </h1>
                </div>
                <Grid container spacing={3}>
                    {repo.map((repo, i) => (
                        <Grid item xs={12} sm={6}>
                            <GithubRepoCard repo={repo} key={repo.node.id} />
                        </Grid>
                    ))
                    }
                </Grid>
                <div className={displayCenter}>
                    <a
                        href={socialMediaLinks.github}
                        target="blank"
                        className={btn}
                    >
                        More Projects
                    </a>
                </div>
            </Container>
        </Fade>
    );
}

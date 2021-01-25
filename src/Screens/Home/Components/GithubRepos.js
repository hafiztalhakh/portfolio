import React, { useState, useEffect } from "react";
import { Container, Grid, makeStyles, Button } from '@material-ui/core';
import { Fade } from "react-reveal";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import GithubRepoCard from "../../../Components/GithubRepoCard";
// import { openSource, socialMediaLinks } from "../../portfolio";

const openSource = {
    // githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "Talha619", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


const socialMediaLinks = {

    github: "https://github.com/saadpasta",
    linkedin: "https://www.linkedin.com/in/saadpasta/",
    gmail: "saadpasta70@gmail.com",
    gitlab: "https://gitlab.com/saadpasta",
    facebook: "https://www.facebook.com/saad.pasta7"
    // Instagram and Twitter are also supported in the links!
};

const styles = makeStyles(theme => ({
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
    projectTitle: {
        fontSize: 56,
        fontWeight: '400',
        lineHeight: 'normal',
        [theme.breakpoints.up('lg')]: {
            fontSize: 56,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            textAlign: 'center'
        }
    },
    startupProjectTextImg: {
        maxWidth: '100%',
        height: 'auto'
    },
    repoCardsDivMain: {
        display: 'grid',
        gridtemplatecolumns: 'repeat(auto - fit, minmax(400px, 1fr))',
        gap: '1rem 1rem',
        [theme.breakpoints.down('md')]: {
            gridtemplatecolumns: 'repeat(auto - fit, minmax(300px, 1fr))',
        }
    }
}));

export default function Projects() {
    const classes = styles();
    const {
        sectionTitleContainer,
        sectionTitle,
        underline,
        projectTitle,
        startupProjectTextImg,
        repoCardsDivMain
    } = classes;
    const [repo, setrepo] = useState([]);

    useEffect(() => {
        getRepoData();
    }, []);

    function getRepoData() {
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
                console.log(result);
            });
    }

    function setrepoFunction(array) {
        setrepo(array);
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <Container maxWidth="lg" id="opensource">
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
                <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
            </Container>
        </Fade>
    );
}

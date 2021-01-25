import React from "react";
import { makeStyles, Paper } from '@material-ui/core';
import { Fade } from "react-reveal";
import { GoRepo } from 'react-icons/go'

import {customColorTheme} from '../Portfolio/portfolio';

const styles = makeStyles(theme => ({
    paper: {
        height: 'auto',
        width: 'auto',
        padding: '40px 30px',
        backgroundColor: customColorTheme.backgroundColor,
        color: customColorTheme.defaultColor,
        boxShadow: '10px 20px 30px #0000004D',
        minHeight: 160,
        cursor: 'pointer',
    },
    repoNameContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    repoName: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: customColorTheme.primaryColor,
        marginBottom: '0.75rem',
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: -0.5,
        overflow: 'hidden',
        margin: 0,
        textAlign: 'left'
    },
    repoDescription: {
        overflow: 'hidden',
        display: '-webkit-box',
        webkitLineClamp: '2',
        webkitBoxOrient: 'vertical',
    },
    repoStats: {
        display: 'flex',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        fontSize: 13,
        color: 'rgb(106, 115, 125)',
    },
    repoLeftStat: {
        webkitBoxFlex: 1,
        flexGrow: 1,
        display: 'flex',
    },
    langaugeColor: {
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        marginRight: '0.25rem',
        borderRadius: '100%',
    },
    repoStatChild: {
        display: 'flex',
        webkitboxAlign: 'center',
        alignItems: 'center',
        marginRight: '0.75rem',
    },
    repoSvg: {
        marginRight: ' 0.5rem',
        minWidth: 16,
        color: customColorTheme.defaultColor
    },
    repoStarSvg: {
        marginRight: ' 0.3rem'
    }
}));

export default function GithubRepoCard({ repo }) {
    const classes = styles();
    const {
        paper,
        repoNameContainer,
        repoName,
        repoDescription,
        repoStats,
        repoLeftStat,
        langaugeColor,
        repoStatChild,
        repoSvg,
        repoStarSvg
    } = classes;

    function openRepoinNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <Paper elevation={3} className={paper} key={repo.node.id} onClick={() => openRepoinNewTab(repo.node.url)}>
                <div className={repoNameContainer}>
                    <GoRepo className={repoSvg} />
                    <p className={repoName}>{repo.node.name}</p>
                </div>
                <p className={repoDescription}>{repo.node.description}</p>
                <div className={repoStats}>
                    <div className={repoLeftStat}>
                        <span className={repoStatChild}>
                            <div className={langaugeColor} style={{ backgroundColor: repo.node.primaryLanguage.color }}></div>
                            <p>{repo.node.primaryLanguage.name}</p>
                        </span>
                        <span className={repoStatChild}>
                            <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" className={repoStarSvg}>
                                <path
                                    fill-rule="evenodd"
                                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                ></path>
                            </svg>
                            <p>{repo.node.forkCount}</p>
                        </span>
                        <span className={repoStatChild}>
                            <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" className={repoStarSvg}>
                                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                            </svg>
                            <p>{repo.node.stargazers.totalCount}</p>
                        </span>
                    </div>
                    <div className="repo-right-stat">
                        <p>{repo.node.diskUsage} KB</p>
                    </div>
                </div>
            </Paper>
        </Fade>
    );
}

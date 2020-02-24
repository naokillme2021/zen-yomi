import React from 'react';
import ReactDOM from 'react-dom'; 

import { makeStyles } from '@material-ui/styles';
import { theme } from './styles/theme';
import { Box, Typography } from '../node_modules/@material-ui/core';

const useStyles = makeStyles({
    NegaPosiTop: {
        textAlign: 'center'
    },
    NewsBox: {
        textAlign: 'left',
        marginLeft: 60,
        marginRight: 60,
    },
});

function NegaPosiNews() {
    const classes = useStyles();

    return(
        <div className={classes.NegaPosiTop}>
            <h1>ネガポジニュース一覧</h1>
            <NegaBoxPosi />

            
            <NegaBoxNega />
        </div>
    );
}

function NegaBoxPosi() {
    const classes = useStyles();

    return(
        <Box
            style={{
                background: '#e33371'
            }}
            className={classes.NewsBox}
        >
            <Typography
                variant="h3"
                style={{
                    color: 'white'
                }}
            >
                Positive News
            </Typography>
        </Box>
    );
}

function NegaBoxNega() {
    const classes = useStyles();

    return(
        <Box
            style={{
                background: '#4791db'
            }}
            className={classes.NewsBox}
        >
            <Typography
                variant="h3"
                style={{
                    color: 'white'
                }}
            >
                Negative News
            </Typography>
        </Box>
    );
}

export default NegaPosiNews;


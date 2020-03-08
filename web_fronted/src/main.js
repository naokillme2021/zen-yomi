import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/styles';
import { theme } from './styles/theme';
import { Box, Typography, GridList } from '../node_modules/@material-ui/core';
import Cards from './component/Cards';
import News from './data/News.json';
import axios from 'axios';
import { TEST_NEWS } from './data/api';

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://n9rsktt3h2.execute-api.us-east-2.amazonaws.com'


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

const NegaPosiNews = () => {
    axios.defaults.withCredentials = true;
    const [newsData, setNewsData] = useState();

    const getData = async () => {
        try {
            console.log("ここまでは来てる？");
            const result = await axios.get(
                `https://n9rsktt3h2.execute-api.us-east-2.amazonaws.com/zen-Yomu-mock/news/`,
                {
                    withCredentials: true
                }
            );
            console.log(result);
        } catch(err) {
            console.log("error!");
        }
    }

    const classes = useStyles();
    useEffect(() => {
        getData();
    });
    
    console.log(newsData);

    return(
        <div className={classes.NegaPosiTop}>
            <h1>ネガポジニュース一覧</h1>
            <NegaBoxPosi />
            <div>
                <GridList>
                    
                </GridList>
            </div>
            <NegaBoxNega />
            <button onClick={() => getData()}>get profile!</button>
        </div>
    );
}

const NegaBoxPosi = () => {
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

const NegaBoxNega = () => {
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


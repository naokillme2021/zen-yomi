import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '../../node_modules/@material-ui/core';
import { typography } from '../../node_modules/@material-ui/system';
import News from '../data/News.json';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginLeft: 60, 
    },
    media: {
        height:140,
    },
})

const Cards = props => {

    const {headl, word} = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/Users/shotaro/tanasho/zen-yomi/web_fronted/public/img/picData1.jpeg"
                    title="News1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {headl}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {word}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    );
}

export default Cards;
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

const data = [
    {id: 1, author: "Tanaka"},
    {id: 2, author: "Matsumoto"}
];

class Square extends React.Component {
    
    render() {
        return (
            this.props.data.map((data) => 
                <div>{data.headline}</div>
            )
        );
    }
}

const Cards = () => {
    const classes = useStyles();
    const length = Object.keys(News).length;

    console.log(length);

    const renderSquare = (props) => {
        return <Square data={props} />
    };

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
                        {renderSquare(News)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        土萠 ほたるちゃんがババ抜きで負けたようだ。
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    );
}

export default Cards;
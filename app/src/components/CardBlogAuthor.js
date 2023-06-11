import React from 'react';
// import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const CardBlogAuthor = ({
    cardImage,
    cardTitle,
    cardPosition,
    // cardPath
}) => {
    return (
        <Card className='card-blog-author'>
            <CardMedia
                className='card-media'
            >
                <Avatar alt={cardTitle} src={cardImage}  sx={{ width: 100, height: 100 }} />
            </CardMedia>
            <CardContent className='card-content'>
                <Typography gutterBottom variant="h5" component="div" className='card-title'>
                    {cardTitle}
                </Typography>
                <Typography gutterBottom variant="span" component="div" className='card-date'>
                    {cardPosition}
                </Typography>
            </CardContent>
            {/* <Link
                className="stretched-link"
                to={cardPath}
            /> */}
        </Card>
    );
}

export default CardBlogAuthor;

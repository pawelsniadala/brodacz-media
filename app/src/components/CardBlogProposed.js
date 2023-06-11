import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardBlogProposed = ({
    cardImage,
    cardTitle,
    cardDate,
    cardPath
}) => {
    return (
        <Card className='card-blog-proposed'>
            <CardMedia
                className='card-media'
                image={cardImage}
                title={cardTitle}
            />
            <CardContent className='card-content'>
                <Typography gutterBottom variant="h5" component="div" className='card-title'>
                    {cardTitle}
                </Typography>
                <Typography gutterBottom variant="span" component="div" className='card-date'>
                    {cardDate}
                </Typography>
            </CardContent>
            <Link
                className="stretched-link"
                to={cardPath}
            />
        </Card>
    );
}

export default CardBlogProposed;

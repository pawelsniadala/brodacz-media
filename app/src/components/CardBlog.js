import React from 'react';
import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import Skeleton from '@mui/material/Skeleton';


const CardBlog = ({
    cardImage,
    cardTitle,
    cardDescription,
    cardDate,

    cardAuthor,
    cardAvatar,
    cardPath,
    // cardLoading
}) => {
    return (
        <Card className='card-blog'>
            <CardMedia
                className='card-media'
                image={cardImage}
                title={cardTitle}
            >
                {/* <Box className='test'>
                    <Box component='span' className='month'>Czerwiec</Box>
                    <Box component='span' className='day'>08</Box>
                    <Box component='span' className='year'>2023</Box>
                </Box> */}
            </CardMedia>
            <CardContent className='card-content'>
                <Typography gutterBottom variant="span" component="div" className='card-date'>
                    {cardDate} • 6 minut czytania
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className='card-title'>
                    {cardTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card-description'>
                    {cardDescription}
                </Typography>

            </CardContent>
            <CardActions className='card-actions'>
                <Avatar alt={cardAuthor} src={cardAvatar} />
                <Typography variant="span" className='card-author'>
                    {cardAuthor}
                </Typography>
            </CardActions>
            <Link
                className="stretched-link"
                to={cardPath}
            />
        </Card>
    );
}

export default CardBlog;

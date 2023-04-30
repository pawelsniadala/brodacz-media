import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';

const CardBlog = ({
    cardImage,
    cardTitle,
    cardDescription,
    cardDate,

    cardAuthor,
    cardAvatar
}) => {
    return (
        <Card className='card-blog'>
            <CardMedia
            sx={{ height: 230 }}
                image={cardImage}
                title="green iguana"
            />
            <CardContent className='card-content'>
                <Typography gutterBottom variant="span" component="div" className='card-date'>
                    {cardDate}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className='card-title'>
                    {cardTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card-description'>
                    {cardDescription}
                </Typography>

            </CardContent>
            <CardActions className='card-actions'>
                {/* <Box> */}
                    <Avatar alt={cardAuthor} src={cardAvatar} />
                    <Typography variant="span" className='card-author'>
                        {cardAuthor}
                    </Typography>
                {/* </Box> */}
                {/* <Button size="small">{cardDate}</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}

export default CardBlog;

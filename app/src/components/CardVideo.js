import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';

const CardVideo = ({
    cardImage,
    cardImageVisible,
    cardTitle,
    cardTime,
    cardPath,
    cardCompany,
    // cardAvatarLogo,
    // cardAvatarSign,
    cardDate,
}) => {
    return (
        <Box className='card-video'>
            <Card className='card'>
                <CardMedia className='card-media'>
                    <Box
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardImage}
                        alt={cardTitle}
                        effect='blur'
                        visibleByDefault={cardImageVisible}
                    />
                    <Box className="card-video-time">
                        {cardTime}
                    </Box>
                </CardMedia>
                <CardContent className='card-content'>
                    {/* {cardAvatarLogo && (
                        <Avatar
                            className='card-avatar'
                            src={cardAvatarLogo}
                        />
                    )}
                    {cardAvatarSign && (
                        <Avatar sx={{
                            bgcolor: cardAvatarSign.background,
                            color: cardAvatarSign.color,
                        }}>
                            {cardAvatarSign.letter}
                      </Avatar>
                    )} */}
                    <Box>
                    <Typography
                        variant={'h6'}
                        className='card-title'
                    >
                        {cardTitle}
                    </Typography>
                    <Box className='card-meta'>
                        <Box className="card-meta">
                            <span className="company">
                                {cardCompany}
                            </span>
                            <span className="company">
                                {cardDate}
                            </span>
                        </Box>
                    </Box>
                    </Box>
                </CardContent>
                {cardPath && (
                    <Link to={cardPath} className='stretched-link' />
                )}
            </Card>
        </Box>
    );
}

export default CardVideo;

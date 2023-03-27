import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const CardProposed = ({
    cardImage,
    cardTitle,
    cardDescription,
    cardPath,

    cardThumbnaiVideoCompany,
    cardThumbnaiVideoDate
}) => {
    return (
        <Box
            className='card-proposed'
            display={'block'}
            width={1}
            height={1}
        >
            <Card className='card'>
                <CardMedia className='card-media'>
                    <Box
                        className='card-image'
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardImage}
                        alt={cardTitle}
                        effect='blur'
                    />
                </CardMedia>
                <CardContent className='card-content'>
                    <Typography className='card-title'>
                        {cardTitle}
                    </Typography>
                    {/* <Typography className='card-description'>
                        {cardDescription}
                    </Typography> */}
                    <small className="card-meta text-muted">
                        <span className="company">
                            {cardThumbnaiVideoCompany}
                            {/* Brodacz Media */}
                        </span>
                        <span className="company">
                            {cardThumbnaiVideoDate}
                            {/* 3 lis 2023 */}
                        </span>
                    </small>
                </CardContent>
                <Link to={cardPath} className='stretched-link' />
            </Card>
        </Box>
    );
}

export default CardProposed;

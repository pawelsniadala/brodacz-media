import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';

const Image = ({
    imageSrc,
    imageAlt,
    imageHref,
    imageAuthor
}) => {


    return (
        <Box className='image'>
            <LazyLoadImage
                // height={'100%'}
                width={'100%'}
                src={imageSrc}
                alt={imageAlt}
                // effect='blur'
                style={{
                    objectFit: 'cover',
                    borderRadius: 8,
                    width: '100%',
                    // height: '100%',
                    height: '450px',
                }}
            />
                <Box className='description'>
                    <Typography className='source'>
                        Designed by {imageHref ? (
                            <Typography
                                component='a'
                                className='author link'
                                href={imageHref}
                                target='_blank'
                                rel='noreferrer'
                            >
                                {imageAuthor}
                            </Typography>
                        ) : (
                            <Typography
                                variant='span'
                                className='author'
                            >
                                {imageAuthor}
                            </Typography>
                        )}
                    </Typography>
                </Box>
        </Box>
    );
}

export default Image;

import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';

const CardPhoto = ({
    cardPhotoThumbnailsrc,
    cardPhotoThumbnailAlt,
    // cardPhotoThumbnailHeight,
    // cardPhotoThumbnailWidth
}) => {
    const [ imageLoaded, setImageLoaded ] = useState(false);
    console.log(imageLoaded);
    return (
        <Box className='card-photo'>
            <Box className="img-box">
                {/*  */}
                    {/* <LazyLoadImage
                        src={cardPhotoThumbnailsrc}
                        alt={cardPhotoThumbnailAlt}
                        height='100%'
                        width='100%'
                        effect='blur'
                        afterLoad={() => setImageLoaded(true)}
                    /> */}
                    {imageLoaded === false ? (
                        <Box
                            sx={{
                                width: '100%',
                                height: '500px',
                                backgroundColor: 'gray'
                            }}
                        ></Box>
                    ) : (
                        <LazyLoadImage
                        src={cardPhotoThumbnailsrc}
                        alt={cardPhotoThumbnailAlt}
                        height='100%'
                        width='100%'
                        effect='blur'
                        afterLoad={() => setImageLoaded(true)}
                    />
                    )}

            </Box>
        </Box>
    );
}

export default CardPhoto;

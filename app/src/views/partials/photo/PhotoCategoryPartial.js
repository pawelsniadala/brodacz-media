import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';

import CardRealization from '../../../components/CardRealization';

import { photo } from '../../../data/photo';

import { shuffleArray } from '../../../functions/functions';

const PhotoCategoryPartial = ({ category }) => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: {
                top: 30,
                bottom: 30
            }
        });

        lightbox.init();
    }, []);

    const photoRealizationCopy = {
        ...photo.realization
    };

    const photoRealizationAll = [].concat(
        ...Object.values(photoRealizationCopy)
    );

    const photoCategoryMap = {
        all: photoRealizationAll,
        branding: photoRealizationCopy.branding,
        studio: photoRealizationCopy.studio,
        outdoor: photoRealizationCopy.outdoor,
        product: photoRealizationCopy.product,
        drone: photoRealizationCopy.drone
    };

    const setPhotoCategory = (category) => {
        const shuffledCategory = shuffleArray(photoCategoryMap[category]);
        return shuffledCategory;
    };

    return (
        <Box className='photo-category-partial'>
            <Box className='card-wrapper realization photo pswp-gallery' id='my-gallery'>
                {setPhotoCategory(category).map((item) => (
                    <a
                        key={`my-gallery-${item.id}`}
                        href={item.image.original.src}
                        data-pswp-width={item.image.original.width}
                        data-pswp-height={item.image.original.height}
                        data-cropped='true'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <CardRealization
                            cardPhoto
                            cardTitle={item.title}
                            cardPhotoSrc={item.image.thumbnail.src}
                        />
                        {/* <Box className='card-photo'>
                            <Box className='img-box'>
                                <LazyLoadImage
                                    src={item.image.thumbnail.src}
                                    alt={item.title}
                                    height='100%'
                                    width='100%'
                                    effect='blur'
                                />
                            </Box>
                        </Box> */}
                    </a>
                ))}
            </Box>
        </Box>
    );
};

export default PhotoCategoryPartial;

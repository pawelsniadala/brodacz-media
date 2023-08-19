import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';

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
        ...Object.values(photoRealizationCopy).filter(obj => obj !== photo.realization.backstage)
    );

    const photoCategoryMap = {
        all: photoRealizationAll,
        branding: photoRealizationCopy.branding,
        studio: photoRealizationCopy.studio,
        outdoor: photoRealizationCopy.outdoor,
        product: photoRealizationCopy.product,
        drone: photoRealizationCopy.drone,
        backstage: photoRealizationCopy.backstage,
    };

    const setPhotoCategory = (category) => {
        const shuffledCategory = shuffleArray(photoCategoryMap[category]);
        return shuffledCategory;
    };

    return (
        <Box className='photo-category-partial'>
            <Box className='pswp-gallery-wrapper'>
                <Box className="pswp-gallery" id='my-gallery'>
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
                            <Box className='box'>
                                <LazyLoadImage
                                    src={item.image.thumbnail.src}
                                    // src={item.image.original.src}
                                    alt={item.title}
                                    height='100%'
                                    width='100%'
                                    effect='blur'
                                />
                                <span className="pswp-caption-content">
                                    {item.description}
                                </span>
                            </Box>
                        </a>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default PhotoCategoryPartial;

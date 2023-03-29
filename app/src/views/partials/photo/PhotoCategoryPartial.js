import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import Box from '@mui/material/Box';

import CardRealization from '../../../components/CardRealization';

import { photo } from "../../../data/photo";

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

    const all = [
        ...photo.realization.studio,
        ...photo.realization.branding,
        ...photo.realization.product,
        ...photo.realization.outdoor,
        ...photo.realization.drone
    ];

    const setCategory = () => {
        switch(category) {
            case 'all':
                return [ ...all ];
            case 'branding':
                return [ ...photo.realization.branding ];
            case 'studio':
                return [ ...photo.realization.studio ];
            case 'outdoor':
                return [ ...photo.realization.outdoor ];
            case 'product':
                return [ ...photo.realization.product ];
            case 'drone':
                return [ ...photo.realization.drone ];
            default:
        }
    }

    return (
        <Box className="photo-category-partial">
            <Box className="card-wrapper realization photo pswp-gallery" id='my-gallery'>
                {setCategory().map((item) => (
                    <a
                        key={`my-gallery-${item.id}`}
                        href={item.image.original.src}
                        data-pswp-width={item.image.original.width}
                        data-pswp-height={item.image.original.height}
                        data-cropped='true'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardRealization
                            cardPhoto
                            cardTitle={item.title}
                            cardPhotoSrc={item.image.thumbnail.src}
                        />
                    </a>
                ))}
            </Box>
        </Box>
    );
}

export default PhotoCategoryPartial;

{/* <Box className='card-photo'>
    <Box className="img-box">
        <LazyLoadImage
            src={item.image.thumbnail.src}
            alt={item.title}
            height='100%'
            width='100%'
            effect='blur'
        />
    </Box>
</Box> */}

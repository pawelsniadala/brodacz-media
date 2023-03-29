import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';

import CardRealization from '../../../components/CardRealization';

import { photo } from "../../../data/photo";

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

    const categories = [ 'branding', 'studio', 'outdoor', 'product', 'drone' ];

    const photoRealizationCopy = photo.realization;

    for (let category of categories) {
        photoRealizationCopy[category] = shuffleArray(photoRealizationCopy[category]);
    }

    const photoRealizationAll = [].concat(
        ...categories.map(category => photoRealizationCopy[category])
    );

    const categoryMap = new Map([
        [ 'all', photoRealizationAll ],
        [ 'branding', photoRealizationCopy.branding ],
        [ 'studio', photoRealizationCopy.studio ],
        [ 'outdoor', photoRealizationCopy.outdoor ],
        [ 'product', photoRealizationCopy.product ],
        [ 'drone', photoRealizationCopy.drone ]
    ]);

    const setCategory = (category) => {
        return categoryMap.get(category);
    };

    return (
        <Box className="photo-category-partial">
            <Box className="card-wrapper realization photo pswp-gallery" id='my-gallery'>
                {setCategory(category).map((item) => (
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
                    </a>
                ))}
            </Box>
        </Box>
    );
}

export default PhotoCategoryPartial;



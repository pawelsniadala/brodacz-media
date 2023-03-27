import { Gallery, Item } from "react-photoswipe-gallery";

import Box from '@mui/material/Box';

import CardRealization from "../../../components/CardRealization";

import { photo } from "../../../data/photo";

const PhotoCategoryPartial = ({ category }) => {
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

    // const all = [
    //     ...photo.realization.studio,
    //     ...photo.realization.branding,
    //     ...photo.realization.product,
    //     ...photo.realization.outdoor,
    //     ...photo.realization.drone
    // ];

    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // shuffleArray(all);

    return (
        <Box className="photo-category-partial">
            <Box className="card-wrapper realization photo">
                <Gallery>
                    {setCategory() ? setCategory().map((item) => (
                        <Item
                            key={item.id}
                            original={item.image.original.src}
                            thumbnail={item.image.thumbnail.src}
                            width={item.image.original.width}
                            height={item.image.original.height}
                            title={item.title}
                        >
                            {({ ref, open }) => (
                                <CardRealization
                                    cardPhoto
                                    cardTitle={item.title}
                                    cardPhotoSrc={item.image.thumbnail.src}
                                    layoutRef={ref}
                                    onClick={open}
                                />
                            )}
                        </Item>
                    )) : (
                        <Box />
                    )}
                </Gallery>
            </Box>
        </Box>
    );
}

export default PhotoCategoryPartial;

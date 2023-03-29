import photoProductThumbnail1 from '../../assets/photo/realization/product/thumbnail/photoProductThumbnail1.png';
import photoProductThumbnail2 from '../../assets/photo/realization/product/thumbnail/photoProductThumbnail2.png';

import photoProductOriginal1 from '../../assets/photo/realization/product/original/photoProductOriginal1.png';
import photoProductOriginal2 from '../../assets/photo/realization/product/original/photoProductOriginal2.png';

export const product = [
    {
        id: 'c95b1ab7-0810-4a8e-a186-cc0973b16a25',
        title: '',
        image: {
            thumbnail: { src: photoProductThumbnail1 },
            original: { src: photoProductOriginal1, width: 1000, height: 1500 }
        }
    },
    {
        id: '84d4aa2f-a6f4-4206-babc-db979396e910',
        title: 'photoProduct2',
        image: {
            thumbnail: { src: photoProductThumbnail2 },
            original: { src: photoProductOriginal2, width: 1000, height: 1500 }
        }
    }
];

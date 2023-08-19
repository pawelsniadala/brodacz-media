import videoGuideThumbnail1 from '../../../assets/video/realization/guides/videoGuideThumbnail1.png'; // nev size 626x352

import { company } from '../company/company';

export const guides = [
    {
        display: true,
        id: 'd63eccd5-81d3-4ee3-ae74-dfe6526e9a28',
        date: '19 lut 2023',
        title: 'Jak dobrze wypaść na filmie ślubnym?',
         company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '9:10',
            src: videoGuideThumbnail1,
            urlPage: 'https://www.youtube.com/watch?v=YA0SnULLgEA&t=26s',
            embed: 'https://www.youtube.com/embed/YA0SnULLgEA'
        }
    }
];

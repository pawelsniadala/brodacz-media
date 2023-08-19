import videoDroneThumbnail1 from '../../../assets/video/realization/drone/videoDroneThumbnail1.png';
import videoDroneThumbnail2 from '../../../assets/video/realization/drone/videoDroneThumbnail2.png';

import { company } from '../company/company';

export const drone = [
    {
        display: false,
        id: 'a1933b1a-dc3b-4388-bf7f-05f94cec1527',
        date: '5 wrz 2022',
        title: 'Święto Mazurskiej Dłubanki 2022',
         company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '1:59',
            src: videoDroneThumbnail2,
            urlPage: 'https://www.youtube.com/watch?v=J1bUJ4w4mCY',
            embed: 'https://www.youtube.com/embed/J1bUJ4w4mCY'
        }
    },
    {
        display: false,
        id: 'ebf8fcc2-b162-4cc0-8187-4650eba6d493',
        date: '30 cze 2022',
        title: 'Centralne eRobocze SHOW Lubień Kujawski 3-4.06.2022',
        company: company.eRoboczePl.name,
        avatar: {
            logo: company.eRoboczePl.logo,
            sign: null
        },
        video: {
            time: '2:10',
            src: videoDroneThumbnail1,
            urlPage: 'https://www.youtube.com/watch?v=TQrnbLunIpA',
            embed: 'https://www.youtube.com/embed/TQrnbLunIpA'
        }
    }
];

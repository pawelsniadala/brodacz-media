import backstageVideoThumbnail1 from '../../../assets/video/realization/backstage/backstageVideoThumbnail1.png'
import backstageVideoThumbnail2 from '../../../assets/video/realization/backstage/backstageVideoThumbnail2.png';
import backstageVideoThumbnail3 from '../../../assets/video/realization/backstage/backstageVideoThumbnail3.png';
import backstageVideoThumbnail4 from '../../../assets/video/realization/backstage/backstageVideoThumbnail4.png';

import { company } from '../company/company';

export const backstage = [
    {
        id: '7bb569c0-d9cd-46db-8d05-54857b9b0e91',
        date: '9 maj 2022',
        title: 'Plenerowa leśna sesja zdjęciowa',
        company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '1:18',
            src: backstageVideoThumbnail1,
            urlPage: 'https://www.youtube.com/watch?v=IGPOYmz53o8',
            embed: 'https://www.youtube.com/embed/IGPOYmz53o8'
        }
    },
    {
        id: '03322c53-a1c2-481e-bcd1-47cd3a56d5ab',
        date: '16 lut 2022',
        title: 'Backstage teledysku zespołu Kurp',
        company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '1:52',
            src: backstageVideoThumbnail2,
            urlPage: 'https://www.youtube.com/watch?v=oTA4FERzo-E',
            embed: 'https://www.youtube.com/embed/oTA4FERzo-E'
        }
    },
    {
        id: '108153c6-904e-4ce9-82f8-5b02ab3713f0',
        date: '25 maj 2021',
        title: 'Backstage sesja makijażowa',
        company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '0:50',
            src: backstageVideoThumbnail3,
            urlPage: 'https://www.youtube.com/watch?v=1Qu6m5p5rBI',
            embed: 'https://www.youtube.com/embed/1Qu6m5p5rBI'
        }
    },
    {
        id: 'fe574431-f8c2-4032-984e-10ff5378d290',
        date: '17 wrz 2020',
        title: 'Backstage sesja w kabaretkach',
        company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '1:18',
            src: backstageVideoThumbnail4,
            urlPage: 'https://www.youtube.com/watch?v=EEngiZMn9qE',
            embed: 'https://www.youtube.com/embed/EEngiZMn9qE'
        }
    }
];

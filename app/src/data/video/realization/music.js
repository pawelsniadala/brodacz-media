import videoMusicThumbnail1 from '../../../assets/video/realization/music/videoMusicThumbnail1.png';
import videoMusicThumbnail2 from '../../../assets/video/realization/music/videoMusicThumbnail2.png';
import videoMusicThumbnail3 from '../../../assets/video/realization/music/videoMusicThumbnail3.png';

import { company } from '../company/company';

export const music = [
    {
        display: true,
        id: 'be1bfad3-7435-47dd-b1ba-28ffe39de6ca',
        date: '24 lis 2021',
        title: 'Kurp - Dopsierum tu przysła',
        company: company.kurp.name,
        avatar: {
            logo: null,
            sign: company.kurp.sign
        },
        video: {
            time: '3:58',
            src: videoMusicThumbnail1,
            urlPage: 'https://www.youtube.com/watch?v=OTy97M9OTeE',
            embed: 'https://www.youtube.com/embed/OTy97M9OTeE'
        }
    },
    {
        display: true,
        id: '296280a3-8f33-4895-ad14-f533907c0934',
        date: '18 gru 2020',
        title: 'Fire Show Infernal',
        company: company.teatrOgniaInfernal.name,
        avatar: {
            logo: null,
            sign: company.teatrOgniaInfernal.sign
        },
        video: {
            time: '2:40',
            src: videoMusicThumbnail2,
            urlPage: 'https://www.youtube.com/watch?v=_XSvz3Ym65A',
            embed: 'https://www.youtube.com/embed/_XSvz3Ym65A'
        }
    },
    {
        display: true,
        id: 'c4df3075-2e7c-464b-b3fe-acaa93104144',
        date: '27 lip 2020',
        title: 'Leśny z spacer Asią',
        company: company.brodaczMedia.name,
        avatar: {
            logo: company.brodaczMedia.logo,
            sign: null
        },
        video: {
            time: '0:39',
            src: videoMusicThumbnail3,
            urlPage: 'https://www.youtube.com/watch?v=j3DRt_7Yt10',
            embed: 'https://www.youtube.com/embed/j3DRt_7Yt10'
        }
    }
];

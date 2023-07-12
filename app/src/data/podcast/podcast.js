import podcastThumbnail1 from '../../assets/podcast/podcastThumbnail1.png';
import podcastThumbnail2 from '../../assets/podcast/podcastThumbnail2.png';
import podcastThumbnail3 from '../../assets/podcast/podcastThumbnail3.png';
import podcastThumbnail4 from '../../assets/podcast/podcastThumbnail4.png'; // new size 626
import podcastThumbnail5 from '../../assets/podcast/podcastThumbnail5.png'; // new size 626
import podcastThumbnail6 from '../../assets/podcast/podcastThumbnail6.png'; // new size 626
import podcastThumbnail7 from '../../assets/podcast/podcastThumbnail7.png'; // new size 626

export const podcast = {
    title: 'Podcasty',
    path: '/podcasts',
    empty: 'Brak video.',
    realization: [
        {
            id: 'cee810d6-d11a-44ba-91a4-a5e34d525f33',
            date: '6 lip 2023',
            title: '"Jeżeli bym robił w życiu tylko muzykę to bym zwariował" FILIPEK | Yurkosky & Yachu',
            company: 'Yurkosky',
            podcast: {
                time: '41:05',
                src: podcastThumbnail7,
                urlPage: 'https://www.youtube.com/watch?v=bI8PCCJ44_8',
                embed: 'https://www.youtube.com/embed/bI8PCCJ44_8'
            }
        },
        {
            id: '15ec9975-3ad5-431d-95c1-d14035f5e8b9',
            date: '3 lip 2023',
            title: '"Myślałem o robieniu innego rodzaju muzyki pod nowa ksywką" PALUCH | Yurkosky',
            company: 'Yurkosky',
            podcast: {
                time: '51:38',
                src: podcastThumbnail6,
                urlPage: 'https://www.youtube.com/watch?v=LdH09ZmcFcQ',
                embed: 'https://www.youtube.com/embed/LdH09ZmcFcQ'
            }
        },
        {
            id: '036a8fb3-e9e6-4d50-8ceb-b0ef3acba8a1',
            date: '8 cze 2023',
            title: '"Tworzenie muzyki jest jak gra" O.S.T.R. | Yurkosky & Yachu',
            company: 'Yurkosky',
            podcast: {
                time: '51:57',
                src: podcastThumbnail5,
                urlPage: 'https://www.youtube.com/watch?v=IIjw9M3ighU',
                embed: 'https://www.youtube.com/embed/IIjw9M3ighU'
            }
        },
        {
            id: '29a27e76-c8ee-4648-ab82-ee2900410e92',
            date: '23 cze 2023',
            title: '"Dzisiaj dominuje pajacowanie - tak się zdobywa słuchacza" MOLESTA EWENEMENT | Yurkosky',
            company: 'Yurkosky',
            podcast: {
                time: '43:19',
                src: podcastThumbnail4,
                urlPage: 'https://www.youtube.com/watch?v=wvDT1-gSjTc',
                embed: 'https://www.youtube.com/embed/wvDT1-gSjTc'
            }
        },
        {
            id: '0df39b61-4dfc-4e42-93b5-9b82c86fd54d',
            date: '2 sty 2023',
            title: 'Co musisz wiedzieć przed założeniem e-commerce. Rozmowa z Mikołajem Drgasem',
            company: 'PKO Bank Polski',
            podcast: {
                time: '41:15',
                src: podcastThumbnail3,
                urlPage: 'https://www.youtube.com/watch?v=fuDaTIy6atA',
                embed: 'https://www.youtube.com/embed/fuDaTIy6atA'
            }
        },
        {
            id: '762bed7a-0502-4b14-8d83-7c835f859aa8',
            date: '17 sie 2022',
            title: 'PowerB@nk. Podkast o historii sukcesu Michała Sadowskiego',
            company: 'PKO Bank Polski',
            podcast: {
                time: '41:58',
                src: podcastThumbnail2,
                urlPage: 'https://www.youtube.com/watch?v=KC7YPvSmSpk',
                embed: 'https://www.youtube.com/embed/KC7YPvSmSpk'
            }
        },
        {
            id: '226e5368-2f0e-42a3-8635-543e64fd6789',
            date: '30 cze 2022',
            title: 'PowerB@nk. Jak zarobić na startupie? Podcast Konrada Latkowskiego',
            company: 'PKO Bank Polski',
            podcast: {
                time: '1:06:10',
                src: podcastThumbnail1,
                urlPage: 'https://www.youtube.com/watch?v=kBTG65UrRZc',
                embed: 'https://www.youtube.com/embed/kBTG65UrRZc'
            }
        }
    ]
};

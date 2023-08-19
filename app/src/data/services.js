import operowanieKameraMd0 from '../assets/services/operowanieKamera/operowanieKameraMd0.jpg';
import montazVideoMd0 from '../assets/services/montazVideo/montazVideoMd0.jpg';
import fotografowanieMd0 from '../assets/services/fotografowanie/fotografowanieMd0.jpg';
import operowanieDronemMd0 from '../assets/services/operowanieDronem/operowanieDronemMd0.jpg';
import grafikiAnimacjeMd0 from '../assets/services/grafikiAnimacje/grafikiAnimacjeMd0.jpg';
import produkcjaPodcastowMd0 from '../assets/services/produkcjaPodcastow/produkcjaPodcastowMd0.jpg';

export const operowanieKamera = {
    id: '716f0101-77c8-42b0-a110-81698cbba78d',
    specialization: 'operowanie-kamera',
    title: 'Operowanie kamerą',
    description: 'Pracuję na gimbalu, statywie i monopodzie ale moim faworytem jest praca z ręki. posiadam w pełni rozbudowany system Lumix S.',
    path: null,
    pathSpecialist: null,
    pathPrices: null,
    image: operowanieKameraMd0
};

export const montazVideo = {
    id: '71b9882e-c26f-4416-b018-54ab0f386d6a',
    specialization: 'montaz-video',
    title: 'Montaż video',
    description: 'Większość mojej pracy to montaż filmów, nie mam na tym polu bardzo konkretnych kierunków ponieważ montuję bardzo zróżnicowane treści.',
    path: null,
    pathSpecialist: null,
    pathPrices: null,
    image: montazVideoMd0
};

export const fotografowanie = {
    id: 'c9859834-1ff0-4b2f-a2ee-965f30ee2f83',
    specialization: 'fotografowanie',
    title: 'Fotografowanie',
    description: 'Tworzę przede wszystkim plenerowe oraz biznesowe sesje zdjęciowe.',
    path: null,
    pathSpecialist: null,
    pathPrices: null,
    image: fotografowanieMd0
};

export const OperowanieDronem = {
    id: '6975ccc8-0843-4d33-b469-85419fae84f9',
    specialization: 'operowanie-dronem',
    title: 'Operowanie dronem',
    description: 'Posiadam szereg uprawnień pozwalających mi latać dronem nawet w centrach dużych miast, specjalizuję się w ujęciach filmowych w ruchu.',
    path: null,
    pathSpecialist: null,
    pathPrices: null,
    image: operowanieDronemMd0
};

export const grafikiAnimacje = {
    id: 'a8b5dba3-3e77-4887-9e95-e18652912f58',
    specialization: 'grafiki-animacje',
    title: 'Grafiki/animacje',
    description: 'Po kilku latach doświadczenia w montażu naturalnie pojawiła się potrzeba poszerzenia umiejętności, pracuję już we wszystkich programach środowiska Adobe.',
    path: null,
    pathSpecialist: null,
    pathPrices: null,
    image: grafikiAnimacjeMd0
};

export const produkcjaPodcastow = {
    id: '41017e88-f3f8-4999-94cb-088c14074a7b',
    specialization: 'podcast',
    title: 'Podcast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales elit sem, at dignissim tellus sollicitudin pellentesque.',
    path: null,
    pathSpecialist: null,
    pathPrices: null,
    image: produkcjaPodcastowMd0
};

export const services = [
    { ...operowanieKamera },
    { ...montazVideo },
    { ...fotografowanie },
    { ...OperowanieDronem },
    { ...grafikiAnimacje },
    { ...produkcjaPodcastow },
];

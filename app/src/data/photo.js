import photoCategoryBranding from "../assets/photo/category/photoCategoryBranding.png";
import photoCategoryStudio from "../assets/photo/category/photoCategoryStudio.png";
import photoCategoryProduct from "../assets/photo/category/photoCategoryProduct.png";
import photoCategoryOutdoor from "../assets/photo/category/photoCategoryOutdoor.png";
import photoCategoryDrone from "../assets/photo/category/photoCategoryDrone.png";
import photoCategoryDrone2 from "../assets/photo/category/photoCategoryDrone2.jpg";
import photoCategoryDrone3 from "../assets/photo/category/photoCategoryDrone3.jpg";

// WIZERUNKOWE
// MINIATURKI
import photoBrandingThumbnail6 from "../assets/photo/realization/branding/thumbnail/photoBrandingThumbnail6.png"; // nev size
import photoBrandingThumbnail8 from "../assets/photo/realization/branding/thumbnail/photoBrandingThumbnail8.png"; // nev size
// ORYGINALNE
import photoBrandingOriginal4 from "../assets/photo/realization/branding/original/photoBrandingOriginal4.png"; // nev size

// STUDYJNE
import { branding } from "./photo/branding";
import { studio } from "./photo/studio";
import { outdoor } from "./photo/outdoor";
import { product } from "./photo/product";
import { drone } from "./photo/dron";

// STUDYJNE
// MINIATURKI
import photoStudioThumbnail1 from   "../assets/photo/realization/studio/thumbnail/photoStudioThumbnail1.png"; // nev size
import photoStudioThumbnail3 from "../assets/photo/realization/studio/thumbnail/photoStudioThumbnail3.png"; // nev size
import photoStudioThumbnail4 from "../assets/photo/realization/studio/thumbnail/photoStudioThumbnail4.png"; // nev size
import photoStudioThumbnail12 from "../assets/photo/realization/studio/thumbnail/photoStudioThumbnail12.png"; // nev size
import photoStudioThumbnail17 from "../assets/photo/realization/studio/thumbnail/photoStudioThumbnail17.png"; // nev size
// ORYGINALNE
import photoStudioOriginal3 from "../assets/photo/realization/studio/original/photoStudioOriginal3.png"; // nev size
import photoStudioOriginal11 from "../assets/photo/realization/studio/original/photoStudioOriginal11.png"; // nev size

// PRODUKTOWE
// MINIATURKI
// ORYGINALNE
import photoProductOriginal1 from "../assets/photo/realization/product/original/photoProductOriginal1.png";

// PLENEROWE
// MINIATURKI
// // ORYGINALNE
import photoOutdoorOriginal17 from "../assets/photo/realization/outdoor/original/photoOutdoorOriginal17.png"; // nev size







//
import a1 from "../assets/reel/a1.jpg"; // nev size
import b1 from "../assets/reel/b1.jpg"; // nev size
import c1 from "../assets/reel/c1.jpg"; // nev size


//REEL
import a from "../assets/reel/a.jpg"; // nev size
import b from "../assets/reel/b.jpg"; // nev size
import c from "../assets/reel/c.jpg"; // nev size
import d from "../assets/reel/d.jpg"; // nev size
import e from "../assets/reel/e.jpg"; // nev size







export const photo = {
    "title": "Zdjęcia",
    "path": "/photo",
    "categories": [
        {
            id: "1d74d681-e494-4cd8-8782-79eab496f9dd",
            designation: "outdoor",
            label: "zdjęcia",
            title: 'Plenerowe',
            description: "Nieważne czym się zajmujesz reprezentatywne zdjęcie utrwalające Twój charakter oraz wykonywany zawód jest niezastąpione przy poszukiwaniu nowych wyzwań zawodowych",
            image: photoOutdoorOriginal17,
            path: '/photo/outdoor'
        },
        {
            id: "57c5d3f9-6dc3-40e4-a0e4-a966827b6833",
            designation: "studio",
            label: "zdjęcia",
            title: 'Studyjne',
            description: "Chcesz pokazać światu artystyczne wnętrze Twojej duszy poprzez niecodzienny portret? Spróbujmy razem stworzyć coś niesamowitego. Uwielbiam pracę oświetleniem studyjnym na przeróżne sposoby.",
            // image: photoStudioOriginal11,
            image: photoStudioOriginal3,
            path: '/photo/studio'
        },
        {
            id: "2c807707-b84c-4522-9e7e-2f26d3a82352",
            designation: "product",
            label: "zdjęcia",
            title: 'Produktowe',
            description: "Wykształcenie przyrodnicze nie poszło na marne! Chętnie zabiorę Cię na spacer i uchwycę jego najlepsze chwile urozmaicając sesję ciekawostkami ze świata przyrody.",
            // image: photoBrandingOriginal3,
            image: photoProductOriginal1,
            path: '/photo/product'
        },
        {
            id: "5f36d40d-812a-4ea5-8cae-2eb033280939",
            designation: "branding",
            label: "zdjęcia",
            title: 'Biznesowe',
            description: "Wszyscy kupujemy oczami, dlatego ważne, żeby produkt miał dobre zdjęcie. Znajdę ciekawy sposób na ukazanie Twojego produktu w jak najlepszym świetle.",
            // image: photoStudioOriginal14,
            image: photoBrandingOriginal4,
            path: '/photo/branding'
        },
        {
            id: "7b014e6a-f5d7-48e4-bab3-e9905ea1f8e6",
            designation: "drone",
            label: "zdjęcia",
            title: 'Dron',
            description: "Nowa perspektywa to nowe możliwości. Dzięki posiadaniu drona zainteresowałem się mocno fotografią krajobrazową i dokumentalną i chętnie uwiecznię też Twoje otoczenie.",
            // image: photoStudioOriginal18,
            image: photoCategoryDrone3,
            // image: photoStudioOriginal14,
            path: '/photo/drone'
        },
        {
            id: "7b014e6a-f5d7-48e4-bab3-e9905ea1f8e6",
            designation: "drone",
            label: "zdjęcia",
            title: 'Studyjne',
            description: "Nowa perspektywa to nowe możliwości. Dzięki posiadaniu drona zainteresowałem się mocno fotografią krajobrazową i dokumentalną i chętnie uwiecznię też Twoje otoczenie.",
            image: photoStudioOriginal11,
            // image: photoStudioOriginal15,
            path: '/photo/studio'
        }
    ],


    "movie": [
        {
            id: "1d74d681-e494-4cd8-8782-79eab496f9dd",
            designation: "outdoor",
            label: "zdjęcia",
            title: 'Zdjęcia zielony tiul',
            description: "Nieważne czym się zajmujesz reprezentatywne zdjęcie utrwalające Twój charakter oraz wykonywany zawód jest niezastąpione przy poszukiwaniu nowych wyzwań zawodowych",
            image: a1,
            path: '/photo/outdoor'
        },
        {
            id: "57c5d3f9-6dc3-40e4-a0e4-a966827b6833",
            designation: "studio",
            label: "zdjęcia",
            title: 'Plener ślubny',
            description: "Chcesz pokazać światu artystyczne wnętrze Twojej duszy poprzez niecodzienny portret? Spróbujmy razem stworzyć coś niesamowitego. Uwielbiam pracę oświetleniem studyjnym na przeróżne sposoby.",
            // image: photoStudioOriginal11,
            image: b1,
            path: '/photo/studio'
        },
        {
            id: "2c807707-b84c-4522-9e7e-2f26d3a82352",
            designation: "product",
            label: "zdjęcia",
            title: 'Zdjęcia z czerwonym tiulem',
            description: "Wykształcenie przyrodnicze nie poszło na marne! Chętnie zabiorę Cię na spacer i uchwycę jego najlepsze chwile urozmaicając sesję ciekawostkami ze świata przyrody.",
            // image: photoBrandingOriginal3,
            image: c1,
            path: '/photo/product'
        },
        {
            id: "5f36d40d-812a-4ea5-8cae-2eb033280939",
            designation: "branding",
            label: "zdjęcia",
            title: 'Zdjęcia z folią budowlaną',
            description: "Wszyscy kupujemy oczami, dlatego ważne, żeby produkt miał dobre zdjęcie. Znajdę ciekawy sposób na ukazanie Twojego produktu w jak najlepszym świetle.",
            // image: photoStudioOriginal14,
            image: d,
            path: '/photo/branding'
        }
    ],
    "reel": [
        {
            id: "1d74d681-e494-4cd8-8782-79eab496f9dd",
            designation: "outdoor",
            label: "zdjęcia",
            title: 'Zdjęcia zielony tiul',
            description: "Nieważne czym się zajmujesz reprezentatywne zdjęcie utrwalające Twój charakter oraz wykonywany zawód jest niezastąpione przy poszukiwaniu nowych wyzwań zawodowych",
            image: a,
            path: '/photo/outdoor'
        },
        {
            id: "57c5d3f9-6dc3-40e4-a0e4-a966827b6833",
            designation: "studio",
            label: "zdjęcia",
            title: 'Plener ślubny',
            description: "Chcesz pokazać światu artystyczne wnętrze Twojej duszy poprzez niecodzienny portret? Spróbujmy razem stworzyć coś niesamowitego. Uwielbiam pracę oświetleniem studyjnym na przeróżne sposoby.",
            // image: photoStudioOriginal11,
            image: b,
            path: '/photo/studio'
        },
        {
            id: "2c807707-b84c-4522-9e7e-2f26d3a82352",
            designation: "product",
            label: "zdjęcia",
            title: 'Zdjęcia z czerwonym tiulem',
            description: "Wykształcenie przyrodnicze nie poszło na marne! Chętnie zabiorę Cię na spacer i uchwycę jego najlepsze chwile urozmaicając sesję ciekawostkami ze świata przyrody.",
            // image: photoBrandingOriginal3,
            image: c,
            path: '/photo/product'
        },
        {
            id: "5f36d40d-812a-4ea5-8cae-2eb033280939",
            designation: "branding",
            label: "zdjęcia",
            title: 'Zdjęcia z folią budowlaną',
            description: "Wszyscy kupujemy oczami, dlatego ważne, żeby produkt miał dobre zdjęcie. Znajdę ciekawy sposób na ukazanie Twojego produktu w jak najlepszym świetle.",
            // image: photoStudioOriginal14,
            image: d,
            path: '/photo/branding'
        },
        {
            id: "5f36d40d-812a-4ea5-8cae-2eb033280939",
            designation: "branding",
            label: "zdjęcia",
            title: 'Stary obiektyw Helios ujęcia nocne',
            description: "Wszyscy kupujemy oczami, dlatego ważne, żeby produkt miał dobre zdjęcie. Znajdę ciekawy sposób na ukazanie Twojego produktu w jak najlepszym świetle.",
            // image: photoStudioOriginal14,
            image: e,
            path: '/photo/branding'
        }
    ],









    "favorite": {
        studio: [
            {
                id: "0b02c881-4b87-4030-9466-9757ac68b294",
                title: "",
                image: photoStudioThumbnail3,
            },
            // {
            //     id: "52e82689-0741-4abd-92bb-d24de96596f4",
            //     title: "",
            //     image: photoStudioThumbnail9,
            // },
            // {
            //     id: "f40ba5b3-8d68-40e7-8d45-a763ebad1234",
            //     title: "",
            //     image: photoStudioThumbnail11,
            // },
            // {
            //     id: "1b7b1275-ab17-4100-b909-d1f60acae571",
            //     title: "",
            //     image: photoStudioThumbnail9,
            // },
            {
                id: "4a52528a-00f2-4a88-a7dd-bb36dfef32e0",
                title: "",
                image: photoStudioThumbnail1,
            },
            // {
            //     id: "b6a3c1d5-8e4a-442c-9b3e-3dc98bb55160",
            //     title: "",
            //     image: photoBrandingThumbnail10,
            // },
            {
                id: "ea96e7d9-eee8-4ec7-bac9-8b2fdfd08da8",
                title: "",
                image: photoStudioThumbnail12,
            },
            {
                id: "9bdc8bb6-59f2-4a6a-bedb-9d425496a6bf",
                title: "",
                image: photoBrandingThumbnail8,
            },
            // {
            //     id: "40e915fc-2238-4338-bfb3-92b11c3caeb5",
            //     title: "",
            //     image: photoStudioThumbnail10,
            // },
            // {
            //     id: "f092c3f0-80b3-4fe3-a25c-617af4141fa3",
            //     title: "",
            //     image: photoBrandingThumbnail13,
            // },
            {
                id: "0281178a-112e-4096-b8cb-96b441e953e7",
                title: "",
                image: photoStudioThumbnail4,
            },
            {
                id: "0454e52e-1aba-443c-9af3-14b10e581ab3",
                title: "",
                image: photoBrandingThumbnail6,
            },
            {
                id: "0075e893-9386-4777-83a3-a3e4cb0b1fa7",
                title: "",
                image: photoStudioThumbnail17,
            }
        ]
    },
    realization: {
        branding: [ ...branding ],
        studio: [ ...studio ],
        outdoor: [ ...outdoor ],
        product: [ ...product ],
        drone: [ ...drone ]
    }
};

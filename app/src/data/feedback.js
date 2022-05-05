import feedbackInformation from '../assets/feedback/information/feedbackInformation.png';

import recommendationProfilePhoto1 from '../assets/feedback/opinions/recommendationProfilePhoto1.png';
import recommendationProfilePhoto2 from '../assets/feedback/opinions/recommendationProfilePhoto2.png';
import recommendationProfilePhoto3 from '../assets/feedback/opinions/recommendationProfilePhoto3.png';

export const feedback = {
    "information": [
        {
            id: "207c3d9c-dde5-4489-b8af-46b1496f74dd",
            title: 'Julien Mauve',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta consequat nulla eget iaculis. Fusce dictum diam a mauris condimentum feugiat. Aliquam accumsan consectetur ultricies. Maecenas malesuada bibendum gravida."',
            image: feedbackInformation
        }
    ],
    "opinions": [
        {
            id: "8277130f-383c-4d10-bee3-953f11c4f790",
            name: 'Rafał Jajor',
            position: 'Prezes Lasmedia Sp. z o.o.',
            description: '"Po kilku latach współpracy wiem, że na Brodacz Media można polegać. Terminowość, kreatywność, chęć do pracy i rozwoju to coś, co warto docenić. W naszej firmie pomysły idą często w poprzek obowiązującym trendom, zwykle wybieramy ścieżki, którymi nikt wcześniej nie szedł. A w taką wędrówkę warto zabrać kogoś, kto po prostu da radę. Brodacz Media daje radę. No i nazwę ma podobną do naszej :-)"',
            rating: 5,
            image: {
                profile: recommendationProfilePhoto1
            }
        },
        {
            id: "f1324f71-85bd-42af-b721-b368d8bb727a",
            name: 'Łukasz Janiszewski',
            position: 'Prezes Zarządu Fundacji Salix',
            description: '"Mariusz przygotowuje oprawę filmową dla większości naszych projektów, pracuje dobrze i szybko. Oczekujemy najlepszej jakości dlatego wybraliśmy Brodacz Media. Można dać 6 gwiazdek na 5?"',
            rating: 5,
            image: {
                profile: recommendationProfilePhoto2
            }
        },
        {
            id: "c28ecbc9-7509-442c-8098-6442405b17b6",
            name: 'Mateusz Niziołek',
            position: 'Przewodniczący Samorządu Studentów SGGW',
            description: '"Profesjonalista! A za razem bardzo przyjazny. Wszystkie sesje, wyjazdy czy imprezy to najwyższa jakość. A współpraca z Mariuszem i jego ekipą to sama przyjemność. Na pewno będę korzystać w przyszłości!"',
            rating: 5,
            image: {
                profile: recommendationProfilePhoto3
            }
        },
        // {
        //     id: "a6817228-3c44-4a8c-9013-018f6816fcff",
        //     name: 'Mateusz Morawiecki',
        //     position: 'Prezes Rady Ministrów',
        //     description: '"Proin at odio volutpat, finibus neque quis, venenatis ex. Duis semper ultricies condimentum. Sed volutpat pulvinar quam, quis vehicula turpis ornare at. Etiam placerat tincidunt turpis ut tristique. Sed mi lacus, accumsan gravida magna eget, sagittis volutpat ipsum. Maecenas a iaculis lacus, nec consequat urna. Donec lacinia sit amet libero vel maximus."',
        //     rating: 5,
        //     image: {
        //         profile: recommendationProfilePhotoAlternative
        //     }
        // },
    ]
};

import videoCategoryWeddings from "../assets/video/category/videoCategoryWeddings.png";
import videoCategoryEvents from "../assets/video/category/videoCategoryEvents.png";
import videoCategoryBroadcasts from "../assets/video/category/videoCategoryBroadcasts.png";
import videoCategoryDebate from "../assets/video/category/videoCategoryDebate.png";
import videoCategoryAnimation from "../assets/video/category/videoCategoryAnimation.png";
import videoCategoryMusicVideo from "../assets/video/category/videoCategoryMusicVideo.png";

// ŚLUBY
import videoWeddingThumbnail1 from "../assets/video/realization/weddings/videoWeddingThumbnail1.png";
import videoWeddingThumbnail2 from "../assets/video/realization/weddings/videoWeddingThumbnail2.png";

// EVENTY
import videoEventThumbnail1 from "../assets/video/realization/events/videoEventThumbnail1.png";
import videoEventThumbnail2 from "../assets/video/realization/events/videoEventThumbnail2.png";
import videoEventThumbnail3 from "../assets/video/realization/events/videoEventThumbnail3.png";
import videoEventThumbnail4 from "../assets/video/realization/events/videoEventThumbnail4.png";
import videoEventThumbnail5 from "../assets/video/realization/events/videoEventThumbnail5.png";
import videoEventThumbnail6 from "../assets/video/realization/events/videoEventThumbnail6.png";

// TELEDYSKI
import videoMusicThumbnail1 from "../assets/video/realization/music/videoMusicThumbnail1.png";
import videoMusicThumbnail2 from "../assets/video/realization/music/videoMusicThumbnail2.png";
import videoMusicThumbnail3 from "../assets/video/realization/music/videoMusicThumbnail3.png";

// TRANSMISJE
import videoBroadcastThumbnail1 from "../assets/video/realization/broadcasts/videoBroadcastThumbnail1.png";
import videoBroadcastThumbnail2 from "../assets/video/realization/broadcasts/videoBroadcastThumbnail2.png";


export const video = {
    "title": "Video",
    "category": [
        {
            id: "f1c00469-6aea-4b00-abff-db03b02805b1",
            date: "",
            title: "Śluby",
            description: "Każdy dzień ślubu jest inny, bo każda para jest inna, dlatego zawsze staram się dopasować do stylu filmu, który preferujecie, oraz rodzaju mojej obecności z Wami. Oferuję pełną obsługę od wyjść plenerowych, przez życzenia dla rodziców po nagrywanie pamiątkowych wypowiedzi gości. Stwórzmy razem piękną pamiątkę.",
            image: videoCategoryWeddings,
            path: "/video/weddings",
            tab: "video-weddings"
        },
        {
            id: "5aafd05a-0c33-4a43-a1b4-e71b02bd2acc",
            date: "",
            title: "Eventy",
            description: "Szykuje się ważne wydarzenie dla Twojego biznesu? To świetna okazja, by pokazać się szerzej i zyskać nowe kontakty! Zajmuję się tworzeniem relacji video z eventów i spotkań, które w bardzo skuteczny sposób wypromują Twoją działalność.",
            image: videoCategoryEvents,
            path: "/video/events",
            tab: "video-events"
        },
        {
            id: "b46538f2-781e-4013-a68a-1f7dcbc81f48",
            date: "",
            title: "Teledyski",
            description: "Muzyką zajmuję się przez większość życia dlatego i na ten filar mojej działalności nie mogło zabraknąć miejsca. Chętnie tworzę klipy muzyczne, nieważne czy działasz w młodej kapeli, czy jesteś seniorem z akordeonem. Dopasuję się do każdego rodzaju twórczości, wnosząc swoje pomysły. Nie ma z góry ustalonej stawki, to Twoje wymagania decydują o cenie.",
            image: videoCategoryMusicVideo,
            path: "/video/music-video",
            tab: "video-music-video"
        },
        {
            id: "a1280498-4dab-4ec8-8854-24a708e23331",
            date: "",
            title: "Transmisje",
            description: "Oferuję pełną obsługę transmisji live: oprawa graficzna wydarzenia, oświetlenie, nagłośnienie, profesjonalne kamery, fotorelacja",
            image: videoCategoryBroadcasts,
            path: "/video/broadcasts",
            tab: "video-broadcasts"
        },
        {
            id: "50ed6498-04a7-4ff8-bc3e-6b477ad9d358",
            date: "",
            title: "Debaty i wypowiedzi",
            description: "Chcesz przekazać swoją wiedzę w formie kursu? A może potrzebujesz kampanii informacyjnej, która nagłośni dany temat. Oferuję pełną realizację takich produkcji od wspólnej pracy przy scenariuszu, przez indywidualny styl nagrań po zaawansowaną animowaną postprodukcję.",
            image: videoCategoryDebate,
            path: "/video/advertising",
            tab: "video-advertising"
        },
        {
            id: "7993088f-594b-4e2a-851a-d4f0e124eb19",
            date: "",
            title: "Animacje",
            description: "Chcesz przekazać swoją wiedzę w formie kursu? A może potrzebujesz kampanii informacyjnej, która nagłośni dany temat. Oferuję pełną realizację takich produkcji od wspólnej pracy przy scenariuszu, przez indywidualny styl nagrań po zaawansowaną animowaną postprodukcję.",
            image: videoCategoryAnimation,
            path: "/video/animations",
            tab: "video-animations"
        }
    ],
    "realization": {
        "title": "Realizacje",
        "weddings": [
            {
                id: "262d3b76-ff77-4a6a-93d8-7797180085aa",
                date: "6 sie 2021",
                title: "Teledysk ślubny Sylwia i Norbert",
                company: "Brodacz Media",
                video: {
                    time: "3:06",
                    src: videoWeddingThumbnail1,
                    urlPage: "https://www.youtube.com/watch?v=9AdxCvFOa-k"
                }
            },
            {
                id: "0b0bd579-f4fe-4e34-b1e9-6b114a0c5da8",
                date: "15 sie 2020",
                title: "Teledysk Ślubny Kasia i Łukasz",
                company: "Brodacz Media",
                video: {
                    time: "2:15",
                    src: videoWeddingThumbnail2,
                    urlPage: "https://www.youtube.com/watch?v=FURA4xL9-hs"
                }
            }
        ],
        "events": [
            {
                id: "e1989e40-8c49-4fc1-b7e7-ba842fbb40c8",
                date: "20 sie2021",
                title: "Graj o Swój Biznes 2021 - Golf",
                company: "Manager Business Hub",
                video: {
                    time: "3:04",
                    src: videoEventThumbnail1,
                    urlPage: "https://www.youtube.com/watch?v=ryhhKhGw0n0&t=4s"
                }
            },
            {
                id: "40937a57-db58-4bbe-a46e-d142c8a690f3",
                date: "2 gru 2021",
                title: "Wieczór Portugalski",
                company: "Manager Business Hub",
                video: {
                    time: "2:22",
                    src: videoEventThumbnail2,
                    urlPage: "https://www.youtube.com/watch?v=q0Q_wY3V2g0&t=4s"
                }
            },
            {
                id: "ddc2f133-468b-4c7c-95dd-834c1c43a072",
                date: "7 lip 2021",
                title: "Military Day - III Edycja",
                company: "Manager Business Hub",
                video: {
                    time: "2:48",
                    src: videoEventThumbnail3,
                    urlPage: "https://www.youtube.com/watch?v=GzPJnvwsmtM"
                }
            },
            {
                id: "91584c37-2ddf-43ed-8f2a-8bcddce639de",
                date: "15 sty 2022",
                title: "Graj o Swój Biznes 2021 - Turniej Bilardowy",
                company: "Manager Business Hub",
                video: {
                    time: "2:44",
                    src: videoEventThumbnail4,
                    urlPage: "https://www.youtube.com/watch?v=45JbG8Azjtg"
                }
            },
            {
                id: "13e18c2b-5dc3-4f4c-893e-98020dccaef2",
                date: "20 sty 2022",
                title: "Przedświąteczne spotkanie",
                company: "Manager Business Hub",
                video: {
                    time: "2:36",
                    src: videoEventThumbnail5,
                    urlPage: "https://www.youtube.com/watch?v=_bLjnT3vk-E"
                }
            },
            {
                id: "538afe57-2907-46ff-9789-311c548a111a",
                date: "16 mar 2022",
                title: "Targi maszyn roboczych",
                company: "erobocze.pl",
                video: {
                    time: "1:21",
                    src: videoEventThumbnail6,
                    urlPage: "https://www.youtube.com/watch?v=YoAXW5QFmg8"
                }
            }
        ],
        "music": [
            {
                id: "be1bfad3-7435-47dd-b1ba-28ffe39de6ca",
                date: "24 lis 2021",
                title: "Kurp - Dopsierum tu przysła",
                company: "Kurp",
                video: {
                    time: "3:58",
                    src: videoMusicThumbnail1,
                    urlPage: "https://www.youtube.com/watch?v=OTy97M9OTeE"
                }
            },
            {
                id: "296280a3-8f33-4895-ad14-f533907c0934",
                date: "18 gru 2020",
                title: "Fire Show Infernal",
                company: "Teatr Ognia Infernal",
                video: {
                    time: "2:40",
                    src: videoMusicThumbnail2,
                    urlPage: "https://www.youtube.com/watch?v=_XSvz3Ym65A"
                }
            },
            {
                id: "c4df3075-2e7c-464b-b3fe-acaa93104144",
                date: "27 lip 2020",
                title: "Leśny z spacer Asią",
                company: "Brodacz Media",
                video: {
                    time: "0:39",
                    src: videoMusicThumbnail3,
                    urlPage: "https://www.youtube.com/watch?v=j3DRt_7Yt10"
                }
            }
        ],
        "broadcast": [
            {
                id: "84af7c53-275e-48f7-aa2e-839a498e0df1",
                date: "20 lis 2021",
                title: "Jubileusz Krajowej Reprezentacji Doktorantów - Konferencja Model Funkcjonowania Szkół Doktorskich",
                company: "KRD",
                video: {
                    time: "10:22:30",
                    src: videoBroadcastThumbnail1,
                    urlPage: "https://www.youtube.com/watch?v=exEBorFnSMU"
                }
            },
            {
                id: "01e49c34-ac14-41f4-b174-1eb3a822d441",
                date: "26 lut 2022",
                title: "I Otwarte Posiedzenie Zarządu KRD kadencji 2022",
                company: "KRD",
                video: {
                    time: "5:41:05",
                    src: videoBroadcastThumbnail2,
                    urlPage: "https://www.youtube.com/watch?v=VGLSbb2LWuo"
                }
            }
        ],
        "advertisting": [
            {
                id: "8427d654-853d-4070-9551-34c3a8aefdbb",
                date: "30 grudnia 2021",
                title: "Debata KRD - Infodemia",
                description: "",
                video: {
                    id: "-gihCEMOOtM",
                    url: "https://www.youtube.com/embed/-gihCEMOOtM"
                }
            },
            {
                id: "596b24d5-1fe3-431a-87a5-a7ddc41eb6cb",
                date: "3 stycznia 2022",
                title: "Debata KRD - Śmiertelność w czasie pandemii",
                description: "",
                video: {
                    id: "MlSJlzHpntw",
                    url: "https://www.youtube.com/embed/MlSJlzHpntw"
                }
            },
            {
                id: "83c1cba9-ca5f-45c2-af90-5acf0888bb91",
                date: "4 stycznia 2022",
                title: "Debata KRD - Transmisja wirusa",
                description: "",
                video: {
                    id: "U7caxFKyQrc",
                    url: "https://www.youtube.com/embed/U7caxFKyQrc"
                }
            },
            {
                id: "e8a772c7-e6e4-45a3-a08a-763e86b58f7f",
                date: "5 stycznia 2022",
                title: "Debata KRD - Dawka przypominająca",
                description: "",
                video: {
                    id: "vB1xZaBBmz4",
                    url: "https://www.youtube.com/embed/vB1xZaBBmz4"
                }
            },
            {
                id: "db33580f-b9c7-4d09-89ee-81b18d031f4d",
                date: "10 stycznia 2022",
                title: "Debata KRD - Nowa generacja szczepionek",
                description: "",
                video: {
                    id: "b51xeU60XZU",
                    url: "https://www.youtube.com/embed/b51xeU60XZU"
                }
            },
            {
                id: "cc8aaf12-1263-4061-a76b-be8559b9597e",
                date: "24 maja 2021",
                title: "Targi Work&Science Forum",
                description: "",
                video: {
                    id: "4xADP7bfBeg",
                    url: "https://www.youtube.com/embed/4xADP7bfBeg"
                }
            },
            {
                id: "66b8168f-3956-4696-9fef-826d8f6f68f3",
                date: "29 stycznia 2021",
                title: "Leśnictwo na Wydziale Leśnym SGGW",
                description: "",
                video: {
                    id: "g2EtwK54kwc",
                    url: "https://www.youtube.com/embed/g2EtwK54kwc"
                }
            }
        ]
    }
};

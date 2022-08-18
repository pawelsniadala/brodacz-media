import podcastThumbnail1 from "../assets/podcast/podcastThumbnail1.png";
import podcastThumbnail2 from "../assets/podcast/podcastThumbnail2.png";

export const podcast = {
    title: "Podcasty",
    path: "/podcasts",
    empty: "Brak video.",
    realization: [
        {
            id: "762bed7a-0502-4b14-8d83-7c835f859aa8",
            date: "17 sie 2022",
            title: "PowerB@nk. Podkast o historii sukcesu Michała Sadowskiego",
            company: "PKO Bank Polski",
            podcast: {
                time: "41:58",
                src: podcastThumbnail2,
                urlPage: "https://www.youtube.com/watch?v=KC7YPvSmSpk"
            }
        },
        {
            id: "226e5368-2f0e-42a3-8635-543e64fd6789",
            date: "30 cze 2022",
            title: "PowerB@nk. Jak zarobić na startupie? Podcast Konrada Latkowskiego",
            company: "PKO Bank Polski",
            podcast: {
                time: "1:06:10",
                src: podcastThumbnail1,
                urlPage: "https://www.youtube.com/watch?v=kBTG65UrRZc"
            }
        }
    ]
};

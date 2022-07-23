import { useEffect } from "react";
import { podcast } from "../data/podcast";
import PageHeader from "../components/PageHeader";
import CardRealization from "../components/CardRealization";
import Alert from "../components/Alert";

const PodcastView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="podcast-view">
            <div className="view-wrapper container">
                <PageHeader header={podcast.title} />
                <section className="realization-section">
                    <div className="section-wrapper pt-0">
                        <div className={`card-wrapper realization podcast ${podcast.realization.length ? "" : "empty"}`}>
                            {podcast.realization.length ? podcast.realization.map((item) => (
                                <CardRealization
                                    cardThumbnaiVideo
                                    key={item.id}
                                    cardThumbnaiVideoAlt={item.title}
                                    cardThumbnaiVideoTitle={item.title}
                                    cardThumbnaiVideoCompany={item.company}
                                    cardThumbnaiVideoDate={item.date}
                                    cardThumbnaiVideoTime={item.podcast.time}
                                    cardThumbnaiVideoSrc={item.podcast.src}
                                    cardThumbnaiVideoPath={item.podcast.urlPage}
                                />
                            )) : (
                                <Alert
                                    content={podcast.realization.empty}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PodcastView;

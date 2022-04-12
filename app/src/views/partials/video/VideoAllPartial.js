import CardRealization from "../../../components/CardRealization";
import { video } from "../../../data/video";

const VideoAllPartial = () => {
    const all = [
        ...video.realization.weddings,
        ...video.realization.events,
        ...video.realization.music,
        ...video.realization.broadcast,
        ...video.realization.debates,
        ...video.realization.animations
    ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(all);

    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization video">
                        {all.length ? all.map((item) => (
                            <CardRealization
                                cardThumbnaiVideo
                                key={item.id}
                                cardThumbnaiVideoAlt={item.title}
                                cardThumbnaiVideoTitle={item.title}
                                cardThumbnaiVideoCompany={item.company}
                                cardThumbnaiVideoDate={item.date}
                                cardThumbnaiVideoTime={item.video.time}
                                cardThumbnaiVideoSrc={item.video.src}
                                cardThumbnaiVideoPath={item.video.urlPage}
                            />
                        )) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VideoAllPartial;

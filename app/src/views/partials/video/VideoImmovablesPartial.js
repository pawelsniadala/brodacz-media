import CardRealization from "../../../components/CardRealization";
import { video } from "../../../data/video";

const VideoImmovablesPartial = () => (
    <div className="video-wedding-partial">
        <section className="realization-section">
            <div className="section-wrapper">
                <div className="card-wrapper realization video">
                    {video.realization.immovables.length ? video.realization.immovables.map((item) => (
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

export default VideoImmovablesPartial;
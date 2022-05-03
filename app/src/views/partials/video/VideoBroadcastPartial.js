import { video } from "../../../data/video";
import CardRealization from "../../../components/CardRealization";
import Alert from "../../../components/Alert";

const VideoBroadcastPartial = () => (
    <div className="video-wedding-partial">
        <section className="realization-section">
            <div className="section-wrapper">
                <div className={`card-wrapper realization video ${video.realization.broadcast.length ? "" : "empty"}`}>
                    {video.realization.broadcast.length ? video.realization.broadcast.map((item) => (
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
                        <Alert
                            content={video.realization.empty}
                        />
                    )}
                </div>
            </div>
        </section>
    </div>
);

export default VideoBroadcastPartial;

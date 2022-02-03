import CardRealization from "../../../components/CardRealization";
import { video } from "../../../data/video";

const VideoAdvertistingPartial = () => (
    <div className="video-wedding-partial">
        <section className="realization-section">
            <div className="section-wrapper">
                <div className="card-wrapper realization video">
                    {video.realization.advertisting.length ? video.realization.advertisting.map((item) => (
                        <CardRealization
                            cardVideo
                            key={item.id}
                            cardVideoId={item.video.id}
                            cardVideoUrl={item.video.url}
                        />
                    )) : (
                        <div />
                    )}
                </div>
            </div>
        </section>
    </div>

);

export default VideoAdvertistingPartial;

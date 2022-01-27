import SectionHeader from "../../../components/SectionHeader";
import CardPresentation from "../../../components/CardPresentation";
import CardRealization from "../../../components/CardRealization";
import { video } from "../../../data/video";

const VideoWeddingPartial = () => (
    <div className="video-wedding-partial">
        <section className="presentation-section">
            <div className="section-wrapper">
                <CardPresentation
                    cardDescriptopm={video.presentation.wedding.description}
                    cardImg={video.presentation.wedding.image}
                />
            </div>
        </section>
        <section className="realization-section">
            <div className="section-wrapper">
                <SectionHeader header={video.realization.title} />
                <div className="card-wrapper realization video">
                    {video.realization.weddings.length ? video.realization.weddings.map((item) => (
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

export default VideoWeddingPartial;

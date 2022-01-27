import CardPresentation from "../../../components/CardPresentation";
import { video } from "../../../data/video";

const VideoAnimationPartial = () => (
    <div className="video-wedding-partial">
        <section className="presentation-section">
            <div className="section-wrapper">
                <CardPresentation
                    cardDescriptopm={video.presentation.animation.description}
                    cardImg={video.presentation.animation.image}
                />
            </div>
        </section>
    </div>

);

export default VideoAnimationPartial;

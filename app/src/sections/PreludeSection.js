import Jumbotron from "../components/Jumbotron";
import { prelude } from "../data/prelude";

const PreludeSection = () => (
    <section className="prelude-section">
        <div className="section-wrapper">
            <Jumbotron
                videoSrc={prelude.video.src}
                photoSrc={prelude.photo.src}
                photoAlt={prelude.photo.alt}
            />
        </div>
    </section>
);

export default PreludeSection;

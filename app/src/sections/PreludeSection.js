import Jumbotron from "../components/Jumbotron";
import { prelude } from "../data/prelude";

const PreludeSection = () => (
    <section className="prelude-section">
        <Jumbotron
            videoSrc={prelude.video.src}
            photoSrc={prelude.photo.src}
            photoAlt={prelude.photo.alt}
        />
    </section>
);

export default PreludeSection;

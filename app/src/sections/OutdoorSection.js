import Parallax from "../components/Parallax";
import ButtonLink from "../components/ButtonLink";

const OutdoorSection = () => (
    <section className="outdoor-section">
        <Parallax section="outdoor">
            <div className="parallax-content">
                <div className="heading">
                    Lorem ipsum dolor<br/>
                    sit amet consectetur<br/>
                    adipiscing elit integer
                </div>
                <button type="button" className="button-card">
                    Lorem ipsum
                </button>
            </div>
        </Parallax>
    </section>
);

export default OutdoorSection;

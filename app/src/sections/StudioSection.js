import Parallax from "../components/Parallax";
import ButtonLink from "../components/ButtonLink";

const StudioSection = () => (
    <section className="studio-section">
        <Parallax section="studio">
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

export default StudioSection;

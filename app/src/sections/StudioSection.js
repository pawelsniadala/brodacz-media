import Parallax from "../components/Parallax";
import ButtonLink from "../components/ButtonLink";

const StudioSection = () => (
    <section className="studio-section">
        <Parallax section="studio">
            <div className="parallax-content">
                <div className="heading">
                    Zobacz siebie<br/>
                    w innym świetle
                </div>
                <button type="button" className="button studio">
                    Zapisz się na sesję
                </button>
            </div>
        </Parallax>
    </section>
);

export default StudioSection;

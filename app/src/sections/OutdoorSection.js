import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";

const OutdoorSection = () => (
    <section className="outdoor-section">
        <Parallax section="outdoor">
            <div className="parallax-content">
                <div className="heading">
                    Lorem ipsum dolor<br/>
                    sit amet consectetur<br/>
                    adipiscing elit integer
                </div>
                <Link
                    to="/contact"
                    className="button studio"
                    aria-current="page"
                >
                    Zapisz się na sesję
                </Link>
            </div>
        </Parallax>
    </section>
);

export default OutdoorSection;

import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";

const OutdoorSection = () => (
    <section className="outdoor-section">
        <Parallax section="outdoor">
            <div className="parallax-content">
                <div className="heading">
                    Chodźmy na spacer<br/>
                    zrobimy kilka zdjęć<br/>
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

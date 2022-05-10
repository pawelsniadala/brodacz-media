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
                <div className="button-wrapper">
                <Link
                    to="/contact"
                    className="button parallax left"
                    aria-current="page"
                >
                    Zapisz się na sesję
                </Link>
                <Link
                    to="/photo/outdoor"
                    className="button parallax right"
                    aria-current="page"
                >
                    Zobacz zdjęcia
                </Link>
                </div>
            </div>
        </Parallax>
    </section>
);

export default OutdoorSection;

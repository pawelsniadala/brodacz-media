import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";

const StudioSection = () => (
    <section className="studio-section">
        <Parallax section="studio">
            <div className="parallax-content">
                <div className="heading">
                    Zobacz siebie<br/>
                    w innym świetle
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

export default StudioSection;

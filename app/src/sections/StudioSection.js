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
                <div className="button-wrapper">
                    <Link
                        to="/contact"
                        className="button studio"
                        aria-current="page"
                    >
                        Zapisz się na sesję
                    </Link>
                    <Link
                        to="/photo/studio"
                        className="button studio photo"
                        aria-current="page"
                    >
                        Zobacz zdjęcia
                    </Link>
                </div>
            </div>
        </Parallax>
    </section>
);

export default StudioSection;

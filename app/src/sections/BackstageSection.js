import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";

const BackstageSection = () => (
    <section className="backstage-section">
        <div className="section-wrapper">
            <div className="parallax-wrapper">
                <Parallax section="backstage">
                    <div className="parallax-content">
                        <div className="heading">
                            Zobacz co dzieje się<br/>po drugiej stronie kamery.
                        </div>
                        <div className="button-wrapper">
                            <Link
                                to="/backstage/video"
                                className="button parallax left"
                                aria-current="page"
                            >
                                Zobacz filmy
                            </Link>
                            <Link
                                to="/backstage/photo"
                                className="button parallax right"
                                aria-current="page"
                            >
                                Zobacz zdjęcia
                            </Link>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    </section>
);

export default BackstageSection;

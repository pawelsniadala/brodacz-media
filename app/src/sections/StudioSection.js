import { Link } from "react-router-dom";
import { photo } from "../data/photo";
import Parallax from "../components/Parallax";
import ReactImageAppear from "react-image-appear";
import Marquee from "react-fast-marquee";

const StudioSection = () => {
    const favorite = photo.favorite.studio;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(favorite);

    return (
        <section className="studio-section">
            <div className="section-wrapper">
                <div className="parallax-wrapper">
                    <Parallax section="studio">
                        <div className="parallax-content">
                            <div className="heading">
                                Zobacz siebie<br/>
                                w innym świetle.
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
                                    to="/photo/studio"
                                    className="button parallax right"
                                    aria-current="page"
                                >
                                    Zobacz zdjęcia
                                </Link>
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className="marquee-wrapper">
                    <Marquee
                        speed={60}
                        gradient={false}
                        className="card-wrapper favorite-photos"
                    >
                        {favorite.length && favorite.map(item => (
                            <div key={item.id} className="card favorite-photos">
                                <div className="image-wrapper">
                                    <ReactImageAppear
                                        src={item.image}
                                        className="card-img"
                                        placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                        showLoader={false}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default StudioSection;

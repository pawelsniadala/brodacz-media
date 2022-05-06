import ReactImageAppear from "react-image-appear";
import Marquee from "react-fast-marquee";
import { photo } from "../data/photo";

const FavoritePhotosSection = () => {
    const favorite = photo.favorite.studio;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(favorite);

    return (
        <section className="favorite-photos-section">
            <div className="section-wrapper">
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
        </section>
    );
}

export default  FavoritePhotosSection;

import { Gallery, Item } from "react-photoswipe-gallery";
import { photo } from "../../../data/photo";
import CardRealization from "../../../components/CardRealization";

const PhotoAllPartial = () => {
    const all = [
        ...photo.realization.studio,
        ...photo.realization.branding,
        ...photo.realization.product,
        ...photo.realization.outdoor,
        ...photo.realization.drone
    ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(all);

    return (
        <div className="photo-all-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization photo">
                        <Gallery>
                            {all.length ? all.map((item) => (
                                <Item
                                    key={item.id}
                                    original={item.image.original.src}
                                    thumbnail={item.image.thumbnail.src}
                                    width={item.image.original.width}
                                    height={item.image.original.height}
                                    title={item.title}
                                >
                                    {({ ref, open }) => (
                                        <CardRealization
                                            cardPhoto
                                            cardTitle={item.title}
                                            cardPhotoSrc={item.image.thumbnail.src}
                                            layoutRef={ref}
                                            onClick={open}
                                        />
                                    )}
                                </Item>
                            )) : (
                                <div />
                            )}
                        </Gallery>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PhotoAllPartial;

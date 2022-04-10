import { Gallery, Item } from "react-photoswipe-gallery";
import { photo } from "../../../data/photo";
import CardRealization from "../../../components/CardRealization";

const PhotoAllPartial = () => {
    const studio = photo.realization.studio;
    const branding = photo.realization.branding;
    const product = photo.realization.product;
    const outdoor = photo.realization.outdoor;

    const all = [...studio, ...branding, ...product, ...outdoor];

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    shuffle(all);

    return (
        <div className="photo-all-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization photo">
                        <Gallery shareButton={false}>
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

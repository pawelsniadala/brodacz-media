// import { Gallery, Item } from "react-photoswipe-gallery";
import { backstage } from "../../../data/backstage";
import CardRealization from "../../../components/CardRealization";

const BackstagePhotoPartial = () => {
    const photo = backstage.realization.photo;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(photo);

    return (
        <div className="backstage-photo-partial">
            <section className="backstage-photo-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization photo">
                        {/* <Gallery>
                            {photo.length ? photo.map((item) => (
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
                        </Gallery> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BackstagePhotoPartial;

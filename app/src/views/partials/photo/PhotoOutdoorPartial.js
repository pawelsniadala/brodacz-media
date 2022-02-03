import { Gallery, Item } from "react-photoswipe-gallery";
import CardRealization from "../../../components/CardRealization";
import { photo } from "../../../data/photo";

const PhotoOutdoorPartial = () => (
    <div className="video-wedding-partial">
        <section className="realization-section">
            <div className="section-wrapper">
                <div className="card-wrapper realization photo">
                    <Gallery shareButton={false}>
                        {photo.realization.outdoor.length ? photo.realization.outdoor.map((item) => (
                            <Item
                                key={item.id}
                                original={item.image.src}
                                thumbnail={item.image.src}
                                width={item.image.width}
                                height={item.image.height}
                                title={item.title}
                            >
                                {({ ref, open }) => (
                                    <CardRealization
                                        cardPhoto
                                        cardTitle={item.title}
                                        cardPhotoSrc={item.image.src}
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

export default PhotoOutdoorPartial;

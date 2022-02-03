import { Gallery, Item } from "react-photoswipe-gallery";
import CardRealization from "../../../components/CardRealization";
import { photo } from "../../../data/photo";

const PhotoStudioPartial = () => (
    <div className="video-wedding-partial">
        <section className="realization-section">
            <div className="section-wrapper">
                <div className="card-wrapper realization photo">
                    <Gallery shareButton={false}>
                        {photo.realization.studio.length ? photo.realization.studio.map((item) => (
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

export default PhotoStudioPartial;

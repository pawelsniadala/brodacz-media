import CardRealization from "../../../components/CardRealization";
import { photo } from "../../../data/photo";

const PhotoProductPartial = () => (
    <div className="video-wedding-partial">
        <section className="realization-section">
            <div className="section-wrapper">
                <div className="card-wrapper realization photo">
                    {photo.realization.product.length ? photo.realization.product.map(item => (
                        <CardRealization
                            cardPhoto
                            key={item.id}
                            cardTitle={item.title}
                            cardPhotoSrc={item.image}
                        />
                    )) : (
                        <div />
                    )}
                </div>
            </div>
        </section>
    </div>

);

export default PhotoProductPartial;

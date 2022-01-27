import SectionHeader from "../../../components/SectionHeader";
import CardPresentation from "../../../components/CardPresentation";
import CardRealization from "../../../components/CardRealization";
import { photo } from "../../../data/photo";

const PhotoProductPartial = () => (
    <div className="video-wedding-partial">
        <section className="presentation-section">
            <div className="section-wrapper">
                <CardPresentation
                    cardDescriptopm={photo.presentation.product.description}
                    cardImg={photo.presentation.product.image}
                />
            </div>
        </section>
        <section className="realization-section">
            <div className="section-wrapper">
                <SectionHeader header={photo.realization.title} />
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

import SectionHeader from "../components/SectionHeader";
import CardCategory from "../components/CardCategory";
import Alert from "../components/Alert";
import { photo } from "../data/photo";

const PhotoSection = () => {
    const cardRealizations = (title) => {
        switch(title) {
            case "Wizerunkowe":
                return (
                    photo.realization.branding.length
                );
            case "Studyjne":
                return (
                    photo.realization.studio.length
                );
            case "Produktowe":
                return (
                    photo.realization.product.length
                );
            case "Plenerowe":
                return (
                    photo.realization.outdoor.length
                );
            default:
        }
    }

    return (
        <section className="video-section">
            <div className="container">
                <div className="section-wrapper">
                    <SectionHeader header={photo.title} />
                    <div className="card-wrapper category photo">
                        {photo.categories.length ? photo.categories.map(item => (
                            <CardCategory
                                key={item.id}
                                cardTitle={item.title}
                                cardDescription={item.description}
                                cardLabel={item.label}
                                cardPath={item.path}
                                cardImg={item.image}
                                cardRealizations={cardRealizations(item.title)}
                            />
                        )) : (
                            <Alert
                                type="alert-light"
                                content="Brak danych"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PhotoSection;

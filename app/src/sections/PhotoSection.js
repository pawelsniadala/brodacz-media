import SectionHeader from "../components/SectionHeader";
import CardCategory from "../components/CardCategory";
import Alert from "../components/Alert";
import { photo } from "../data/photo";

const PhotoSection = () => (
    <section className="video-section">
        <div className="container">
            <div className="section-wrapper">
                <SectionHeader header={photo.title} />
                <div className="card-wrapper category photo">
                    {photo.categories.length ? photo.categories.map(item => (
                        <CardCategory
                            key={item.id}
                            cardTitle={item.title}
                            cardPath={item.path}
                            cardImg={item.image}
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

export default PhotoSection;

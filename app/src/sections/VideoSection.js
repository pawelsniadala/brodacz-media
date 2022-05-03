import SectionHeader from "../components/SectionHeader";
import CardCategory from "../components/CardCategory";
import { video } from "../data/video";

const VideoSection = () => {
    const cardRealizations = (title) => {
        switch(title) {
            case "Debaty i wypowiedzi":
                return (
                    video.realization.debates.length
                );
            case "Nieruchomości":
                return (
                    video.realization.immovables.length
                );
            case "Dron":
                return (
                    video.realization.drone.length
                );
            case "Eventy":
                return (
                    video.realization.events.length
                );
            case "Teledyski":
                return (
                    video.realization.music.length
                );
            case "Śluby":
                return (
                    video.realization.weddings.length
                );
            case "Transmisje":
                return (
                    video.realization.broadcast.length
                );
            case "Animacje":
                return (
                    video.realization.animations.length
                );
            default:
        }
    }

    return (
        <section className="video-section">
            <div className="container">
                <div className="section-wrapper">
                    <SectionHeader
                        header={video.title}
                        all
                        allPath={video.path}
                    />
                    <div className="card-wrapper category video">
                        {video.category.map(item => (
                            <CardCategory
                                key={item.id}
                                cardTitle={item.title}
                                cardDescription={item.description}
                                cardLabel={item.label}
                                cardPath={item.path}
                                cardImg={item.image}
                                cardRealizations={cardRealizations(item.title)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;

import SectionHeader from "../components/SectionHeader";
import CardCategory from "../components/CardCategory";
import { video } from "../data/video";

const VideoSection = () => (
    <section className="video-section">
        <div className="container">
            <div className="section-wrapper">
                <SectionHeader header={video.title} />
                <div className="card-wrapper category video">
                    {video.category.map(item => (
                        <CardCategory
                            key={item.id}
                            cardTitle={item.title}
                            cardPath={item.path}
                            cardImg={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default VideoSection;

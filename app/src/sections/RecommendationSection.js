import ReactImageAppear from "react-image-appear";
import SectionHeader from "../components/SectionHeader";
import { recommendation } from "../data/recommendation";

const RecommendationSection = () => (
    <section className="recommendation-section">
        <div className="container">
            <div className="section-wrapper">
                <SectionHeader header="Rekomendacje" />
                <div className="card-wrapper recommendation">
                    {recommendation.length && recommendation.map(item => (
                        <div key={item.id} className="card recommendation">
                            <div className="media-wrapper">
                                <div className="image-wrapper">
                                    <ReactImageAppear
                                        src={item.image}
                                        className="card-img"
                                        placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                        showLoader={false}
                                        alt={item.name}
                                    />
                                </div>
                                <div>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="position">
                                        {item.position}
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default RecommendationSection;

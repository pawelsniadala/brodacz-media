import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { aboutMe } from "../data/aboutMe";

const AboutMeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="about-me-view">
            <div className="view-wrapper container">
                <PageHeader header="O mnie" />
                <section className="introduction-section">
                    <div className="section-wrapper">
                        {aboutMe.map(item => (
                            <div className="card introduction" key={item.id}>
                                <div className="grid">
                                    <img src={item.image} className="card-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMeView;

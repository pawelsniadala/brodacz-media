import { useEffect } from "react";
import { aboutMe } from "../data/aboutMe";
import PageHeader from "../components/PageHeader";
import ReactImageAppear from "react-image-appear";

const AboutMeView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
                                    <ReactImageAppear
                                        src={item.image}
                                        className="card-img"
                                        placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                        alt="..."
                                    />
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

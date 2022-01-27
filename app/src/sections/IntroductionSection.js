import SectionHeader from "../components/SectionHeader";
import { introduction } from "../data/introduction";

const IntroductionSection = () => (
    <section className="introduction-section">
        <div className="container">
            <div className="section-wrapper">
                {introduction.map(item => (
                    <div className="card introduction" key={item.id}>
                        <div className="grid">
                            <img src={item.image} className="card-img" alt="..." />
                            <div className="card-body">
                                <SectionHeader header={item.title} />
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default IntroductionSection;

import { Link } from "react-router-dom";
import { introduction } from "../data/introduction";
import ReactImageAppear from "react-image-appear";

const IntroductionSection = () => (
    <section className="introduction-section">
        <div className="container">
            <div className="section-wrapper">
                {introduction.map(item => (
                    <div className="card introduction" key={item.id}>
                        <div className="grid">
                            <div className="card-body">
                                <div className="heading">
                                    <div className="title">
                                        Witajcie moi drodzy!
                                    </div>
                                    <div className="subtitle">
                                        Mam na imię Mariusz.<br/>Od wielu lat tworzę zdjęcia i filmy.
                                    </div>
                                </div>
                                <div className="card-text">
                                    {item.description}
                                </div>
                                <div className="buton-wrapper">
                                    <Link
                                        to="/contact"
                                        className="button introduction left"
                                        aria-current="page"
                                    >
                                        Napisz do mnie
                                    </Link>
                                </div>
                            </div>
                            <div className="image-wrapper">
                                <ReactImageAppear
                                    src={item.image}
                                    className="card-img"
                                    placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                    showLoader={false}
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default IntroductionSection;

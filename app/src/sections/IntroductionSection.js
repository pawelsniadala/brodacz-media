// import { useEffect } from "react";
import { aboutMe } from "../data/aboutMe";
// import PageHeader from "../components/PageHeader";
import ReactImageAppear from "react-image-appear";

const IntroductionSection = () => (
    <section className="introduction-section">
        <div className="container">
            <div className="section-wrapper">
                {aboutMe.map(item => (
                    <div className="card introduction" key={item.id}>
                        <div className="grid">
                            <div className="card-body">
                                <div className="card-title">
                                    Witaj! Jestem Mariusz<br/>i nagram Twój film
                                </div>
                                {/* <div className="card-subtitle">
                                    kilku słów o mnie
                                </div> */}
                                <div className="card-text">
                                    {item.description}
                                </div>
                                <div className="buton-wrapper">
                                    {/* <button type="button" className="button-card introduction">
                                        Zobacz reel
                                    </button> */}
                                    <button type="button" className="button-card introduction left" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        {/* <div className="circle" /> */}
                                        Zobacz mój reel
                                    </button>
                                    {/* <button type="button" className="button-card introduction right">
                                        Napisz wiadomość
                                        <div className="circle" />
                                    </button> */}
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

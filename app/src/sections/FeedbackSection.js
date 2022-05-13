import { feedback } from "../data/feedback";
import ReactImageAppear from "react-image-appear";
import ReactStars from "react-stars";
import FeedbackModal from "../modals/FeedbackModal";

const FeedbackSection = () => (
    <>
        <FeedbackModal />
        <section className="feedback-section">
            <div className="container">
                <div className="section-wrapper">
                    {feedback.information.length && feedback.information.map(item => (
                        <div key={item.id} className="card feedback information">
                            <div className="image-wrapper">
                                <ReactImageAppear
                                    src={item.image}
                                    className="card-img"
                                    alt="..."
                                    placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                    showLoader={false}
                                />
                            </div>
                            <div className="content-wrapper">
                                <div className="text-wrapper">
                                    <div className="header-wrapper">
                                        <div className="header">
                                            Dołącz do grona<br/>
                                            zadowolonych klientów.
                                        </div>
                                        <div className="subheader">
                                            Będę bardzo wdzięczny<br/>
                                            jeśli podzielisz się swoją opinią<br/>
                                            na temat moich usług.
                                        </div>
                                    </div>
                                    <div className="rating-wrapper">
                                        <ReactStars
                                            className="rating"
                                            edit={false}
                                            value={5}
                                            size={24}
                                        />
                                        <span className="text">Ocena: 5.0 • 3 opinie</span>
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <button type="button"
                                        className="button feedback information"
                                        data-bs-toggle="modal"
                                        data-bs-target="#feedbackModal"
                                    >
                                        Napisz opinię
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="card-wrapper feedback opinions">
                        {feedback.opinions.length && feedback.opinions.map(item => (
                            <div key={item.id} className="card feedback opinions">
                                <div className="card-body">
                                    <div className="profile">
                                        <img src={item.image.profile} alt={item.name} />
                                    </div>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="position" title={item.position}>
                                        {item.position}
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ReactStars
                                        className="rating"
                                        edit={false}
                                        value={item.rating}
                                        size={24}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default FeedbackSection;

// https://github.com/voronianski/react-star-rating-component/issues/63

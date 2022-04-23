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
                        <ReactImageAppear
                                src={item.image}
                                className="card-img"
                                alt="..."
                                placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                showLoader={false}
                            />
                            <div className="text-wrapper">
                                <div className="heading">
                                    Dołącz do grona<br/>
                                    zadowolonych klientów
                                </div>
                                <div className="description">
                                    Będę bardzo wdzięczny<br/>
                                    jeśli podzielisz się swoją opinią<br/>
                                    na temat moich usług.
                                </div>
                                <button type="button"
                                    className="button feedback information"
                                    data-bs-toggle="modal"
                                    data-bs-target="#feedbackModal"
                                >
                                    Napisz opinię
                                </button>
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
                                    <div className="position">
                                        {item.position}
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
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

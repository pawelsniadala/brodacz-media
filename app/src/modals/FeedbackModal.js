import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";
import ReactStars from "react-stars";

const FeedbackModal = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hgver59", "template_orffq56", form.current, "_o3zGPDB_96l97OYE")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    const ratingChanged = (newRating) => {
        document.getElementById("rating").value = newRating;
    }

    return (
        <Modal
            className="feedback-modal"
            modalId="feedbackModal"
            modalSize="modal-lg"
            verticallyCentered="modal-dialog-centered"
            modalTitle="Opinia"
        >
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Imię i nazwisko
                        {/* <span className="text-danger">&nbsp;*</span> */}
                    </label>
                    <input type="text" className="form-control" name="name" minLength="2" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">
                        Pozycja
                        {/* <span className="text-danger">&nbsp;*</span> */}
                    </label>
                    <input type="text" className="form-control" name="position" minLength="2" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Adres e-mail
                        {/* <span className="text-danger">&nbsp;*</span> */}
                    </label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="opinion" className="form-label">
                        Opinia
                        {/* <span className="text-danger">&nbsp;*</span> */}
                    </label>
                    <textarea className="form-control" name="opinion" rows="6" required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">
                        Ocena
                        {/* <span className="text-danger">&nbsp;*</span> */}
                    </label>
                    <input type="hidden" className="form-control" name="rating" id="rating" required />
                    <ReactStars
                        className="rating"
                        onChange={ratingChanged}
                        size={24}
                    />
                </div>
                <div className="button-wrapper">
                    {/* <button type="button"
                        className="btn"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button> */}
                    <button type="button"
                        className="button feedback modal close"
                        data-bs-dismiss="modal"
                        // onClick={close}
                    >
                        Anuluj
                    </button>
                    <button type="submit" className="mb-2 button feedback modal send">
                        Wyślij opinię
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default FeedbackModal;

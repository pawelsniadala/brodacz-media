import { useEffect, useRef  } from "react";
import emailjs from '@emailjs/browser';
import PageHeader from "../components/PageHeader";

const ContactView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_uu7euve", "template_bnuaglf", form.current, "nCwtxRyHnXpW-ROrH")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

    return (
        <div className="contact-view">
            <div className="view-wrapper container">
                <PageHeader header="Kontakt" />
                <form className="col-md-6" ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Imię</label>
                        <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Wiadomość</label>
                        <textarea className="form-control" name="message" rows="6"></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-lg">Wyślij</button>
                </form>
            </div>
        </div>
    );
}

export default ContactView;

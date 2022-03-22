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
        // emailjs.sendForm("service_hgver59", "template_kidfc2k", form.current, "_o3zGPDB_96l97OYE")
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
                <div className="row">
                    <form className="col-md-6" ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Twoje imię</label>
                            <input type="text" className="form-control" name="name" minLength="2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Twój adres e-mail</label>
                            <input type="email" className="form-control" name="email" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="form-label">Wiadomość</label>
                            <textarea className="form-control" name="message" rows="6" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-lg button-submit">
                            Wyślij
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactView;

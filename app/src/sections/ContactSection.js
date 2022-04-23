import { useEffect, useRef  } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "../components/SectionHeader";
import CardCategory from "../components/CardCategory";
import Alert from "../components/Alert";
import Iframe from "react-iframe";

import { photo } from "../data/photo";

const ContactSection = () => {
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
        <section className="contact-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="card-wrapper contact">
                        <div className="card contact">
                            <div className="card-body">

                            </div>
                        </div>
                        <div className="card contact">
                            <div className="card-header">
                                Formularz kontaktowy
                            </div>
                            <div className="card-body">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Imię i nazwisko
                                            {/* <span className="text-danger">&nbsp;*</span> */}
                                        </label>
                                        <input type="text" className="form-control" name="name" minLength="2" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Adres e-mail
                                            {/* <span className="text-danger">&nbsp;*</span> */}
                                        </label>
                                        <input type="email" className="form-control" name="email" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">
                                            Wiadomość
                                            {/* <span className="text-danger">&nbsp;*</span> */}
                                        </label>
                                        <textarea className="form-control" name="message" rows="6" required></textarea>
                                    </div>
                                    <button type="submit" className="mb-2 button contact" id="liveToastBtn">
                                        Wyślij wiadomość
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;

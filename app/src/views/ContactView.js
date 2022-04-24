import { useEffect, useRef  } from "react";
import * as bootstrap from "bootstrap";
import emailjs from "@emailjs/browser";
// import Iframe from "react-iframe";
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
                showToast();
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const showToast = () => {
        new bootstrap.Toast(document.getElementById("successToast")).show();
    }

    return (
        <div className="contact-view">
            <div className="view-wrapper container">
                <PageHeader header="Kontakt" />
                <div className="card-wrapper contact">
                    <div className="card contact">
                        <div className="card-header">
                            Dane firmy
                        </div>
                        <div className="card-body business">
                            <div><span className="title">Nazwa</span>: Brodacz Media Mariusz Śniadała</div>
                            <div><span className="title">Adres</span>: Kornaciska 19, 07-210 Długosiodło</div>
                            <div><span className="title">NIP</span>: 7622014234</div>
                        </div>
                        <div className="card-header">
                            Dane kontaktowe
                        </div>
                        <div className="card-body business">
                            <div><span className="title">Adres e-mail</span>: brodaczmedia@gmail.com</div>
                            <div><span className="title">Numer telefonu</span>: 797 365 584</div>
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
                    {/* <div className="card contact">
                        <div className="card-body">
                            <Iframe
                                id="1"
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.891051533925!2d21.577543952006145!3d52.7702388797635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ef8390797683b%3A0x84896b53f66d30b6!2sKornaciska%2019%2C%2007-210%20Kornaciska!5e0!3m2!1spl!2spl!4v1648759836881!5m2!1spl!2spl"
                                width="100%"
                                height="515"
                                display="block"
                                position="relative"
                                frameborder="0"
                                allowfullscreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ContactView;

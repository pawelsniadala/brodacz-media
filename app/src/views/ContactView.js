import * as bootstrap from "bootstrap";
import { useEffect, useRef  } from "react";
import { contact } from "../data/contact";
import ReactImageAppear from "react-image-appear";
// import PhoneSvg from "../assets/common/PhoneSvg";
// import EmailSvg from "../assets/common/EmailSvg";
import FacebookSvg from "../assets/common/FacebookSvg";
import InstagramSvg from "../assets/common/InstagramSvg";
import YouTubeSvg from "../assets/common/YouTubeSvg";
import TikTokSvg from "../assets/common/TikTokSvg";
import VimeoSvg from "../assets/common/VimeoSvg";
import emailjs from "@emailjs/browser";
import PageHeader from "../components/PageHeader";
// import Iframe from "react-iframe";

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

    // const renderDetailsIcon = (label) => {
    //     switch(label) {
    //         case "phone":
    //             return (
    //                 <PhoneSvg />
    //             );
    //         case "email":
    //             return (
    //                 <EmailSvg />
    //             );
    //         default:
    //     }
    // }

    const renderMediaIcon = (label) => {
        switch(label) {
            case "facebook":
                return (
                    <FacebookSvg />
                );
            case "instagram":
                return (
                    <InstagramSvg />
                );
            case "youtube":
                return (
                    <YouTubeSvg />
                );
            case "tiktok":
                return (
                    <TikTokSvg />
                );
            case "vimeo":
                return (
                    <VimeoSvg />
                );
            default:
        }
    }

    return (
        <div className="contact-view">
            <div className="view-wrapper container">
                <PageHeader header="Kontakt" />
                <div className="card-wrapper contact">
                    <div className="">
                        {contact.information.length && contact.information.map(item => (
                            <div key={item.id}
                                className="card contact information"
                            >
                                <div className="card-body">
                                    <div className="profile">
                                        <ReactImageAppear
                                            className="card-img-top"
                                            src={item.image}
                                            alt={item.title}
                                            placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                            showLoader={false}
                                        />
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="description">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="card contact details">
                            <div className="card-body">
                                {contact.details.length && contact.details.map(item => (
                                    <a key={item.id}
                                        className={`button contact ${item.label}`}
                                        href={item.href}
                                        title={item.title}
                                    >
                                        {/* {renderDetailsIcon(item.label)} */}
                                        <span>{item.content}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="card contact media">
                            <div className="card-body">
                                <div className="media-wrapper">
                                    {contact.media.length && contact.media.map(item => (
                                        <div key={item.id}
                                            className="icon-wrapper"
                                            title={item.title}
                                        >
                                            <a href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={item.label}
                                            >
                                                {renderMediaIcon(item.label)}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card contact business">
                            <div className="card-body">
                                <div>Brodacz Media Mariusz Śniadała</div>
                                <div>Kornaciska 19, 07-210 Długosiodło</div>
                                <div>NIP: 7622014234</div>
                                <div>REGON: 521119841</div>
                            </div>
                        </div>
                    </div>
                    <div className="card contact message">
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
                                <button type="submit" className="mb-2 button contact message" id="liveToastBtn">
                                    Wyślij wiadomość
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactView;

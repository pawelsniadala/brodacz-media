import { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const ContactView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="contact-view">
            <div className="view-wrapper container">
                <PageHeader header="Kontakt" />
            </div>
        </div>
    );
}

export default ContactView;

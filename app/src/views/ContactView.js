import { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const ContactView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
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

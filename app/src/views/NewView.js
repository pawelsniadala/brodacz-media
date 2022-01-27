import { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const NewView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="new-view">
            <div className="view-wrapper container">
                <PageHeader header="Aktualności" />
            </div>
        </div>
    );
}

export default NewView;

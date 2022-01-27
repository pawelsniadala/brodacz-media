import { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const BackstageView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="backstage-view">
            <div className="view-wrapper container">
                <PageHeader header="Backstage" />
            </div>
        </div>
    );
}

export default BackstageView;

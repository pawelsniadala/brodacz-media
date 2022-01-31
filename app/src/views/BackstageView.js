import { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const BackstageView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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

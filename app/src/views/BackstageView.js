import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { backstage } from "../data/backstage";
import PageHeader from "../components/PageHeader";
import BackstageVideoPartial from "./partials/backstage/BackstageVideoPartial";
import BackstagePhotoPartial from "./partials/backstage/BackstagePhotoPartial";

const BackstageView = () => {
    const [ backstageTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/backstage":
                    return (
                        "backstage-video"
                    );
                case "/backstage/video":
                    return (
                        "backstage-video"
                    );
                case "/backstage/photo":
                    return (
                        "backstage-photo"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (backstageTab) => {
        switch(backstageTab) {
            case "backstage-video":
                return (
                    <BackstageVideoPartial />
                );
            case "backstage-photo":
                return (
                    <BackstagePhotoPartial />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="photo-view">
            <div className="view-wrapper container">
                <PageHeader header={backstage.title} />
                <div className="navpils">
                    <ul className="nav nav-pills backstage">
                        <li className="nav-item">
                            <Link
                                to="/backstage/video"
                                className={(`nav-link ${backstageTab === "backstage-video" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("backstage-video")}
                            >
                                Filmy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/backstage/photo"
                                className={(`nav-link ${backstageTab === "backstage-photo" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("backstage-photo")}
                            >
                                Zdjęcia
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content"
                        id="pills-photo-tab-content"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${backstageTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${backstageTab}-tab`}
                        >
                            {renderTabContent(backstageTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackstageView;

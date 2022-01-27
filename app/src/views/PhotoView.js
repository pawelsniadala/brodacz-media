import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { photo } from "../data/photo";
import PageHeader from "../components/PageHeader";
import PhotoBrandingPartial from "./partials/photo/PhotoBrandingPartial";
import PhotoStudioPartial from "./partials/photo/PhotoStudioPartial";
import PhotoOutdoorPartial from "./partials/photo/PhotoOutdoorPartial";
import PhotoProductPartial from "./partials/photo/PhotoProductPartial";

const PhotoView = () => {
    const [ photoTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/photo":
                    return (
                        "photo-branding"
                    );
                case "/photo/branding":
                    return (
                        "photo-branding"
                    );
                case "/photo/studio":
                    return (
                        "photo-studio"
                    );
                case "/photo/product":
                    return (
                        "photo-product"
                    );
                case "/photo/outdoor":
                    return (
                        "photo-outdoor"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const renderTabContent = (photoTab) => {
        switch(photoTab) {
            case "photo-branding":
                return (
                    <PhotoBrandingPartial />
                );
            case "photo-studio":
                return (
                    <PhotoStudioPartial />
                );
            case "photo-product":
                return (
                    <PhotoProductPartial />
                );
            case "photo-outdoor":
                return (
                    <PhotoOutdoorPartial />
                );
            default:
        }
    }

    return (
        <div className="photo-view">
            <div className="view-wrapper container">
                <PageHeader header={photo.title} />
                <div className="navpils">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <Link
                                to="/photo/branding"
                                className={(`nav-link ${photoTab === "photo-branding" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-branding")}
                            >
                                Wizerunkowe
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/photo/studio"
                                className={(`nav-link ${photoTab === "photo-studio" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-studio")}
                            >
                                Studyjne
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/photo/product"
                                className={(`nav-link ${photoTab === "photo-product" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-product")}
                            >
                                Produktowe
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/photo/outdoor"
                                className={(`nav-link${photoTab === "photo-outdoor" ? " active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-outdoor")}
                            >
                                Plenerowe
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content"
                        id="pills-photo-tab-content"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${photoTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${photoTab}-tab`}
                        >
                            {renderTabContent(photoTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoView;

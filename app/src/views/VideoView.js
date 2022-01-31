import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { video } from "../data/video";
import PageHeader from "../components/PageHeader";
import VideoWeddingPartial from "./partials/video/VideoWeddingPartial";
import VideoEventPartial from "./partials/video/VideoEventPartial";
import VideoMusicVideoPartial from "./partials/video/VideoMusicVideoPartial";
import VideoBroadcastPartial from "./partials/video/VideoBroadcastPartial";
import VideoAdvertistingPartial from "./partials/video/VideoAdvertistingPartial";
import VideoAnimationPartial from "./partials/video/VideoAnimationPartial";

const VideoView = () => {
    const [ videoTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/video":
                    return (
                        "video-weddings"
                    );
                case "/video/weddings":
                    return (
                        "video-weddings"
                    );
                case "/video/events":
                    return (
                        "video-events"
                    );
                case "/video/music-video":
                    return (
                        "video-music-video"
                    );
                case "/video/broadcasts":
                    return (
                        "video-broadcasts"
                    );
                case "/video/advertising":
                    return (
                        "video-advertising"
                    );
                case "/video/animations":
                    return (
                        "video-animations"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (videoTab) => {
        switch(videoTab) {
            case "video-weddings":
                return (
                    <VideoWeddingPartial />
                );
            case "video-events":
                return (
                    <VideoEventPartial />
                );
            case "video-music-video":
                return (
                    <VideoMusicVideoPartial />
                );
            case "video-broadcasts":
                return (
                    <VideoBroadcastPartial />
                );
            case "video-advertising":
                return (
                    <VideoAdvertistingPartial />
                );
            case "video-animations":
                return (
                    <VideoAnimationPartial />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="video-view">
            <div className="view-wrapper container">
                <PageHeader header={video.title} />
                <div className="navpils">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <Link
                                to="/video/weddings"
                                className={`nav-link${videoTab === "video-weddings" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-weddings")}
                            >
                                Śluby
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/events"
                                className={`nav-link${videoTab === "video-events" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-events")}
                            >
                                Eventy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/music-video"
                                className={`nav-link${videoTab === "video-music-video" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-music-video")}
                            >
                                Teledyski
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link${videoTab === "video-broadcasts" ? " active" : ""}`}
                                aria-current="page"
                                to="/video/broadcasts"
                                onClick={() => setTab("video-broadcasts")}
                            >
                                Transmisje
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/advertising"
                                className={`nav-link${videoTab === "video-advertising" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-advertising")}
                            >
                                Reklamy
                            </Link>
                            </li>
                        <li className="nav-item">
                            <Link
                                to="/video/animations"
                                className={`nav-link${videoTab === "video-animations" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-animations")}
                            >
                                Animacje
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content"
                        id="pills-tabContent"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${videoTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${videoTab}-tab`}
                        >
                            {renderTabContent(videoTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoView;

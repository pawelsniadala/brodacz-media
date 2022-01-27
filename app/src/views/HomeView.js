import { useEffect } from "react";
import PreludeSection from "../sections/PreludeSection";
import VideoSection from "../sections/VideoSection";
import BackstageSection from "../sections/BackstageSection";
import PhotoSection from "../sections/PhotoSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            <PreludeSection />
            <VideoSection />
            <PhotoSection/>
            <BackstageSection />
        </div>
    );
};

export default HomeView;

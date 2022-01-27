import { useEffect } from "react";
import PreludeSection from "../sections/PreludeSection";
import IntroductionSection from "../sections/IntroductionSection";
import VideoSection from "../sections/VideoSection";
import BackstageSection from "../sections/BackstageSection";
import PhotoSection from "../sections/PhotoSection";
import NewSection from "../sections/NewSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            <PreludeSection />
            <IntroductionSection />
            <VideoSection />
            <PhotoSection/>
            <BackstageSection />
            <NewSection/>
        </div>
    );
};

export default HomeView;

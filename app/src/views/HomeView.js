import { useEffect } from "react";
import IntroductionSection from "../sections/IntroductionSection";
import PreludeSection from "../sections/PreludeSection";
import VideoSection from "../sections/VideoSection";
import BackstageSection from "../sections/BackstageSection";
import PhotoSection from "../sections/PhotoSection";
import RecommendationSection from "../sections/RecommendationSection";
import CustomerSection from "../sections/CustomerSection";

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
            <RecommendationSection />
            <CustomerSection />
        </div>
    );
};

export default HomeView;

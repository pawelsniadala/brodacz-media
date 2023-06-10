import { useEffect } from "react";
import HeroSection from "../sections/HeroSection";
// import HeroSection2 from "../sections/HeroSection2";
// import HistorySection from "../sections/HistorySection";
// import IntroductionSection from "../sections/IntroductionSection";
// import PreludeSection from "../sections/PreludeSection";
// import VideoSection from "../sections/VideoSection";
// import StudioSection from "../sections/StudioSection";
import PhotoSection2 from "../sections/PhotoSection2";
import VideoSection2 from "../sections/VideoSection2";
// import PodcastSection from "../sections/PodcastSection";
// import BackstageSection from "../sections/BackstageSection";
// import FavoritePhotosSection from "../sections/FavoritePhotosSection";
// import FeedbackSection from "../sections/FeedbackSection";
// import OutdoorSection from "../sections/OutdoorSection";
// import CustomerSection from "../sections/CustomerSection";
// import ContactSection from "../sections/ContactSection";

import BlogSection from "../sections/BlogSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            <HeroSection />
            {/* <HeroSection2 /> */}
            {/* <HistorySection /> */}
            {/* <PreludeSection /> */}
            {/* <IntroductionSection /> */}
            {/* <VideoSection /> */}
            <PhotoSection2 />
            <VideoSection2 />
            <BlogSection />
            {/* <PodcastSection /> */}
            {/* <StudioSection /> */}
            {/* <FavoritePhotosSection /> */}
            {/* <FeedbackSection /> */}
            {/* <OutdoorSection /> */}
               {/* <BackstageSection /> */}
            {/* <CustomerSection /> */}
            {/* <ContactSection /> */}
        </div>
    );
};

export default HomeView;

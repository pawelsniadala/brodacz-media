import { useEffect } from "react";
import IntroductionSection from "../sections/IntroductionSection";
import PreludeSection from "../sections/PreludeSection";
import VideoSection from "../sections/VideoSection";
import StudioSection from "../sections/StudioSection";
import PhotoSection from "../sections/PhotoSection";
import BackstageSection from "../sections/BackstageSection";
// import FavoritePhotosSection from "../sections/FavoritePhotosSection";
import FeedbackSection from "../sections/FeedbackSection";
// import OutdoorSection from "../sections/OutdoorSection";
import CustomerSection from "../sections/CustomerSection";
// import ContactSection from "../sections/ContactSection";

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
         
            <StudioSection />
            {/* <FavoritePhotosSection /> */}
            <FeedbackSection />
            {/* <OutdoorSection /> */}
               <BackstageSection />
            <CustomerSection />
            {/* <ContactSection /> */}
        </div>
    );
};

export default HomeView;

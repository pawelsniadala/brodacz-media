import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import NavSection from "../sections/NavSection";
import FooterSection from "../sections/FooterSection";
import HomeView from "./HomeView";
import VideoView from "./VideoView";
import PhotoView from "./PhotoView";
import BackstageView from "./BackstageView";
import AboutMeView from "./AboutMeView";
import ContactView from "./ContactView";
import VideoWeddingPartial from "./partials/video/VideoWeddingPartial";
import VideoEventPartial from "./partials/video/VideoEventPartial";
import VideoMusicVideoPartial from "./partials/video/VideoMusicVideoPartial";
import VideoBroadcastPartial from "./partials/video/VideoBroadcastPartial";
import VideoAdvertistingPartial from "./partials/video/VideoAdvertistingPartial";
import VideoAnimationPartial from "./partials/video/VideoAnimationPartial";
import PhotoBrandingPartial from "./partials/photo/PhotoBrandingPartial";
import PhotoStudioPartial from "./partials/photo/PhotoStudioPartial";
import PhotoProductPartial from "./partials/photo/PhotoProductPartial";
import PhotoOutdoorPartial from "./partials/photo/PhotoOutdoorPartial";

const Root = () => (
    <MainTemplate>
        <Router>
            <NavSection />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomeView />} />
                    <Route exact path="/brodacz-media/" element={<HomeView />} />
                    <Route path="/video" element={<VideoView />}>
                        <Route path="/video/weddings" element={<VideoWeddingPartial />} />
                        <Route path="/video/events" element={<VideoEventPartial />} />
                        <Route path="/video/music-video" element={<VideoMusicVideoPartial />} />
                        <Route path="/video/broadcasts" element={<VideoBroadcastPartial />} />
                        <Route path="/video/advertising" element={<VideoAdvertistingPartial />} />
                        <Route path="/video/animations" element={<VideoAnimationPartial />} />
                    </Route>
                    <Route path="/photo" element={<PhotoView />}>
                        <Route path="/photo/branding" element={<PhotoBrandingPartial />} />
                        <Route path="/photo/studio" element={<PhotoStudioPartial />} />
                        <Route path="/photo/product" element={<PhotoProductPartial />} />
                        <Route path="/photo/outdoor" element={<PhotoOutdoorPartial />} />
                    </Route>
                    <Route path="/backstage" element={<BackstageView />} />
                    <Route path="/about-me" element={<AboutMeView />} />
                    <Route path="/contact" element={<ContactView />} />
                </Routes>
            </main>
            <FooterSection />
        </Router>
    </MainTemplate>
);

export default Root;

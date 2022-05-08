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
// import AboutMeView from "./AboutMeView";
import ContactView from "./ContactView";
import VideoAllPartial from "./partials/video/VideoAllPartial";
import VideoDebatePartial from "./partials/video/VideoDebatePartial";
import VideoImmovablesPartial from "./partials/video/VideoImmovablesPartial";
import VideoDronePartial from "./partials/video/VideoDronePartial";
import VideoEventPartial from "./partials/video/VideoEventPartial";
import VideoMusicPartial from "./partials/video/VideoMusicPartial";
import VideoWeddingPartial from "./partials/video/VideoWeddingPartial";
import VideoBroadcastPartial from "./partials/video/VideoBroadcastPartial";
import VideoAnimationPartial from "./partials/video/VideoAnimationPartial";
import PhotoAllPartial from "./partials/photo/PhotoAllPartial";
import PhotoBrandingPartial from "./partials/photo/PhotoBrandingPartial";
import PhotoStudioPartial from "./partials/photo/PhotoStudioPartial";
import PhotoProductPartial from "./partials/photo/PhotoProductPartial";
import PhotoOutdoorPartial from "./partials/photo/PhotoOutdoorPartial";
import PhotoDronePartial from "./partials/photo/PhotoDronePartial";
import ScrollArrow from "../components/ScrollArrow";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

const Root = () => (
    <MainTemplate>
        <Router>
            <NavSection />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomeView />} />
                    <Route exact path="https://brodaczmedia.pl" element={<HomeView />} />
                    <Route path="/video" element={<VideoView />}>
                        <Route path="/video/all" element={<VideoAllPartial />} />
                        <Route path="/video/debates" element={<VideoDebatePartial />} />
                        <Route path="/video/immovables" element={<VideoImmovablesPartial />} />
                        <Route path="/video/drone" element={<VideoDronePartial />} />
                        <Route path="/video/events" element={<VideoEventPartial />} />
                        <Route path="/video/music" element={<VideoMusicPartial />} />
                        <Route path="/video/weddings" element={<VideoWeddingPartial />} />
                        <Route path="/video/broadcasts" element={<VideoBroadcastPartial />} />
                        <Route path="/video/animations" element={<VideoAnimationPartial />} />
                    </Route>
                    <Route path="/photo" element={<PhotoView />}>
                        <Route path="/photo/all" element={<PhotoAllPartial />} />
                        <Route path="/photo/branding" element={<PhotoBrandingPartial />} />
                        <Route path="/photo/studio" element={<PhotoStudioPartial />} />
                        <Route path="/photo/product" element={<PhotoProductPartial />} />
                        <Route path="/photo/outdoor" element={<PhotoOutdoorPartial />} />
                        <Route path="/photo/drone" element={<PhotoDronePartial />} />
                    </Route>
                    <Route path="/backstage" element={<BackstageView />} />
                    {/* <Route path="/about-me" element={<AboutMeView />} /> */}
                    <Route path="/contact" element={<ContactView />} />
                </Routes>
            </main>
            <Modal />
            <Toast />
            <FooterSection />
            <ScrollArrow />
        </Router>
    </MainTemplate>
);

export default Root;

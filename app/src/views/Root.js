import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
// import NavSection from '../sections/NavSection';
import HeaderSection from '../sections/HeaderSection';
// import HeaderSection2 from '../sections/HeaderSection2';

import HomeView from './HomeView';

import AboutView from './AboutView';

import ServicesView from './ServicesView';

import VideoView from './VideoView';
import VideoCategoryPartial from './partials/video/VideoCategoryPartial';
import VideoRealizationPartial from './partials/video/VideoRealizationPartial';

import PhotoView from './PhotoView';
import PhotoCategoryPartial from './partials/photo/PhotoCategoryPartial';

import PodcastView from './PodcastView';
import PodcastRealizationPartial from './partials/podcast/PodcastRealizationPartial';

import BackstageView from './BackstageView';
import BackstageVideoPartial from './partials/backstage/BackstageVideoPartial';
import BackstagePhotoPartial from './partials/backstage/BackstagePhotoPartial';

import BlogView from './BlogView';

import ContactView from './ContactView';

import FooterSection from '../sections/FooterSection';

import ScrollArrow from '../components/ScrollArrow';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

const Root = () => (
    <MainTemplate>
        <Router>
            {/* <NavSection /> */}
            <HeaderSection />
            {/* <HeaderSection2 /> */}
            <main>
                <Routes>
                    <Route exact path='/' element={<HomeView />} />
                    <Route exact path='https://brodaczmedia.pl' element={<HomeView />} />

                    <Route path='/about' element={<AboutView />} />

                    <Route path='/services' element={<ServicesView />} />

                    <Route exact path='/video' element={<VideoView />}>
                        <Route path=':category' element={<VideoCategoryPartial />} />
                    </Route>
                    <Route path='/video/:category/:videoId' element={<VideoRealizationPartial />} />

                    <Route exact path='/photo' element={<PhotoView />}>
                        <Route path=':category' element={<PhotoCategoryPartial />} />
                    </Route>

                    <Route path='/podcasts' element={<PodcastView />} />
                    <Route path='/podcasts/:podcastId' element={<PodcastRealizationPartial />} />

                    <Route path='/backstage' element={<BackstageView />} >
                        <Route path='/backstage/video' element={<BackstageVideoPartial />} />
                        <Route path='/backstage/photo' element={<BackstagePhotoPartial />} />
                    </Route>

                    <Route path='/blog' element={<BlogView />} />

                    <Route path='/contact' element={<ContactView />} />
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

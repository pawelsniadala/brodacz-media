import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
// import NavSection from '../sections/NavSection';
import HeaderSection from '../sections/HeaderSection';
// import HeaderSection2 from '../sections/HeaderSection2';
import FooterSection from '../sections/FooterSection';
import HomeView from './HomeView';

import BackstageView from './BackstageView';
import ContactView from './ContactView';

import VideoView from './VideoView';
import VideoCategoryPartial from './partials/video/VideoCategoryPartial';
import VideoRealizationPartial from './partials/video/VideoRealizationPartial';

import PhotoView from './PhotoView';
import PhotoCategoryPartial from './partials/photo/PhotoCategoryPartial';

import PodcastView from './PodcastView';
import BackstageVideoPartial from './partials/backstage/BackstageVideoPartial';
import BackstagePhotoPartial from './partials/backstage/BackstagePhotoPartial';
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
                    <Route exact path='/video' element={<VideoView />}>
                        <Route path=':category' element={<VideoCategoryPartial />} />
                    </Route>
                    <Route path='/video/:category/:videoId' element={<VideoRealizationPartial />} />
                    <Route exact path='/photo' element={<PhotoView />}>
                        <Route path=':category' element={<PhotoCategoryPartial />} />
                    </Route>
                    <Route path='/podcasts' element={<PodcastView />} />
                    <Route path='/backstage' element={<BackstageView />} >
                        <Route path='/backstage/video' element={<BackstageVideoPartial />} />
                        <Route path='/backstage/photo' element={<BackstagePhotoPartial />} />
                    </Route>
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

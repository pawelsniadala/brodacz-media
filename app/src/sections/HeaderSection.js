import { useState,
    // useEffect
} from 'react';
import { NavLink } from 'react-router-dom';

// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Container from '../components/Container';
// import Container from '../components/Container';
// import PhoneSvg from '../assets/svg/PhoneSvg';
import EmailSvg from '../assets/svg/EmailSvg';
import FacebookSvg from '../assets/svg/FacebookSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';
import TikTokSvg from '../assets/svg/TikTokSvg';
import YouTubeSvg from '../assets/svg/YouTubeSvg';
// import LinkedInSvg from '../assets/svg/LinkedInSvg';
import PhoneSvg from '../assets/svg/PhoneSvg';

// import YouTubeSvg from '../assets/svg/YouTubeSvg';
import ClinicSvg from '../assets/svg/ClinicSvg';
import ServicesSvg from '../assets/svg/ServicesSvg';
import PricesSvg from '../assets/svg/PricesSvg';
import SpecialOfferSvg from '../assets/svg/SpecialOfferSvg';
import TeamSvg from '../assets/svg/TeamSvg';
import TechnologySvg from '../assets/svg/TechnologySvg';
import ContactSvg from '../assets/svg/ContactSvg';

// import SettingsIcon from '@mui/icons-material/Settings';

// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

import LogoSvg from "../assets/common/LogoSvg";


// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';

const HeaderSection = () => {
    const [ state, setState ] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // function getWindowDimensions() {
    //     const { innerWidth: width, innerHeight: height } = window;
    //     return {
    //         width,
    //         height
    //     };
    // }

    // function useWindowDimensions() {
    //     const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

    //     useEffect(() => {
    //         function handleResize() {
    //             setWindowDimensions(getWindowDimensions());
    //         }

    //         window.addEventListener('resize', handleResize);
    //         return () => window.removeEventListener('resize', handleResize);
    //     }, []);

    //     return windowDimensions;
    // }

    // const { width } = useWindowDimensions();

    const drawerList = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className='logo'>
                <ListItem className='list-item'>
                    <NavLink
                        className='navbar-brand text-uppercase'
                        activeclassname='active'
                        to='/'
                    >
                        {/* <img alt='Dermatologia i Medycyna estetyczna dr Nina Wiśniewska' height='51' src={require('../assets/header/logo.png')} /> */}
                        <Typography className='brand-text'>
                            Dermatologia<br/>i Medycyna estetyczna<br/>dr Nina Wiśniewska
                        </Typography>
                    </NavLink>
                </ListItem>
            </List>
            <List className='menu'>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/clinic'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <ClinicSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Klinika' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/services'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <ServicesSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Specjalizacje' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/prices'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <PricesSvg width='16px' height='16px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Cennik' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/special-offer'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <SpecialOfferSvg width='16px' height='16px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Promocje' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/photo'
                        onClick={(e) => {
                            if (window.location.pathname.includes('/photo')) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <TeamSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Zdjęcia' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/technology'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <TechnologySvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Technologia' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className='list-item'>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/contact'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <ContactSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Kontakt' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
            <List className='media'>
                <ListItem className='list-item'>
                    <a href='https://www.facebook.com/profile.php?id=100063736802328'
                        className='link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <FacebookSvg width='16px' height='16px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Facebook' />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem className='list-item'>
                    <a href='https://www.instagram.com/klinikawyszkow/'
                        className='link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <InstagramSvg width='16px' height='16px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Instagram' />
                        </ListItemButton>
                    </a>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box
            component='header'
            className='header-section'
        >
            {/* <Box className='top-nav'>
                <Container className='nav-wrapper container'>
                    <Box className='content-wrapper'>
                        <Box className='contact-wrapper'>
                            <Tooltip title='Zadzwoń'>
                                <a className='link'
                                    href='tel:+48797365584'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Box className='link-wrapper'>
                                        <CallIcon style={{ color: '#2f363d' }} fontSize='14px' />
                                        <PhoneSvg width='12px' height='12px' color='#2f363d'  />
                                        <Typography className='link-text'>
                                            797 365 584
                                        </Typography>
                                    </Box>
                                </a>
                            </Tooltip>
                            <Tooltip title='Napisz Wiadomość'>
                                <a className='link'
                                    href='mailto:studio@brodaczmedia.pl'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Box className='link-wrapper'>
                                        <EmailIcon style={{ color: '#2f363d', fontSize: '15px' }} fontSize='12px' />
                                        <EmailSvg width='12px' height='12px' color='#2f363d'  />
                                        <Typography className='link-text'>
                                            studio@brodaczmedia.pl
                                        </Typography>
                                    </Box>
                                </a>
                            </Tooltip>
                        </Box>
                        <Box className='media-wrapper'>

                            <Tooltip title='Facebook'>
                                <a className='link'
                                    href='https://www.facebook.com/brodaczmedia1/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FacebookSvg width='12px' height='12px' color='#2f363d' />
                                </a>
                            </Tooltip>

                            <Tooltip title='Instagram'>
                                <a className='link'
                                    href='https://www.instagram.com/brodaczmedia/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <InstagramSvg width='12px' height='12px' color='#2f363d' />
                                </a>
                            </Tooltip>

                            <Tooltip title='TikTok'>
                                <a className='link'
                                    href='https://www.tiktok.com/@brodaczmedia'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <TikTokSvg width='12px' height='12px' color='#2f363d' />
                                </a>
                            </Tooltip>

                            <Tooltip title='YouTube'>
                                <a className='link'
                                    href='https://www.youtube.com/channel/UCNbuL274tzbrmcqFOtcGYaw'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <YouTubeSvg width='16px' height='12px' color='#2f363d' />
                                </a>
                            </Tooltip>
                        </Box>
                    </Box>
                </Container>
            </Box> */}
            <Box component='nav' className='navbar navbar-light navbar-expand-lg'>
                <Container className='navbar-wrapper container-fluid'>
                    <NavLink
                        className='navbar-brand text-uppercase'
                        activeclassname='active'
                        to='/'
                    >
                        {/* {width <= 991.98 ? (
                            <img alt='Dermatologia i Medycyna estetyczna dr Nina Wiśniewska' height='51' src={require('../assets/header/logo.png')} />
                        ) : (
                            <img alt='Dermatologia i Medycyna estetyczna dr Nina Wiśniewska' height='60' src={require('../assets/header/logo.png')} />
                        )} */}
                        <LogoSvg />
                        {/* <Typography className='brand-text'>
                            Dermatologia<br/>i Medycyna estetyczna<br/>dr Nina Wiśniewska
                        </Typography> */}
                    </NavLink>
                    <Box>
                        {['left'].map((anchor) => (
                            <Box key={anchor}>
                                <button className='navbar-toggler'
                                    onClick={toggleDrawer(anchor, true)}
                                    size='large'
                                >
                                    <span className='navbar-toggler-icon'></span>
                                </button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {drawerList(anchor)}
                                </Drawer>
                            </Box>
                        ))}
                    </Box>
                    <Box className='offcanvas offcanvas-start'
                        tabIndex='-1'
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                    >
                        <Box className='offcanvas-body navbar-light' id='navbarSupportedContent'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/about'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/about')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        O mnie
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/services'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/services')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Usługi
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/video'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/video')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Filmy
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/photo'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/photo')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Zdjęcia
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/podcasts'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/podcasts')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Podcasty
                                    </NavLink>
                                </li>
                                {/* <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/backstage'
                                    >
                                        Backstage
                                    </NavLink>
                                </li> */}
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/blog'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/blog')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/contact'
                                        onClick={(e) => {
                                            if (window.location.pathname.includes('/contact')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Kontakt
                                    </NavLink>
                                </li>
                                {/* <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/contact'
                                    >
                                        <SettingsIcon sx={{ fontSize: 16 }} />
                                    </NavLink>
                                </li> */}
                                {/* <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/contact'
                                    >
                                        <MoreVertIcon style={{ fontSize: "14px" }} />
                                    </NavLink>
                                </li> */}
                            </ul>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default HeaderSection;

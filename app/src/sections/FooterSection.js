import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import FacebookSvg from '../assets/common/FacebookSvg';
import InstagramSvg from '../assets/common/InstagramSvg';
import YouTubeSvg from '../assets/common/YouTubeSvg';
import TikTokSvg from '../assets/common/TikTokSvg';
import VimeoSvg from '../assets/common/VimeoSvg';

import { footer } from '../data/footer';

const FooterSection = () => {
    const renderMediaIcon = (label) => {
        switch(label) {
            case 'facebook':
                return (
                    <FacebookSvg />
                );
            case 'instagram':
                return (
                    <InstagramSvg />
                );
            case 'youtube':
                return (
                    <YouTubeSvg />
                );
            case 'tiktok':
                return (
                    <TikTokSvg />
                );
            case 'vimeo':
                return (
                    <VimeoSvg />
                );
            default:
        }
    }

    return (
        <footer>
            <Container maxWidth='xl'>
                <Box className='section-wrapper footer'>
                    <Box className='business'>
                        <h5 className='footer-subheader'>Studio</h5>
                        {footer.business.length && footer.business.map(item => (
                            <Box key={item.id} className='business-wrapper'>
                                <span>{item.name}</span>
                                <span>{item.address}</span>
                                <span>{item.nip}</span>
                                <span>{item.regon}</span>
                            </Box>
                        ))}
                    </Box>
                    <Box className='video'>
                        <h5 className='footer-subheader'>Video</h5>
                        <ul className='list-group-flush'>
                            {footer.video.length && footer.video.map(item => (
                                <li key={item.id}
                                    className='list-group-item'
                                >
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box className='foto'>
                        <h5 className='footer-subheader'>Foto</h5>
                        <ul className='list-group-flush'>
                            {footer.photo.length && footer.photo.map(item => (
                                <li key={item.id}
                                    className='list-group-item'
                                >
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box className='contact'>
                        <h5 className='footer-subheader'>Kontakt</h5>
                        <Box className='contact-wrapper'>
                            <Box className='details'>
                                {footer.contact.details.length && footer.contact.details.map(item => (
                                    <a key={item.id}
                                        className={`button footer ${item.label}`}
                                        href={item.href}
                                        title={item.title}
                                    >
                                        <span>{item.content}</span>
                                    </a>
                                ))}
                            </Box>
                            <Box className='media'>
                                {footer.contact.media.length && footer.contact.media.map(item => (
                                    <a key={item.id} href={item.href}
                                        className={item.label}
                                        title={item.title}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {renderMediaIcon(item.label)}
                                    </a>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box className='section-wrapper info'>
                <Box className='copyright'>
                    <Box>Copyright © 2023 Brodacz Media Mariusz Śniadała. All rights reserved.</Box>
                    <Box>Design by <a href='https://www.linkedin.com/in/pawelsniadala/' className='design' target='_blank' rel='noreferrer'>Paweł Śniadała</a>.</Box>
                </Box>
            </Box>
        </footer>
    );
}

export default FooterSection;

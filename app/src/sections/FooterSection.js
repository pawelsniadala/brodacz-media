import { footer } from "../data/footer";
import FacebookSvg from "../assets/common/FacebookSvg";
import InstagramSvg from "../assets/common/InstagramSvg";
import YouTubeSvg from "../assets/common/YouTubeSvg";
import TikTokSvg from "../assets/common/TikTokSvg";
import VimeoSvg from "../assets/common/VimeoSvg";

const FooterSection = () => {
    const renderMediaIcon = (label) => {
        switch(label) {
            case "facebook":
                return (
                    <FacebookSvg />
                );
            case "instagram":
                return (
                    <InstagramSvg />
                );
            case "youtube":
                return (
                    <YouTubeSvg />
                );
            case "tiktok":
                return (
                    <TikTokSvg />
                );
            case "vimeo":
                return (
                    <VimeoSvg />
                );
            default:
        }
    }

    return (
        <footer>
            <div className="container">
                <div className="section-wrapper footer">
                    <div className="contact">
                        <h5 className="footer-subheader">Kontakt</h5>
                        <div>Brodacz Media</div>
                        <div>Mariusz Śniadała</div>
                        <div>brodaczmedia@gmail.com</div>
                        <div>797 365 584</div>
                    </div>
                    <div className="video">
                        <h5 className="footer-subheader">Video</h5>
                        <ul className="list-group-flush">
                            {footer.video.length && footer.video.map(item => (
                                <li key={item.id}
                                    className="list-group-item"
                                >
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="foto">
                        <h5 className="footer-subheader">Foto</h5>
                        <ul className="list-group-flush">
                            {footer.photo.length && footer.photo.map(item => (
                                <li key={item.id}
                                    className="list-group-item"
                                >
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="media">
                        <h5 className="footer-subheader">Media</h5>
                        <div className="media-wrapper">
                            {footer.media.length && footer.media.map(item => (
                                <a key={item.id} href={item.href}
                                    className={item.label}
                                    title={item.title}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {renderMediaIcon(item.label)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-wrapper info">
                <div className="copyright">
                    Copyright © 2022 <span className="company-name">Brodacz media</span>. Wszelkie Prawa Zastrzeżone.
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;

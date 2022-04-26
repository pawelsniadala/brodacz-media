import facebook from "./../assets/footer/facebook.svg";
import instagram from "./../assets/footer/instagram.svg";
import youtube from "./../assets/footer/youtube.svg";
import vimeo from "./../assets/footer/vimeo.svg";
import tiktok from "./../assets/footer/tiktok.svg";

const FooterSection = () => (
    <footer>
        <div className="container">
            <div className="section-wrapper footer">
                <div className="contact">
                    <h5 className="footer-subheader">Kontakt</h5>
                    <div className="company-name">Brodacz media</div>
                    <div className="first-name-last-name">Mariusz Śniadała</div>
                    <div className="email-address">brodaczmedia@gmail.com</div>
                    <div className="phone-number">797 365 584</div>
                </div>
                <div className="video">
                    <h5 className="footer-subheader">Video</h5>
                    <ul className="list-group-flush">
                        <li className="list-group-item">
                            <a href="/video/weddings">Śluby</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/video/events">Eventy</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/video/music-video">Teledyski</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/video/broadcasts">Transmisje</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/video/advertising">Debaty i wypowiedzi</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/video/animations">Animacje</a>
                        </li>
                    </ul>
                </div>
                <div className="foto">
                    <h5 className="footer-subheader">Foto</h5>
                    <ul className="list-group-flush">
                        <li className="list-group-item">
                            <a href="/photo/branding">Wizerunkowe</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/photo/studio">Studyjne</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/photo/product">Produktowe</a>
                        </li>
                        <li className="list-group-item">
                            <a href="/photo/outdoor">Plenerowe</a>
                        </li>
                    </ul>
                </div>
                <div className="media">
                    <h5 className="footer-subheader">Media</h5>
                    <div className="media-wrapper">
                        <a href="https://www.facebook.com/brodaczmedia1/"
                            target="_blank"
                            rel="noreferrer"
                            className="facebook"
                        >
                            <img src={facebook} height="28" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/brodaczmedia/"
                            target="_blank"
                            rel="noreferrer"
                            className="instagram"
                        >
                            <img src={instagram} height="28" alt="instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCNbuL274tzbrmcqFOtcGYaw"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube"
                        >
                            <img src={youtube} height="28" alt="youtube" />
                        </a>
                        <a href="https://www.tiktok.com/@brodaczmedia"
                            target="_blank"
                            rel="noreferrer"
                            className="tiktok"
                        >
                            <img src={tiktok} height="28" alt="tiktok" />
                        </a>
                        <a href="https://vimeo.com/brodaczmedia"
                            target="_blank"
                            rel="noreferrer"
                            className="vimeo"
                        >
                            <img src={vimeo} height="28" alt="vimeo" />
                        </a>
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

export default FooterSection;

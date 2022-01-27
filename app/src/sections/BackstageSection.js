import Parallax from "../components/Parallax";
import ButtonLink from "../components/ButtonLink";

const BackstageSection = () => (
    <section className="backstage-section">
        <Parallax>
            <ButtonLink
                to="/backstage"
                content="Backstage"
                className="backstage"
            />
        </Parallax>
    </section>
);

export default BackstageSection;

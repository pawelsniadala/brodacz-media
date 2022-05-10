import CardRealization from "../../../components/CardRealization";
import { backstage } from "../../../data/backstage";
import Alert from "../../../components/Alert";

const BackstageVideoPartial = () => {
    const video = backstage.realization.video;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(video);

    return (
        <div className="backstage-video-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization video">
                        {video.length ? video.map((item) => (
                            <CardRealization
                                cardThumbnaiVideo
                                key={item.id}
                                cardThumbnaiVideoAlt={item.title}
                                cardThumbnaiVideoTitle={item.title}
                                cardThumbnaiVideoCompany={item.company}
                                cardThumbnaiVideoDate={item.date}
                                cardThumbnaiVideoTime={item.video.time}
                                cardThumbnaiVideoSrc={item.video.src}
                                cardThumbnaiVideoPath={item.video.urlPage}
                            />
                        )) : (
                            <Alert
                                content={backstage.realization.empty}
                            />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BackstageVideoPartial;

import CardRealization from "../../../components/CardRealization";
import { video } from "../../../data/video";

const VideoAllPartial = () => {
    const weddings = video.realization.weddings;
    const events = video.realization.events;
    const music = video.realization.music;
    const broadcast = video.realization.broadcast;
    const debates = video.realization.debates;

    const all = [...weddings, ...events, ...music, ...broadcast, ...debates];

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    shuffle(all);
    // console.log(all);

    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization video">
                        {all.length ? all.map((item) => (
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
                            <div />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VideoAllPartial;

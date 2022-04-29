import Iframe from "react-iframe";
import ReactImageAppear from "react-image-appear";
import SearchZoomSvg from "../assets/common/SearchZoomSvg";

const CardRealization = ({
    cardTitle,
    cardPhoto,
    cardPhotoSrc,
    layoutRef,
    onClick,

    cardVideo,
    cardVideoId,
    cardVideoUrl,

    cardThumbnaiVideo,
    cardThumbnaiVideoSrc,
    cardThumbnaiVideoAlt,
    cardThumbnaiVideoTime,
    cardThumbnaiVideoTitle,
    cardThumbnaiVideoCompany,
    cardThumbnaiVideoDate,
    cardThumbnaiVideoPath
}) => (
    <div className={`card realization ${cardPhoto ? "photo" : "video"}`}>
        {cardPhoto && (
            <div className="img-box" ref={layoutRef}>
                <ReactImageAppear
                    src={cardPhotoSrc}
                    onClick={onClick}
                    alt={cardTitle}
                    className="card-image card-img-top"
                    placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                    showLoader={false}
                />
                <span onClick={onClick}>
                    <SearchZoomSvg />
                </span>
            </div>
        )}
        {cardVideo && (
            <Iframe
                id={cardVideoId}
                url={cardVideoUrl}
                width="100%"
                height="219"
                display="block"
                position="relative"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        )}
        {cardThumbnaiVideo && (
            <div className="thumbnail">
                <div className="img-box">
                    <ReactImageAppear
                        className="card-img-top"
                        src={cardThumbnaiVideoSrc}
                        alt={cardThumbnaiVideoAlt}
                        placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                        showLoader={false}
                    />
                    {/* <span className="card-video-time badge bg-dark">
                        {cardThumbnaiVideoTime}
                    </span> */}
                </div>
                <div className="card-body">
                    <h6 className="card-title" title={cardThumbnaiVideoTitle}>
                        {cardThumbnaiVideoTitle}
                    </h6>
                    <small className="card-meta text-muted">
                        <span className="company">
                            {cardThumbnaiVideoCompany}
                        </span>
                        <span className="company">
                            {cardThumbnaiVideoDate}
                        </span>
                    </small>
                    <a className="stretched-link"
                        href={cardThumbnaiVideoPath ? cardThumbnaiVideoPath : "#"}
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                </div>
            </div>
        )}
    </div>
);

export default CardRealization;

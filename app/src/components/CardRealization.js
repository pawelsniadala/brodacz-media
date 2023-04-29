import { Link, useLocation, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import Iframe from "react-iframe";
import ReactImageAppear from "react-image-appear";
import SearchZoomSvg from "../assets/common/SearchZoomSvg";
import PlayVideoSvg from "../assets/common/PlayVideoSvg";

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
    <Box className={`card realization ${cardPhoto ? "photo" : "video"}`}>
        {cardPhoto && (
            <Box className="img-box" ref={layoutRef}>
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
            </Box>
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
            <Box className="thumbnail">
                <Box className="img-box">
                    <ReactImageAppear
                        className="card-img-top"
                        src={cardThumbnaiVideoSrc}
                        alt={cardThumbnaiVideoAlt}
                        placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                        showLoader={false}
                    />
                    <span className="card-video-time badge">
                        {cardThumbnaiVideoTime}
                    </span>
                    <span>
                        <PlayVideoSvg />
                    </span>
                </Box>
                <Box className="card-body">
                    <Box
                        className="card-title"
                        title={cardThumbnaiVideoTitle}
                    >
                        {cardThumbnaiVideoTitle}
                    </Box>
                    <small className="card-meta text-muted">
                        <span className="company">
                            {cardThumbnaiVideoCompany}
                        </span>
                        <span className="company">
                            {cardThumbnaiVideoDate}
                        </span>
                    </small>
                    <Link
                        className="stretched-link"
                        to={cardThumbnaiVideoPath}
                    />
                </Box>
            </Box>
        )}
    </Box>
);

export default CardRealization;

const LinkedInSvg = ({
    width,
    height,
    color
}) => (
    // <svg
    //     id="Layer_1"
    //     dataname="Layer 1"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 122.88 86.43"
    //     width={width}
    //     height={height}
    //     fill={color}
    // >
    //     <defs><style>{`.cls-1yt,.ccls-2yt{fill-rule:evenodd;}.ccls-2yt{fill:#fff;}`}</style></defs>
    //     <path className="cls-1yt" d="M121.63,18.65s-1.2-8.47-4.9-12.19c-4.67-4.89-9.91-4.92-12.31-5.21C87.24,0,61.43,0,61.43,0h0s-25.8,0-43,1.25c-2.4.29-7.63.31-12.31,5.21C2.4,10.18,1.22,18.65,1.22,18.65A187.15,187.15,0,0,0,0,38.55v9.31a187.65,187.65,0,0,0,1.22,19.9S2.42,76.23,6.09,80c4.68,4.9,10.82,4.74,13.57,5.26,9.83.94,41.78,1.22,41.78,1.22s25.83,0,43-1.27c2.41-.29,7.64-.32,12.32-5.21,3.69-3.72,4.89-12.2,4.89-12.2a187.15,187.15,0,0,0,1.22-19.9V38.54a189.26,189.26,0,0,0-1.25-19.9Z"/>
    //     <polygon className="ccls-2yt" points="48.71 59.16 48.71 24.63 81.9 41.95 48.71 59.16 48.71 59.16"/>
    // </svg>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="64"
        // height="64"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 640 640"
        width={width}
        height={height}
        fill={color}
    >
        <path d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z"/>
    </svg>
);

export default LinkedInSvg;

const EmailSvg = ({
    width,
    height,
    color
}) => (
    // <svg
    //     xmlns='http://www.w3.org/2000/svg'
    //     viewBox='0 0 122.88 85.57'
    //     width={width}
    //     height={height}
    //     fill={color}
    // >
    //     <path d='M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z' />
    // </svg>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        // fill="#000000"
        viewBox="2 4 20 16"
        width={width}
        height={height}
        fill={color}
    >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

export default EmailSvg;

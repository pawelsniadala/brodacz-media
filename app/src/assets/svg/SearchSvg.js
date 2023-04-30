const SearchSvg = ({
    width,
    height,
    color
}) => (
    // <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 2859 3333"
    //     shapeRendering="geometricPrecision"
    //     textRendering="geometricPrecision"
    //     imageRendering="optimizeQuality"
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     width={width}
    //     height={height}
    //     fill={color}
    // >
    //     <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/>
    // </svg>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 2 15.99 15.99"
        width={width}
        height={height}
        fill={color}
    >
        <path fill-rule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"/>
    </svg>
);

export default SearchSvg;
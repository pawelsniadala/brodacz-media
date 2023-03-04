import { Link } from "react-router-dom";

import Box from '@mui/material/Box';

const LinkMore = ({
    linkTo,
    linkText,
    linkColor
}) => (
    <Box className="link-more">
        <Link
            to={linkTo}
            // className="button section"
            aria-current="page"
        >
            <Box className="divider" aria-hidden="true" />
            <Box
                className="text-wrapper"
                aria-label="Więcej obrazów"
                sx={{ backgroundColor: linkColor }}
            >
                <span className="text">
                    {linkText}
                </span>
            </Box>
        </Link>
    </Box>
);

export default LinkMore;

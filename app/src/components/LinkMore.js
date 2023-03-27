import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                    <span>{linkText}</span>
                    <span><ArrowForwardIcon /></span>
                </span>
            </Box>
        </Link>
    </Box>
);

export default LinkMore;

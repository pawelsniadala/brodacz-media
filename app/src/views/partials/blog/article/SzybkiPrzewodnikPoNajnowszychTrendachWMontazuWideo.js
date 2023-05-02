
import Box from '@mui/material/Box';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SzybkiPrzewodnikPoNajnowszychTrendachWMontazuWideo = ({ content }) => {
    return (
        <>
            {content.description}
            <Box marginBottom={3} marginTop={3}>
                <LazyLoadImage
                    height={'100%'}
                    width={'100%'}
                    src={content.image}
                    alt='Remote working'
                    effect='blur'
                    style={{
                        objectFit: 'cover',
                        borderRadius: 8,
                        width: '100%',
                        height: '100%',
                        maxHeight: '400px',
                    }}
                />
            </Box>
        </>
    )
}

export default SzybkiPrzewodnikPoNajnowszychTrendachWMontazuWideo;


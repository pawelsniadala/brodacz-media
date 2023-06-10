import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from '../../../../components/Image';

const JakiAparatDoFilmowania = ({ content }) => {
    return (
        <>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    Morbi tincidunt ultrices
                </Typography>
                <Typography className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius tortor et magna posuere, id condimentum leo dictum. Cras nec nisi massa. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum vestibulum mattis dignissim. In libero nibh, ullamcorper vitae felis sed, rutrum congue mi. Aliquam nibh nibh, rhoncus eget tellus quis, vestibulum commodo magna. Quisque volutpat malesuada neque, vel aliquet velit volutpat eget. Sed hendrerit ipsum vitae tellus finibus maximus. Praesent non tristique ante. In consectetur risus orci, at rutrum mauris cursus ut.
                </Typography>
            </Box>
            <Box className='box'>
                <Image
                    imageSrc={content.images[0].src}
                    imageAlt={content.images[0].alt}
                    imageAuthor={content.images[0].author}
                    imageHref={content.images[0].href}
                />
            </Box>
            <Box className='box'>
                <Typography className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius tortor et magna posuere, id condimentum leo dictum. Cras nec nisi massa. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum vestibulum mattis dignissim. In libero nibh, ullamcorper vitae felis sed, rutrum congue mi. Aliquam nibh nibh, rhoncus eget tellus quis, vestibulum commodo magna. Quisque volutpat malesuada neque, vel aliquet velit volutpat eget. Sed hendrerit ipsum vitae tellus finibus maximus. Praesent non tristique ante. In consectetur risus orci, at rutrum mauris cursus ut.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    Consectetur adipiscing elit
                </Typography>
                <Typography className='paragraph'>
                    Nulla sed purus odio. Cras eros lacus, tempor id posuere ac, fermentum at dolor. Maecenas eget consectetur dui. Nunc imperdiet sapien non ullamcorper efficitur. In venenatis metus lacus, auctor eleifend sapien iaculis eu. Phasellus sit amet diam at lacus tristique pretium. Vivamus sodales mi id molestie volutpat. Sed eget nunc ut arcu pulvinar hendrerit vel id lectus. Mauris accumsan auctor lorem, sit amet laoreet eros.
                </Typography>
                <Typography className='paragraph'>
                    Etiam molestie, lacus vel lacinia lacinia, est tellus feugiat augue, vel vestibulum elit arcu at neque. Morbi tincidunt ultrices placerat. Sed sagittis diam leo, quis egestas massa convallis a. Nunc euismod, diam ac lobortis sagittis, ligula dolor bibendum ipsum, ut placerat ligula lorem non ante. Vivamus molestie purus non libero accumsan, vel auctor dolor congue. Pellentesque ullamcorper sapien at nulla ultricies.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    Lacus vel lacinia lacinia
                </Typography>
                <Typography className='paragraph'>
                    Nulla sed purus odio. Cras eros lacus, tempor id posuere ac, fermentum at dolor. Maecenas eget consectetur dui. Nunc imperdiet sapien non ullamcorper efficitur. In venenatis metus lacus, auctor eleifend sapien iaculis eu. Phasellus sit amet diam at lacus tristique pretium. Vivamus sodales mi id molestie volutpat. Sed eget nunc ut arcu pulvinar hendrerit vel id lectus. Mauris accumsan auctor lorem, sit amet laoreet eros.
                </Typography>
                <Typography className='paragraph'>
                    Etiam molestie, lacus vel lacinia lacinia, est tellus feugiat augue, vel vestibulum elit arcu at neque. Morbi tincidunt ultrices placerat. Sed sagittis diam leo, quis egestas massa convallis a. Nunc euismod, diam ac lobortis sagittis, ligula dolor bibendum ipsum, ut placerat ligula lorem non ante. Vivamus molestie purus non libero accumsan, vel auctor dolor congue. Pellentesque ullamcorper sapien at nulla ultricies.
                </Typography>
            </Box>
        </>
    );
}

export default JakiAparatDoFilmowania;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from '../../../../components/Image';

const JakDobrzeWypascNaFilmieSlubnym = ({ content }) => {
    return (
        <>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    1. Autentyczność
                </Typography>
                <Typography className='paragraph'>
                    Dzięki autentyczności Wasz film nabierze wyrazistości, przecież chcecie żeby Wasza pamiątka była wyjątkowa,  a na pewno taka nie będzie jak powtórzycie wszędzie powielane wzorce. Pokażcie siebie jakimi jesteście naprawdę a będzie to wartościowa pamiątka. W jaki sposób to zrobić? Zachowujcie się tak jak lubicie, możecie powiedzieć do kamery co czujecie, jakie są wasze wrażenia, może macie z przyszłą żoną lub mężem jakieś zwyczaje pamiątki do pokazania miejsca na kreatywność jest tu naprawdę wiele i warto w miarę możliwości przekazać jak najwięcej siebie w filmie.
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
                <Typography variant='h4' className='header'>
                    2. Uśmiech
                </Typography>
                <Typography className='paragraph'>
                    Uśmiech jest bardzo ważny i oczywiście każdy ma swój sposób ekspresji, jeden jest wyszczerzony całymi dniami inny ma grobową minę i patrzy się jak by miał cię zabić mimo że cię lubi. I w żadnym wypadku nie chciałbym żebyście zatracili swoją prawdziwość, chcę tylko żebyście pamiętali o tym że warto się uśmiechać. Bo człowiek uśmiechnięty zawsze będzie odebrany lepiej od tego ponurego, a przecież nie chcecie wyjść na ponurych w tak ważnym dniu Waszego życia. Sam fakt oglądania tego filmu świadczy o tym że zależy wam na tym żeby dobrze wypaść.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    3. Wygłupianie się
                </Typography>
                <Typography className='paragraph'>
                    Dlaczego? To rozluźnia atmosferę sprawia że film się przyjemniej ogląda, pokazuje też Was z ciekawej perspektywy, takiej rozrywkowej a przecież dzień ślubu to szczęśliwy dzień.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    4. Pomysły na urozmaicenie
                </Typography>
                <Typography className='paragraph'>
                    Operator kamery choć znacznie częściej fotograf prawdopodobnie będzie Wam doradzał co zrobić przed obiektywem, jak zapozować co z rękami, co z głową i oczywiście gdy ktoś mnie zapyta to udzielam podstawowych rad w końcu chcę żebyście wypadli jak najlepiej, ale  wolę jak ustawiacie się też trochę po swojemu, nie chcę wszystkich pakować do jednego schematu poprawności że zdjęcia czy filmy ze ślubu mają być z takim uśmiechem tak ułożonymi rękami i w takiej pozycji, pozycji której naturalnie nigdy byście danego dnia nie przyjęli, dla mnie wtedy to nie jest reportaż tylko stylizowana sesja zdjęciowa lub film fabularny, moim zdaniem nie o to chodzi w reportażu. Jest to oczywiście kwestia bardzo subiektywna proponuję w takich sytuacjach kompromis, trochę zapozować a trochę też po swojemu urozmaicić.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    5. Pozwólcie się poznać operatorowi
                </Typography>
                <Typography className='paragraph'>
                    Ale poznać w jaki sposób? Jako operator kamery chcę mieć pewne punkty zaczepienia, powiedzcie co w sobie lubicie jak chodzi o wygląd oraz charakter żebym mógł uwypuklić te cechy, powiedzcie mi również czego w sobie nie lubicie żebym mógł te kwestie pomijać. Czy jest jakaś pasja która pochłania większość życia któregoś z was lub obojga i fajnie by było wpleść o niej słówko lub pokazać zdjęcia lub wykorzystać ją podczas pleneru.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    6. Poćwiczcie przed lustrem miny, posturę oraz pocałunki
                </Typography>
                <Typography className='paragraph'>
                    To jest po autentyczności najważniejszy punkt w tym zestawieniu, ten punkt jest dla poszerzenia Waszej świadomości o swoim ciele, jak wygląda Wasza twarz gdy się uśmiechacie lub gdy jesteście zaskoczeni. Zwróćcie uwagę jaką Wasz partner zwykle ma posturę jeżeli się notorycznie garbi i w dniu ślubu będzie wyprostowany to istnieje ryzyko że wyprostuje się za bardzo i na filmie może wyjść sztucznie. Poćwiczcie to sobie przed lustrem kilkanaście minut, w porównaniu do innych przygotowań jest to przecież krótka chwila a może przeważyć na korzyść wszystkich zdjęć i filmów które zostaną na całe życie,  Kolejna sprawa to pocałunek, nagrajcie go sobie w zaciszu domowym i sprawdźcie jak to wygląda, ogólnie przyjęte założenia są takie żeby pocałunek był delikatny i żeby nie wyciągać języka i nie otwierać za mocno buzi która zniekształci twarz i sprawi wrażenie że zamiast pocałować chcecie zjeść drugą osobę, oczywiście naprzeciw temu mam też prostsze założenie, jeżeli Wam się to podoba i chcecie to na filmie to wszystko w porządku, w końcu to Wasz dzień. Ale ważna jest świadomość tego że wiecie co robicie.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    7. Pilnujcie swojego ubioru
                </Typography>
                <Typography className='paragraph'>
                    Jest to bardzo długi dzień i naturalną rzeczą będzie że będzie się u panów przekrzywiać mucha lub kwiatek przyczepiony do marynarki, poszetka się schowa do brustaszy czyli tej kieszeni zewnętrznej w marynarce buty się gdzieś pobrudzą, u pań może się rekawek podwinąć lub guziczek sukienki rozpiąć, normalne rzeczy na które warto zwracać uwagę najlepiej powiedzcie świadkom żeby zwracali na to uwagę, żeby mieć jak najlepszą pamiątkę.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    8. Dobierzcie odpowiedniego filmowca
                </Typography>
                <Typography className='paragraph'>
                    Dobierzcie sobie twórcę z którym będziecie się dobrze czuć i będziecie wiedzieć że wszystko będzie dobrze, wykorzysta te najlepsze momenty, luźno porozmawia, doradzi gdy będziecie tego potrzebować i odda Wasze uczucia w filmie, przecież powtórek nie będzie a skoro oglądacie ten film to jest dowód że oczekujecie dobrej pamiątki.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    9. Odpowiednie otoczenie do nagrań
                </Typography>
                <Typography className='paragraph'>
                    Kwestie kościoła czy sali weselnej są dość oczywiste, jednakże warto też zadbać o miejsce w domu do nagrywania przygotowań żeby pomieszczenie było możliwie duże z dużymi oknami, nie było jakiś niepotrzebnych rzeczy a pojawiły się te ważne dla Was. Z którymi się identyfikujecie, jakieś pasje lub pamiątki rodzinne, film zachowa je dokładnie w takim stanie w jakim będą w dniu ślubu.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    10. W kościele poruszajcie się wolno
                </Typography>
                <Typography className='paragraph'>
                    Dajcie się nacieszyć ludziom Waszym widokiem i nie wymagajcie od operatora by biegał za wami po kościele, na spokojnie to Wasz dzień i to na Was wszyscy będą czekać, bez Was nie ma imprezy.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    11. Stańcie równo naprzeciwko siebie podczas przysięgi
                </Typography>
                <Typography className='paragraph'>
                    Przysięga to ten kluczowy moment rejestrowany zawsze w całości, najlepiej wygląda jak stoicie równo naprzeciwko siebie, nie w stronę księdza ani ludzi, w końcu bierzecie ze sobą ślub a nie z nimi. I jak już tak równo stoicie to patrzcie sobie w oczy to na filmie wygląda najlepiej i pokazuje Waszą miłość i zdecydowanie.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography variant='h4' className='header'>
                    12. Uprzedzenie operatora kamery o wszystkich niuansach w danym dniu
                </Typography>
                <Typography className='paragraph'>
                    Ten punkt jest tak troszkę na doczepkę bo nie musi się tu znaleźć jeśli współpracujecie z osobą która bardzo skrupulatnie przygotowuje się do swojej pracy, wtedy będziecie wypytani o wszystko bardzo dokładnie. Jednakże są pewne nowości, niespodzianki które wychodzą dzień wcześniej lub w danym dniu, w takim przypadku pierwszymi osobami które powinniście poinformować jesteśmy my żeby to jak najlepiej uwiecznić.
                </Typography>
            </Box>
            <Box className='box'>
                <Typography className='paragraph'>
                Wszystkie inne kwestie są dużo bardziej indywidualne i na pewno będą poruszone podczas rozmowy z realizatorem filmu z Waszego ślubu, zwykle są to dość długie i wyczerpujące temat rozmowy gdzie będzie okazja do przekazania wszystkich szczegółów. Jeżeli potrzebujecie jakiejkolwiek realizacji video zapraszam do opisu tam jest moja strona internetowa a w niej wszystkie informacje czym się zajmuję. Wszystkiego dobrego i do usłyszenia!
                </Typography>
            </Box>

            {/* <Box className='box'>
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
            </Box> */}
        </>
    );
}

export default JakDobrzeWypascNaFilmieSlubnym;

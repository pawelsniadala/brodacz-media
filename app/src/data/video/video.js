import { category } from './category/category';
import { content } from './realization/content';
import { immovables } from './realization/immovables';
import { drone } from './realization/drone';
import { events } from './realization/events';
import { music } from './realization/music';
import { weddings } from './realization/weddings';
import { guides } from './realization/guides';
import { broadcasts } from './realization/broadcasts';
import { animations } from './realization/animations';

export const video = {
    category: [ ...category ],
    realization: {
        content: [ ...content ],
        immovables: [ ...immovables ],
        drone: [ ...drone ],
        events: [ ...events ],
        music: [ ...music ],
        weddings: [ ...weddings ],
        guides: [ ...guides ],
        broadcasts: [ ...broadcasts ],
        animations: [ ...animations ]
    }
};

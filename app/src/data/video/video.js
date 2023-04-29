import { category } from './category/category';
import { content } from './realization/content';
import { drone } from './realization/drone';
import { events } from './realization/events';
import { music } from './realization/music';
import { weddings } from './realization/weddings';
import { guides } from './realization/guides';
import { animations } from './realization/animations';
import { backstage } from './realization/backstage';

export const video = {
    category: [ ...category ],
    realization: {
        content: [ ...content ],
        drone: [ ...drone ],
        events: [ ...events ],
        music: [ ...music ],
        weddings: [ ...weddings ],
        guides: [ ...guides ],
        animations: [ ...animations ],
        backstage: [ ...backstage ],
    }
};

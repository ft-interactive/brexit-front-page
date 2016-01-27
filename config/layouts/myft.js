import Concept from '../../components/card/concept';
import MyftPromo from '../../components/card/myft-promo';

export default [
    //Column 0
    {
        type: 'column',
        colspan: { default: 12, M: 4, L: 3 },
        cards: [
            {
                type: MyftPromo,
                isMyftUser: false
            }
        ]
    },
    //Column 1
    {
        colspan: { default: 12, M: 4, L: 3 },
        cards: [
            {
                type: Concept
            }
        ]
    },
    //Column 2
    {
        colspan: { default: 12, M: 4, L: 3 },
        cards: [
            {
                type: Concept
            }
        ]
    },
    //Column 3
    {
        colspan: { default: 12, M: 4, L: 3 },
        cards: [
            {
                type: Concept,
                show: { default: true, M: false, L: true }
            }
        ]
    }
];

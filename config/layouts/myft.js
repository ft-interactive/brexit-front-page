import Concept from '../../components/card/concept';
import MyftPromo from '../../components/card/myft-promo';

export default [
    //Column 0
    {
        type: 'column',
        colspan: { default: 12, M: 3 },
        items: [
            {
                type: MyftPromo
            }
        ]
    },
    //Column 1
    {
        colspan: { default: 12, M: 3 },
        items: [
            {
                type: Concept
            }
        ]
    },
    //Column 2
    {
        colspan: { default: 12, M: 3 },
        items: [
            {
                type: Concept
            }
        ]
    },
    //Column 3
    {
        colspan: { default: 12, M: 3 },
        items: [
            {
                type: Concept
            }
        ]
    }
];

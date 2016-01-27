import Concept from '../../components/card/concept';
import MyftPromo from '../../components/card/myft-promo';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Card from '../../components/card/card';


export default [
    {
        type: Row,
        components: [
            //Column 0
            {
                type: Column,
                colspan: { default: 12, M: 3 },
                components: [
                    {
                        type: MyftPromo
                    }
                ]
            },
            //Column 1
            {
                type: Column,
                colspan: { default: 12, M: 3 },
                components: [
                    {
                        type: Card,
                        cardType: Concept
                    }
                ]
            },
            //Column 2
            {
                type: Column,
                colspan: { default: 12, M: 3 },
                components: [
                    {
                        type: Card,
                        cardType: Concept
                    }
                ]
            },
            //Column 3
            {
                type: Column,
                colspan: { default: 12, M: 3 },
                components: [
                    {
                        type: Card,
                        cardType: Concept
                    }
                ]
            }
        ]
    }
];

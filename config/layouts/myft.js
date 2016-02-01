import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Content from '../../components/card/content';
import MyftPromo from '../../components/card/myft-promo';

export default [
    {
        type: Row,
        components: [
            //Column 0
            {
                type: Column,
                colspan: { default: 12, M: 4, L: 3 },
                components: [
                    {
                        type: MyftPromo,
                        isMyftUser: false
                    }
                ]
            },
            //Column 1
            {
                type: Column,
                colspan: { default: 12, M: 4, L: 3 },
                components: [
                    {
                        type: Content
                    }
                ]
            },
            //Column 2
            {
                type: Column,
                colspan: { default: 12, M: 4, L: 3 },
                components: [
                    {
                        type: Content
                    }
                ]
            },
            //Column 3
            {
                type: Column,
                colspan: { default: 12, M: 4, L: 3 },
                components: [
                    {
                        type: Content,
                        show: { default: true, M: false, L: true }
                    }
                ]
            }
        ]
    }
];

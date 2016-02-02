import { format as dateFormat } from 'o-date';

import FastFt from '../../shared/components/fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

export default () => ({
    id: 'top-stories',
    title: 'Top Stories',
    style: 'top-stories',
    date: date,
    isTab: true,
    layoutId: 'top-stories',
    size: {
        default: 12
    },
    sidebarComponent: {
        id: 'fastft',
        component: FastFt,
        isTab: true
    },
    cols: {
        content: {
            default: 12,
            L: 8,
            XL: 9
        },
        sidebar: {
            default: 12,
            L: 4,
            XL: 3
        }
    }
})

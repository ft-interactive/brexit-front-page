import { format as dateFormat } from 'o-date';

import FastFt from '../../shared/components/fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

const articleHasRelatedContent = (articles, articleIndex, relatedContentLength = 1) =>
    articles &&
    articles[articleIndex] &&
    articles[articleIndex].relatedContent &&
    articles[articleIndex].relatedContent.length >= relatedContentLength;

const getLayoutId = (content, flags) => {
    return 'top-stories-span';
    const prefix = flags.frontPageTopStoriesRevised ? 'top-stories-revised' : 'top-stories';

    return content && content.main && articleHasRelatedContent(content.main, 0, 3) ?
        `${prefix}-with-related` :
        prefix;
}

export default ({ content, flags }) => ({
    id: 'top-stories',
    title: 'Top Stories',
    style: 'top-stories',
    date: date,
    isTab: true,
    layoutId: getLayoutId(content, flags),
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

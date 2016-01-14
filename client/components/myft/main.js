import section from '../../../components/section/main';

const loadSection = flags => {
    if (flags.get('frontPageMyftSection')) {
        const myftContainer = document.getElementById('myft');
        section.init(myftContainer, { main: [] });
    }
};

export default {
    loadSection
}

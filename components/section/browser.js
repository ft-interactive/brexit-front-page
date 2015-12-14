import SectionNode from './node';
import nJsonpFetch from 'n-jsonp-fetch';
const fetchres = require('fetchres');

export default class SectionBrowser extends SectionNode {


	loadContent(e) {
		const uuid = e.target.value;
		if(uuid === 'initial') {
			this.setState({content: this.props.content})
		} else {
			const fetchFn = ('XDomainRequest' in window) ? nJsonpFetch : fetch;
			fetchFn('https://next-graphql-api.ft.com/data?query=' + encodeURIComponent(this.props.dynamicContent.query(uuid)), {
				credentials: 'include'
			})
			.then(fetchres.json)
			.then((data) => {
				this.setState({content: this.props.dynamicContent.parseResults(data)})
			});
		}
	};

}

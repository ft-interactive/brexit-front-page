import SectionNode from './node';
import nJsonpFetch from 'n-jsonp-fetch';
import Superstore from 'superstore';
import {json as fetchJson} from 'fetchres';
import fireTracking from '../../client/utils/fire-tracking';
import getDomPath from 'n-instrumentation/src/utils/getDomPath';


export default class SectionBrowser extends SectionNode {

	constructor(props) {
		super(props);
		this.defaultSourceStore = new Superstore('local', 'next-frontpage');
	}

 	componentWillMount() {
 		//If there is a source stored in localStorage, fetch that
 		if(this.props.dynamicContent && this.props.dynamicContent.rememberSource) {
			this.defaultSourceStore.get(this.props.dynamicContent.rememberSource).then(pref => {
				if(pref && pref !== this.state.selectedSource) {
					this.loadContent({
						target: {
							value: pref
						}
					});
				}
			});
 		}
 	}

	loadContent(e) {
		const uuid = e.target.value;
		const title = e.target.textContent;
		this.setState({selectedSource: uuid});

		if(uuid === 'initial') {
			this.setState({content: this.props.content})
			this.defaultSourceStore.unset(this.props.dynamicContent.rememberSource);
		} else {
			//Save choice to local storage
			this.defaultSourceStore.set(this.props.dynamicContent.rememberSource, uuid);

			const fetchFn = ('XDomainRequest' in window) ? nJsonpFetch : fetch;
			fetchFn('https://next-graphql-api.ft.com/data?query=' + encodeURIComponent(this.props.dynamicContent.query(uuid)), {
				credentials: 'include'
			})
			.then(fetchJson)
			.then((data) => {
				this.setState({content: this.props.dynamicContent.parseResults(data)})
			});
		}
		if(e.type) { //only fire tracking for actual events
			fireTracking('oTracking.event', { category: 'cta', action: 'change', value: uuid, title: title, domPath: getDomPath(e.target, []) });
		}

	};

}

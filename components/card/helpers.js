import {layoutNames} from '../layout/engine';

const responsiveValue = (value) => {
	return value.default + ' ' + layoutNames.filter(it => value.hasOwnProperty(it)).map(it => it + value[it]).join(' ');
}

export {
	responsiveValue
}

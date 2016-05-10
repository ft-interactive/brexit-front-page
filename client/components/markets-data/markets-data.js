import { crossDomainFetch } from 'o-fetch-jsonp';

const regionalSecurities = {
	uk: [
		{
			name: 'FTSE 100',
			symbol: 'FTSE:FSI',
			type: 'indices'
		},
		{
			name: 'S&P 500',
			symbol: 'INX:IOM',
			type: 'indices'
		},
		{
			name: 'Euro/Dollar',
			symbol: 'EURUSD',
			type: 'equities'
		},
		{
			name: 'Pound/Dollar',
			symbol: 'GBPUSD',
			type: 'equities'
		},
		{
			name: 'Brent Crude Oil',
			symbol: 'IB.1:IEU',
			type: 'equities'
		},
		{
			name: '10 Year US Gov',
			symbol: 'JPMUS10YCMY:REU',
			type: 'indices'
		}
	],
	us: [
		{
			name: 'S&P 500',
			symbol: 'INX:IOM',
			type: 'indices'
		},
		{
			name: 'Shanghai',
			symbol: 'SHI:SHH',
			type: 'indices'
		},
		{
			name: 'FTSE 100',
			symbol: 'FTSE:FSI',
			type: 'indices'
		},
		{
			name: 'Euro/Dollar',
			symbol: 'EURUSD',
			type: 'equities'
		},
		{
			name: 'Brent Crude Oil',
			symbol: 'IB.1:IEU',
			type: 'equities'
		},
		{
			name: '10 Year US Gov',
			symbol: 'JPMUS10YCMY:REU',
			type: 'indices'
		}
	]
};

const createAriaLabel = (priceChangeDirection, percentChange) =>
	`${priceChangeDirection} ${percentChange.toString().replace(/\./, ' point ')} %`;

export default flags => {
	if (!flags.get('frontPageHeaderMarketsData')) {
		return;
	}
	let securities;
	switch(window.location.pathname.substring(1)) {
		case 'international':
			securities = regionalSecurities['us'];
			break;
		default:
			securities = regionalSecurities['uk'];
	}
	const symbols = securities.map(security => security.symbol).join(',');
	crossDomainFetch(`https://next-markets-proxy.ft.com/securities/v1/quotes?symbols=${symbols}`, { timeout: 5000 })
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Unable to get securities '${symbols}'`);
			}
		})
		.then(marketsData => {
			const itemsEl = document.createElement('ul');
			itemsEl.className = 'markets-data__items markets-data__items--hidden';
			itemsEl.innerHTML = marketsData.data.items
				.filter(marketData => !marketData.partialError && 'change1Day' in marketData.quote)
				.map((marketData, index) => {
					const symbol = marketData.symbolInput;
					const security = securities.find(security => security.symbol === symbol);
					const percentChange = marketData.quote.change1DayPercent;
					if (!percentChange) {
						return '';
					}
					const priceChangeDirection = percentChange < 0 ? 'down' : percentChange > 0 ? 'up' : 'no-change';
					return `
						<li class="markets-data__item" data-trackable="item | ${index + 1}">
							<a href="http://markets.ft.com/data/${security.type}/tearsheet/summary?s=${symbol}"
								class="markets-data__item__link"
								data-trackable="link">
								<h2 class="markets-data__item__name">${security.name}</h2>
								<p
									class="markets-data__item__change markets-data__item__change--${priceChangeDirection}"
									aria-label="${createAriaLabel(priceChangeDirection, percentChange.toFixed(2))}">
									${priceChangeDirection === 'up' ? '+' : ''}${percentChange.toFixed(2)}%
								</p>
							</a>
						</li>
					`;
				})
				.join('');
			const marketsDataEl = document.querySelector('.js-markets-data');
			marketsDataEl.insertBefore(itemsEl, marketsDataEl.querySelector('.markets-data__link'));
			window.setTimeout(() => {
				itemsEl.classList.remove('markets-data__items--hidden');
			}, 10);
		})
		.catch(err => {
			window.setTimeout(() => {
				throw err;
			});
		});
}

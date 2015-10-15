const regionalSecurities = {
	uk: [
		{
			name: 'FTSE 100',
			symbol: 'FTSE:FSI'
		},
		{
			name: 'S&P 500',
			symbol: 'INX:IOM'
		},
		{
			name: 'Dollar/Euro',
			symbol: 'EURUSD'
		},
		{
			name: 'Dollar/Pound',
			symbol: 'GBPUSD'
		},
		{
			name: 'Brent Crude Oil',
			symbol: 'IB.1:IEU'
		},
		{
			name: '10 Year US Gov',
			symbol: '11523680',
			url: 'http://markets.ft.com/data'
		}
	],
	us: [
		{
			name: 'S&P 500',
			symbol: 'INX:IOM'
		},
		{
			name: 'Shanghai',
			symbol: 'SHI:SHH'
		},
		{
			name: 'FTSE 100',
			symbol: 'FTSE:FSI'
		},
		{
			name: 'Dollar/Euro',
			symbol: 'EURUSD'
		},
		{
			name: 'Brent Crude Oil',
			symbol: 'IB.1:IEU'
		},
		{
			name: '10 Year US Gov',
			symbol: '11523680',
			url: 'http://markets.ft.com/data'
		}
	]
};

const init = (flags) => {
	if (!flags.get('frontPageHeaderMarketsData')) {
		return;
	}
	//render();
	let securities;
	switch(window.location.pathname.substring(1)) {
		case 'international':
			securities = regionalSecurities['us'];
			break;
		default:
			securities = regionalSecurities['uk'];
	}
	const symbols = securities.map(security => security.symbol).join(',');
	fetch(`https://next-markets-proxy.ft.com/securities/v1/quotes?symbols=${symbols}`)
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
				.filter(marketData => !marketData.partialError && marketData.quote.change1Day)
				.map(marketData => {
					const symbol = marketData.symbolInput;
					const security = securities.find(security => security.symbol === symbol);
					const priceChange = marketData.quote.change1Day;
					const priceChangeDirection = priceChange < 0 ? 'down' : priceChange > 0 ? 'up' : 'no-change';
					const href = security.url || `http://markets.ft.com/data/equities/tearsheet/summary?s=${symbol}`;
					return `
						<li class="markets-data__item" data-trackable="item">
							<a href="${href}"
								class="markets-data__item__link"
								data-trackable="link">
								<h2 class="markets-data__item__name">${security.name}</h2>
								<p class="markets-data__item__change markets-data__item__change--${priceChangeDirection}">
									${priceChangeDirection === 'up' ? '+' : ''}${priceChange.toFixed(2)}
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
};

export default {
	init
}

const securities = [
	{
		name: 'S&P 500',
		symbol: 'MRKT:NSQ'
	},
	{
		name: '10Yr US Gov',
		symbol: 'USDJPY'
	},
	{
		name: '$ US - £ GBP',
		symbol: 'USDGBP'
	},
	{
		name: '$ US - € EUR',
		symbol: 'USDEUR'
	},
	{
		name: 'Brent Crude',
		symbol: 'JPYUSD'
	},
	{
		name: 'Gold 100oz',
		symbol: 'SAB:LSE'
	}
];
const marketsDataEl = document.querySelector('.js-markets-data');

const render = () => {
	marketsDataEl.innerHTML =
		'<a href="http://markets.ft.com/research/markets/overview" class="markets-data__link" data-trackable="link">Visit Markets Data</a>';
};

const init = (flags) => {
	if (!flags.get('frontPageHeaderMarketsData')) {
		return;
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
			render();
			const itemsEl = document.createElement('ul');
			itemsEl.className = 'markets-data__items markets-data__items--hidden';
			itemsEl.innerHTML = marketsData.data.items
				.filter(marketData => !marketData.partialError && marketData.quote.change1Day)
				.map(marketData => {
					const symbol = marketData.basic.symbol;
					const security = securities.find(security => security.symbol === symbol);
					const priceChange = marketData.quote.change1Day;
					const priceChangeDirection = priceChange < 0 ? 'down' : priceChange > 0 ? 'up' : 'no-change';
					return `
						<li class="markets-data__item" data-trackable="item">
							<a href="http://markets.ft.com/research/Markets/Tearsheets/Summary?s=${symbol}"
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
			marketsDataEl.insertBefore(itemsEl, marketsDataEl.querySelector('.markets-data__link'));
			window.setTimeout(() => {
				itemsEl.classList.remove('markets-data__items--hidden');
			}, 10);
		})
		.catch(err => {
			throw err;
		});
};

export default {
	init
}

export default function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach(thing => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `
                                <div class="card" data-category="${thing.category}">
                                ${thing.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url('${thing.img}')"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price" style='${thing.sale ? 'color:red' : ''}'>${thing.price + ' ​₽'}</div>
										<h5 class="card-title">${thing.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
        `;
        goodsWrapper.appendChild(card);
    });
}
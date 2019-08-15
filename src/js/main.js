// start checkbox

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');

            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}
toggleCheckbox();

// end checkbox

//basket

function toggleCart() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.cart-close');

    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}
toggleCart();
// end basket

// работа с корзиной (начало)
// adding goods(добавление вещей)

function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        counterGoods = document.querySelector('.counter');

    cards.forEach((card) => {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });
    // removing goods

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cartTotal = document.querySelector('.cart-total span');

        counterGoods.textContent = cardsCart.length;

        let sum = 0;
        cardsPrice.forEach((elem) => {
            let price = parseFloat(elem.textContent);
            sum += price;
        });
        cartTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}
addCart();
//работа с корзиной (конец)


//работа с фильтром акции
function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        goods = document.querySelector('.goods'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

    discountCheckbox.addEventListener('click', () => {
        cards.forEach((elem) => {
            if (discountCheckbox.checked) {
                if (!elem.querySelector('.card-sale')) {
                    elem.parentNode.remove();
                    // elem.parentNode.style.display = 'none';
                }
            } else {
                goods.appendChild(elem.parentNode);
                // elem.parentNode.style.display = 'none';
            }
        });
    });

    function filterPrice() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);

            if ((min.value && price < min.value) || (max.value && price > max.value)) {
                card.parentNode.remove();
                // elem.parentNode.style.display = 'none';
            } else {
                goods.appendChild(card.parentNode);
                // elem.parentNode.style.display = 'none';
            }
        });
    }
    //конец работы с фильтром по акции

    // фильтр по цене
    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

    // поиск 
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });
}
actionPage();
// конец работы с фильтром акции
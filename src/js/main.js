// start checkbox
let checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function(elem) {
    elem.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
            
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});    
// checkbox.addEventListener('change', function() {
//     if (this.checked) {
//         this.nextElementSibling.classList.add('checked');
        
//     } else {
//         this.nextElementSibling.classList.remove('checked');
//     }
// });

// end checkbox

//basket

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
// end basket
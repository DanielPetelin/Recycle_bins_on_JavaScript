let cart = {
    'trush' : 2,
    'waste' : 2,
};

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    } else if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    };
};

const plusFunction = id => {
    cart[id]++;
    renderCart();
};

const minusFunction = id => {
    if (cart[id] - 1 == 0) {
        deletFunction(id);
        return true;
    };
    
    cart[id]--;
    renderCart();
};

const deletFunction = id => {
    delete cart[id];
    renderCart();
};

const renderCart = () => {
    console.log(cart);
};

renderCart();
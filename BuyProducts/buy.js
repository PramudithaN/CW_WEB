let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closecart = document.querySelector('#close-cart')

cartIcon.onclick = () =>{
    cart.classList.add('active');
};
closecart.onclick = () =>{
    cart.classList.remove('active');
};

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    var removeCartBottons = document.getElementsByClassName('cart-remove')
    console.log(removeCartBottons)
    for (var i = 0; i < removeCartBottons.length; i++){
        var button = removeCartBottons[i]
        button.addEventListener('click', removeCartitem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quatityChanged)
    }
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked)
    }
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

function buyButtonClicked(){
    alert('Your order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

function removeCartitem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updateTotal();
}
 
function quatityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    addProductToCart(title,price, productImg);
    updateTotal();
}

function  addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemName = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemName.length; i++){
        if(cartItemName[i].innerText == title){
        alert('You have already add this item to cart');
        return;
        }
    }

var cartBoxContent = `
                           <img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-price">${price}</div>
                                <<div class="cart-product-title">${title}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i class='bx bxs-trash cart-remove' ></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartitem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quatityChanged);                    
}

function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        total = Math.round(total * 100)/100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    
}
let increase = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
let decrease = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
let productsCart = document.querySelector('.cart__products');
const sendToCart = Array.from(document.getElementsByClassName("product__add"));

decrease.forEach( element => element.addEventListener("click", function() {
    if (element.nextElementSibling.innerText > 1) {
        element.nextElementSibling.innerText--;
    }
}));

increase.forEach(element => element.addEventListener("click", function() {
    element.previousElementSibling.innerText++;
}));
function addCartProduct(productId, productImg, productCount) {
    productsCart.insertAdjacentHTML("afterbegin", `<div class="cart__product" data-id=${productId}>
    <img class="cart__product-image" src=${productImg}>
    <div class="cart__product-count">${productCount}</div>
</div>`);
}

function productMove(productImg){
    setInterval(move, 10);
    let clonedImage = productImg.cloneNode(false);
    let cartPos = productsCart.getBoundingClientRect();
    function move(){
        let imagePos = document.querySelectorAll("img.product__image").forEach(image => {
            let positEach = image.getBoundingClientRect();
            if (cartPos.top == positEach.top && cartPos.left == positEach.left) {
                clearInterval(move);
            } else {
                positEach.top++;
                positEach.left++
                clonedImage.style.top = positEach.top +"px"
                clonedImage.style.left =  positEach.left + "px";
            }
        });
    }
}
sendToCart.forEach(sendTo => { sendTo.addEventListener("click", function(){
        let product = sendTo.closest(".product");
        let productId = product.dataset.id;
        let productImg = product.querySelector(".product__image").getAttribute("src");
        let productCount = product.querySelector(".product__quantity-value").innerText;
        if (productsCart.querySelector(".cart__product")) {
            let item = Array.from(productsCart.querySelectorAll('.cart__product')).find(item => item.dataset.id == productId);
            if (item) {
                item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) + Number(productCount);
            } else {
                // productMove(productImg);
                addCartProduct(productId, productImg, productCount);
            }
        } else {
            // productMove(productImg);
            addCartProduct(productId, productImg, productCount);
        }
        
    })
})




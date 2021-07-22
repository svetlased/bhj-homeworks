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

function productMove(productImg, productId){   
    let clonedImage = productImg.cloneNode(false);
    document.querySelector('body').appendChild(clonedImage);
    clonedImage.style.position = "absolute";

    let clonedImagePos = clonedImage.getBoundingClientRect();
    let targetImage = document.querySelector(`.cart__products .cart__product[data-id='${productId}']`);// позиция исходного изображения
    let posTop = targetImage.top;
    let posLeft = targetImage.left;
    clonedImage.style.top = posTop +"px";
    clonedImage.style.left = posLeft + "px";

    

    function move(){
        let differenceVert = clonedImagePos.top - posTop;
        let differenceHor = posLeft - clonedImagePos.left;

        if (posTop === clonedImagePos.top) {
            clonedImage.remove();
            clearInterval(move);
        } else {
            posTop = posTop - (differenceVert * 0.05);
            posLeft = posLeft + (differenceHor * 0.05);
            clonedImage.style.top = posTop + "px";
            clonedImage.style.left = posLeft + "px";
        }
    };
    setInterval(move, 10);
}
sendToCart.forEach(sendTo => { sendTo.addEventListener("click", function(){
        let product = sendTo.closest(".product");
        let productId = product.dataset.id;
        let productImg = product.querySelector(".product__image").getAttribute("src");
        let productCount = product.querySelector(".product__quantity-value").innerText;
        let imageToFly = product.querySelector(".product__image");
        if (productsCart.querySelector(".cart__product")) {
            let item = Array.from(productsCart.querySelectorAll('.cart__product')).find(item => item.dataset.id == productId);
            if (item) {
                item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) + Number(productCount);
            } else {
                addCartProduct(productId, productImg, productCount);
                productMove(imageToFly, productId);
            }
        } else {
            addCartProduct(productId, productImg, productCount);
            productMove(imageToFly, productId);
        }
        
    })

   
})

productsCart.addEventListener("click", event => {
    productsCart.querySelectorAll(".cart__product").forEach(item => item.remove());
})


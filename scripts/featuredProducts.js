let productsContainer = document.querySelector(".product-container");
let productDetail = document.querySelector(".product-detail");
let overlay = document.querySelector(".overlay");
let hiddenMenu = document.querySelector("#hiddenProductMenu");
let products;

async function getFeaturedProducts() {
    try {
        const response = await fetch("../products/featuredProducts.json");
        const data = await response.json();
        products = data;
        drawProductsOnScreen(data);
    }catch(error) {
        console.log(error);
    }
}

function drawProductsOnScreen(input) {
    for(let i = 0; i < input.length; i++) {
        let html = 
        `<div class="product" onclick="viewProduct(${input[i].id})"">
            <img src=${input[i].primaryImage} alt=""/>
            <div class="description">
                <span>${input[i].brand}</span>
                <h5>${input[i].title}</h5>
                <div class="star-ratings">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${input[i].price}</h4>
                <a href="#"><i class="fa fa-shopping-cart"></i></a>
            </div>
        </div>`;  
        productsContainer.insertAdjacentHTML("beforeend", html);
    } 
}

getFeaturedProducts();

function viewProduct(id) {
    const item = products.find((product) => product.id === id);
    let html = 
    `   <div class="product-detail Absolute-Center is-Fixed ">
            <div class="exitMenu">
                <img src="../images/icons8-close-window-50.png" alt="" class="close-product-img" onclick="closeProductDetailMenu()""/>
            </div>
            <img src=${item.primaryImage} alt="" class="product-detail-img"/>
            <h3 class="fs-h3">${item.productDetailPoints[0]}</h3>
            <h3 class="fs-h3">${item.productDetailPoints[1]}</h3>
            <h3 class="fs-h3">${item.productDetailPoints[2]}</h3>
            <p class="fs-p">${item.disclaimer}</p>
            <button class="btn-detail add-to-cart-detail" onclick="addToCart(${item.id})">Add To Cart</button>
        </div>`;

    hiddenMenu.insertAdjacentHTML("beforeend",html);
    hiddenMenu.classList.remove("hidden");
}

function closeProductDetailMenu() {
    hiddenMenu.classList.add("hidden");
    overlay.classList.add("hidden");
}

function addToCart(id) {
    const item = products.find((product) => product.id === id);
    console.log(item);
}
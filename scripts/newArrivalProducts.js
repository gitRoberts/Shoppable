let newArrivalproductsContainer = document.querySelector(".new-arrival-product-container");

async function getNewArrivalProducts() {
    try {
        const response = await fetch("../products/newArrivalProducts.json");
        const data = await response.json();
        drawNewArrivalProductsOnScreen(data);
    }catch(error) {
        console.log(error);
    }
    
}

function drawNewArrivalProductsOnScreen(input) {
    for(let i = 0; i < input.length; i++) {
        let html = 
        `<div class="product">
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

        newArrivalproductsContainer.insertAdjacentHTML("beforeend", html);
    }
    
}


getNewArrivalProducts();
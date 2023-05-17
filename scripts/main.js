//criar produto na pagina shop

//pegar o que seria a 'div pai', ou a nossa ul de cada produto que seria cada li 
let productListContainer = document.getElementById('products-list');

//quero criar o elemento (cada produto) quando carregar a página da loja (shop.html) 
const createShopProduct = () => {
    productListContainer.innerHTML = '';
    products.forEach(product => {
        productListContainer.innerHTML += `
            <div class="product-card">
                <img src='${product.imgSrc}' alt="${product.name}">
                <div class="product-card-description">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="ranking-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <h4>R$ ${product.price}</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
            </div>
        `
    });
};

createShopProduct();


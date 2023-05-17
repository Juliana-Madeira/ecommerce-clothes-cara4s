//criar produto na pagina shop
const products = [
    {
        id: 0,
        name: "Cartoon Flower Shirt",
        price: 150,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f1.jpg",
        brand: "adidas"
    },
    {
        id: 1,
        name: "Coat Shirt Double Colors",
        price: 190,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f6.jpg",
        brand: "adidas"
    },
    {
        id: 2,
        name: "Spring Flower Shirt",
        price: 150,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f5.jpg",
        brand: "adidas"
    },
    {
        id: 3,
        name: "Floral Summer Pants",
        price: 190,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f7.jpg",
        brand: "adidas"
    },
    {
        id: 4,
        name: "Beauty Shorts",
        price: 110,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n6.jpg",
        brand: "adidas"
    },
    {
        id: 5,
        name: "Dark Casual Shirt",
        price: 150,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n8.jpg",
        brand: "adidas"
    },
    // {
    //     id: 6,
    //     name: "Casual Green Twill Jumpsuit",
    //     price: 180,
    //     inCart: 0,
    //     description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    //     imgSrc: "../images/products/v1.jpg",
    //     brand: "adidas"
    // },
    {
        id: 7,
        name: "White Flower Shirt",
        price: 150,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f2.jpg",
        brand: "adidas"
    },
    {
        id: 8,
        name: "Vintage Flower Shirt",
        price: 150,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f3.jpg",
        brand: "adidas"
    },
    {
        id: 9,
        name: "Pink Flower Shirt",
        price: 150,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f4.jpg",
        brand: "adidas"
    },
    {
        id: 10,
        name: "Cats Long Sleeve Shirt",
        price: 180,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/f8.jpg",
        brand: "adidas"
    },
    {
        id: 11,
        name: "Blue Social Shirt",
        price: 211,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n1.jpg",
        brand: "adidas"
    },
    {
        id: 12,
        name: "Grey Social Shirt",
        price: 211,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n2.jpg",
        brand: "adidas"
    },
    {
        id: 13,
        name: "White Social Shirt",
        price: 211,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n3.jpg",
        brand: "adidas"
    },
    {
        id: 14,
        name: "Map Flower Shirt",
        price: 180,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n4.jpg",
        brand: "adidas"
    },
    {
        id: 15,
        name: "Jeans Social Casual Shirt",
        price: 180,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n5.jpg",
        brand: "adidas"
    },
    {
        id: 16,
        name: "Militar Brown Casual Shirt",
        price: 180,
        inCart: 0,
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/products/n7.jpg",
        brand: "adidas2"
    },
    // {
    //     id: 17,
    //     name: "Blue Beach Dress",
    //     price: 110,
    //     inCart: 0,
    //     description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    //     imgSrc: "../images/products/v2.jpg",
    //     brand: "adidas"
    // },
    // {
    //     id: 18,
    //     name: "Green Dress",
    //     price: 110,
    //     inCart: 0,
    //     description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    //     imgSrc: "../images/products/v3.jpg",
    //     brand: "adidas"
    // },
]

//pegar o que seria a 'div pai', ou a nossa ul de cada produto que seria cada li 
let productListContainer = document.getElementById('products-list');

//quero criar o elemento (cada produto) quando carregar a página da loja (shop.html) 
const createShopProduct = () => {
    products.forEach(product => {
        productListContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.imgSrc}" alt="${product.name}">
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


//carregar features na pagina home e about quando carregar

//pegar a div pai,no caso uma section com id feature
const featuresListContainer = document.getElementById('feature');

//funçao para criar as features que serao carregadas
const createFeaturesHome = () => {
    features.forEach((feature) => {
        featuresListContainer.innerHTML += `
        <div class="feature-card">
            <img src="${feature.img}" alt="feature image">
            <h6>${feature.text}</h6>
        </div>
        `
    })
};

createFeaturesHome();


//button ir para a loja
const btnGotoShop = () => {
    window.location.href = 'shop.html'
};
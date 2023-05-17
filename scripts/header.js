//create header
const headerContent = document.getElementById('header');

const createHeader = () => {
    headerContent.innerHTML += `
    <a href="index.html">
        <img src="images/logo.png" alt="logotipo" class="logo">
    </a>
    <nav>
        <ul id="navbar">
            <li><a  href="index.html">Home</a></li>
            <li><a href="shop.html">Loja</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">Sobre</a></li>
            <li><a href="contact.html">Contato</a></li>
            <li class="cart"><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i><span>0</span></a></li>
            <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
        </ul>
    </nav>
    <nav class="mobile">
        <a href="cart.html" class="cart"><i class="fa-solid fa-bag-shopping"></i><span>0</span></a>
        <i class="fa-solid fa-bars" id="bar"></i>
    </nav>
    `
}

createHeader();
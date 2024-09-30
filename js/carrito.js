document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');

    let cart = [];

    // Cargar productos desde el archivo productos.json
    fetch('/js/productos.json')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error al cargar el JSON:', error));

    // Mostrar los productos en el DOM
    function displayProducts(products) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.name}">Agregar al carrito</button> `;
            productsContainer.appendChild(productDiv);

            // Añadir evento para agregar al carrito
            productDiv.querySelector('.add-to-car').addEventListener('click', () => addToCart(product));
        });
    }

    // Añadir productos al carrito
    function addToCart(product) {
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
    }

    // Actualizar la interfaz del carrito
    function updateCartUI() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartList.appendChild(listItem);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    // Limpiar el carrito
    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCartUI();
    });
});

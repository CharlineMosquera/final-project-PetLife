document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');

    let cart = [];

    if (!productsContainer || !cartList || !cartTotal || !clearCartButton) {
        console.error('Uno o más elementos del DOM no se encontraron.');
        return;
    }

    // Cargar productos desde el archivo productos.json
    fetch('/js/productos.json') // Asegúrate de que esta ruta sea correcta
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(products => displayProducts(products))
        .catch(error => console.error('Error al cargar el JSON:', error));

    // Mostrar los productos en el DOM
    function displayProducts(products) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-md-4', 'mb-4');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <div class="card h-100">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="rating">⭐⭐⭐⭐⭐</p>
                <p class="price">$${product.price}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.name}">Agregar al carrito</button> </div> </div>`;
            productsContainer.appendChild(productDiv);

            productDiv.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
        });
    }

    // Otras funciones (addToCart, updateCartUI, etc.)...
    function addToCart(product) {
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
    }

    function updateCartUI() {
        cartList.innerHTML = ''; // Limpiar la lista actual
        let total = 0; // Inicializar el total
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

            cartList.appendChild(listItem);
            total += item.price * item.quantity;
             // Calcular el total
        });
        cartTotal.textContent = total.toFixed(2); // Actualizar el total en la interfaz
    }


    function removeFromCart(index) {
        cart.splice(index, 1); // Eliminar el producto del carrito
        updateCartUI(); // Actualizar la interfaz
    }

    // Limpiar el carrito
    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCartUI();
    });


});

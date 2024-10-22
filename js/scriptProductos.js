document.addEventListener('DOMContentLoaded', () => {

    const productsContainer = document.getElementById('products-container');
    const productsContainerLocalStorage = document.getElementById('products-container-local-storage');
    const productsTitle = document.querySelector('h2 strong');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const payCarButton = document.getElementById('pay-cart');
    const basketButtons = document.getElementById('basket-buttons');

    function loadProductsFromLocalStorage() {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        if (products.length === 0) {
            productsContainerLocalStorage.style.display = 'none';
            productsTitle.parentElement.style.display = 'none';
        } else {
            displayProductsLocalStorage(products);
        }
    }

    function displayProductsLocalStorage(products) {
        productsContainerLocalStorage.innerHTML = "";
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-md-4', 'mb-4', 'product');
            productDiv.innerHTML = `
                <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="rating">⭐⭐⭐⭐⭐</p>
                <p class="price">${formatCurrency(product.price)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.name}">Agregar al carrito</button> </div> </div>`;
                productsContainerLocalStorage.appendChild(productDiv);
        });
    }

    loadProductsFromLocalStorage();

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
                <p class="price">${formatCurrency(product.price)}</p>
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
            listItem.innerHTML = `
                <div class="card basket h-100">
                    <span class="basket-quantity">x${item.quantity}</span>
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                        <p class="price">${formatCurrency((item.price * item.quantity).toFixed(2))}</p>
                    </div> 
                </div>`;

            cartList.appendChild(listItem);
            total += item.price * item.quantity;
             // Calcular el total
        });
        cartTotal.innerHTML =
            `<label>Total</label> 
            <p>${formatCurrency(total)}</p>`; // Actualizar el total en la interfaz

        if (cart.length > 0) {
            basketButtons.style.visibility = 'visible';
        } else {
            basketButtons.style.visibility = 'hidden';
        }
    }


    function removeFromCart(index) {
        cart.splice(index, 1); // Eliminar el producto del carrito
        updateCartUI(); // Actualizar la interfaz
    }

    // Limpiar el carrito
    clearCartButton.addEventListener('click', () => {
        const alertContainer = document.createElement('div');
        alertContainer.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show');
        alertContainer.innerHTML = `
            <strong>¿Estás seguro de que deseas vaciar tu canasta?</strong>
            <button type="button" class="btn btn-danger" id="confirm-clear-cart">Vaciar</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="alert">Cancelar</button>
        `;
        
        basketButtons.insertAdjacentElement('beforebegin', alertContainer);
    
        document.getElementById('confirm-clear-cart').addEventListener('click', () => {
            cart = [];
            updateCartUI();
            alertContainer.remove(); // Quitamos la alerta después de vaciar el carrito
        });
    });
    
    // Confirmar la compra si el carrito está lleno
    payCarButton.addEventListener('click', () => {
            const alertContainer = document.createElement('div');
            alertContainer.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show');
            alertContainer.innerHTML = `
                <strong>¡Compra realizada con éxito!</strong> Tus productos han sido comprados.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
    
            basketButtons.insertAdjacentElement('beforebegin', alertContainer);
    
            // Vaciamos el carrito después de la compra exitosa
            cart = [];
            updateCartUI();
        }
    )});
    
    // Agregar productos al carrito (redirigir al formulario)
    document.getElementById('add-products-button').addEventListener('click', function() {
        window.location.href = '../html/formulario.html';
    });

function formatCurrency(value) {
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    return formatter.format(value);
}
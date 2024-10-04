document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-add-product');
    const productsContainer = document.getElementById('products-container');

    function loadProductsFromLocalStorage() {
        const products = JSON.parse(localStorage.getItem('products')) || []; 
        displayProducts(products); 
    }

    function displayProducts(products) {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-md-4', 'mb-4', 'product');
            productDiv.innerHTML = `
                <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="rating">⭐⭐⭐⭐⭐</p>
                <p class="price">$${product.price}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.name}">Agregar al carrito</button> </div> </div>`;
            productsContainer.appendChild(productDiv);
        });
    }

    loadProductsFromLocalStorage();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('product-name').value.trim();
        const price = document.getElementById('product-price').value.trim();
        const description = document.getElementById('product-description').value.trim();
        const imageFile = document.getElementById('product-image').files[0];
        const category = document.getElementById('product-category').value.trim();
        const subcategory = document.getElementById('product-subCategory').value.trim();

        if (!name || !price || !description || !category || !subcategory || !imageFile) {
            return alert("Todos los campos son obligatorios");
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const imageBase64 = e.target.result;

            const product = {
                name: name,
                image: imageBase64,
                description: description,
                price: parseFloat(price),
                category: category,
                subcategory: subcategory
            };

            saveProductToLocalStorage(product);

            form.reset();
        };

        reader.readAsDataURL(imageFile);
    });

    function saveProductToLocalStorage(product) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        alert("Producto agregado exitosamente");
        loadProductsFromLocalStorage();
    }
});

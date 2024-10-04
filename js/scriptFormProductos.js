document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-add-product');

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

        if (isNaN(price) || parseFloat(price) <= 0) {
            return alert("El precio debe ser un número válido mayor a 0");
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
        window.location.href = '../html/productos.html';
        alert("Producto agregado exitosamente");
    }
});

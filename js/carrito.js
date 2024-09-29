document.addEventListener('DOMContentLoaded', function () {

    const products = document.querySelectorAll('.product');
    const carList = document.querySelector('.car-list');
    const totalElement = document.querySelector('.total span');
    const clearCarButton = document.querySelector('.clearCar');

    // Iniciar el carrito de compra vacío
    let car = [];

    // Adicionar producto al carrito
    products.forEach(product => {
        const addToCarButton = product.querySelector('.add-to-car');
        addToCarButton.addEventListener('click', () => addToCar(product));
    });

    // Borrar lista del carrito
    clearCarButton.addEventListener('click', clearCar);

    function addToCar(product) {
        const productId = product.id;
        const productName = product.querySelector('p').textContent; // Cambiar según el contenedor del nombre
        const productPrice = parseFloat(product.querySelector('.precio').textContent.replace('$', ''));

        const existingProduct = car.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            car.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
        updateCarUI();
    }

    function updateCarUI() {
        carList.innerHTML = '';
        let total = 0;

        car.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            carList.appendChild(listItem);
            total += item.price * item.quantity;
        });

        totalElement.textContent = `${total.toFixed(2)}`;

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => removeItem(button.dataset.id));
        });
    }

    function clearCar() {
        car = [];
        updateCarUI();
    }

    function removeItem(productId) {
        car = car.filter(item => item.id !== productId);
        updateCarUI();
    }
});

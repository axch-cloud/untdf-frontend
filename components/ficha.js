const params = new URLSearchParams(window.location.search);
const producto = params.get('producto');

fetch(`http://161.35.104.211:8000/products/${producto}`, {
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer fedegonzal'
    }
})
.then(res => res.json())
.then(product => renderProduct(product))
.catch(err => this.renderError(err));

function renderError(error) {
    console.error('Error fetching product:', error);
    document.querySelector('#lista-productos').innerHTML = `
        <p class="text-red-500">Error al cargar los productos. Inténtalo de nuevo más tarde.</p>
    `;
}

function renderProduct(product) {
    const listProductos = document.querySelector('#ficha-producto');

    // Multiplicamos product.price x 1000 y le quitamos los decimales
    product.price = Math.floor(product.price * 1000);

    const productItem = document.createElement('producto-item');
    productItem.setAttribute('title', product.title);
    productItem.setAttribute('picture', `http://161.35.104.211:8000${product.pictures[0]}`);
    productItem.setAttribute('description', product.description);
    productItem.setAttribute('price', product.price);
    listProductos.appendChild(productItem);
}

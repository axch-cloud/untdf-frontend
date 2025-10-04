function mostrarContenidoEtiqueta(TagID) {
    const productsGrid = document.querySelector('#lista-productos');
    productsGrid.innerHTML = '';

        const productList = document.createElement('etiquetas-list');
        productList.setAttribute('class', 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6');
        productList.setAttribute('api-url', `http://161.35.104.211:8000/products/`);
        productList.setAttribute('api-token', 'fedegonzal');
        productList.setAttribute('tag-id', TagID);
        productsGrid.appendChild(productList);
}
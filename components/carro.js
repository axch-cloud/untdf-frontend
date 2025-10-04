const productsGrid = document.querySelector('#mySidenav2')
const itemEstaticoTitulo = document.createElement('a');
itemEstaticoTitulo.innerText = 'Carro';
productsGrid.appendChild(itemEstaticoTitulo);;
const itemEstaticoTotal = document.createElement('a');
itemEstaticoTotal.innerText = 'Total';
productsGrid.appendChild(itemEstaticoTotal);
const itemEstaticoVaciar = document.createElement('a');
itemEstaticoVaciar.setAttribute('onclick', 'vaciarCarro()');
itemEstaticoVaciar.innerText = 'Limpiar';
productsGrid.appendChild(itemEstaticoVaciar);
const itemEstaticoVaciarImagen = document.createElement('img');
itemEstaticoVaciarImagen.setAttribute('src', "img/5.png");
itemEstaticoVaciarImagen.setAttribute('class', "h-10 w-10 object-contain");
itemEstaticoVaciar.appendChild(itemEstaticoVaciarImagen);
const listaDinamica = document.createElement('a');
productsGrid.appendChild(listaDinamica);

function conseguirTotalPrecio() {
	let cantidadPrecio = 0;
	for (let i = 0; i < localStorage.length; i++) {
			cantidadPrecio += parseInt(Object.values(localStorage)[i]);
	}

	return cantidadPrecio;
}

function botonAgregar(nombre, precio) {
	localStorage.setItem(nombre, precio);

	actualizarCarro();
}

function botonRemover(nombre) {
	localStorage.removeItem(nombre);

	actualizarCarro();
}

function actualizarCarro() {
	  listaDinamica.innerHTML = ''; 
		for (let i = 0; i < localStorage.length; i++) {
				const item = document.createElement('a');
				item.innerText = localStorage.key(i);
				item.setAttribute('onclick', 'botonRemover(localStorage.key(' + i + '))');
				listaDinamica.appendChild(item);
				const img = document.createElement('img');
				img.setAttribute('src', "img/4.png");
				img.setAttribute('class', "h-10 w-10 object-contain");
				item.appendChild(img);
	  }
		itemEstaticoTotal.innerText = '$' +  conseguirTotalPrecio() + ' | ' + localStorage.length + ' productos';
}

function vaciarCarro() {
	listaDinamica.innerHTML = "";
	localStorage.clear();
	itemEstaticoTotal.innerText = '$0 | 0 productos';
}

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

function openNav2() {
  document.getElementById("mySidenav2").style.display = "block";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.display = "none";
}

actualizarCarro();
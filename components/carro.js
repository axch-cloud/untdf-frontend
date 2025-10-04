const productsGrid = document.querySelector('#mySidenav2')
const itemEstaticoTitulo = document.createElement('a');
itemEstaticoTitulo.innerText = 'Carro';
productsGrid.appendChild(itemEstaticoTitulo);;
const itemEstaticoTotal = document.createElement('a');
itemEstaticoTotal.innerText = 'Total';
productsGrid.appendChild(itemEstaticoTotal);
const itemEstaticoVaciar = document.createElement('a');
itemEstaticoVaciar.setAttribute('onclick', 'vaciarCarro()');
itemEstaticoVaciar.innerText = 'Vaciar';
productsGrid.appendChild(itemEstaticoVaciar);
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

function botonRemover(nombre, precio) {
	localStorage.removeItem(nombre);

	actualizarCarro();
}

function actualizarCarro() {
	  listaDinamica.innerHTML = '';
		for (let i = 0; i < localStorage.length; i++) {
			  let producto = parseInt(Object.keys(localStorage)[i]);
				const item = document.createElement('a');
				item.innerText = Object.keys(localStorage)[i];
				listaDinamica.appendChild(item);
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
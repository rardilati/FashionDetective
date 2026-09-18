// console.log("Fashion detective está funcionando");

/*Prueba de que el botón de búsqueda funciona

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    console.log("🔎 El detective quiere buscar");

}); */


// ELEMENTOS DEL BUSCADOR


const searchButton = document.getElementById("searchButton");

const searchPanel = document.getElementById("searchPanel");

const closeSearch = document.getElementById("closeSearch");

const searchInput = document.getElementById("searchInput");

const performSearch = document.getElementById("performSearch");



// ABRIR BUSCADOR


searchButton.addEventListener("click", function () {

    searchPanel.classList.add("active");

    searchInput.focus();

});



// CERRAR BUSCADOR


closeSearch.addEventListener("click", function () {

    searchPanel.classList.remove("active");

});



// REALIZAR BÚSQUEDA


performSearch.addEventListener("click", function () {

    const searchText = searchInput.value;

    console.log("🔎 Búsqueda:", searchText);

});
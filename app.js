// console.log("Fashion detective está funcionando");

/*Prueba de que el botón de búsqueda funciona

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    console.log("El detective quiere buscar");

}); */


// ELEMENTOS DEL BUSCADOR


const searchButton = document.getElementById("searchButton");

const searchPanel = document.getElementById("searchPanel");

const closeSearch = document.getElementById("closeSearch");

const searchInput = document.getElementById("searchInput");

const performSearch = document.getElementById("performSearch");

const searchResults = document.getElementById("searchResults");


// DATOS DE BÚSQUEDA

const fashionData = [
    {
        nombre: "Kimono",
        tipo: "Prenda",
        pais: "Japón",
        descripcion: "Prenda tradicional japonesa que ha influido en la moda contemporánea."
    },

    {
        nombre: "Harajuku",
        tipo: "Cultura",
        pais: "Japón",
        descripcion: "Distrito de Tokio conocido por su moda urbana, estilos alternativos y cultura juvenil."
    },

    {
        nombre: "Hanbok",
        tipo: "Prenda",
        pais: "Corea del Sur",
        descripcion: "Traje tradicional coreano caracterizado por sus líneas, colores y silueta."
    },

    {
        nombre: "K-fashion",
        tipo: "Diseño",
        pais: "Corea del Sur",
        descripcion: "Escena de moda contemporánea coreana con gran presencia internacional."
    },

    {
        nombre: "Qipao",
        tipo: "Prenda",
        pais: "China",
        descripcion: "Vestido tradicional chino asociado especialmente con la moda de Shanghai."
    },

    {
        nombre: "Moda de Shanghai",
        tipo: "Cultura",
        pais: "China",
        descripcion: "Mezcla de tradición china, influencias occidentales y tendencias contemporáneas."
    },

    {
        nombre: "Alta costura",
        tipo: "Categoría",
        pais: "Francia",
        descripcion: "Moda artesanal caracterizada por la elaboración de prendas únicas y técnicas especializadas."
    },

    {
        nombre: "Haute Couture",
        tipo: "Diseño",
        pais: "Francia",
        descripcion: "Tradición francesa de creación de prendas de alta costura y fuerte componente artesanal."
    },

    {
        nombre: "Made in Italy",
        tipo: "Industria",
        pais: "Italia",
        descripcion: "Concepto asociado a la tradición italiana en diseño, confección, materiales y calidad."
    },

    {
        nombre: "Streetwear",
        tipo: "Tendencia",
        pais: "Estados Unidos",
        descripcion: "Estilo urbano que ha tenido una gran influencia en la moda contemporánea."
    }
]



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

    // Obtener el texto escrito por el usuario

    const searchText = searchInput.value.toLowerCase().trim();

    console.log("Búsqueda:", searchText);



    // BUSCAR EN NUESTROS DATOS

    const results = fashionData.filter(function (item) {

        return (
            item.nombre.toLowerCase().includes(searchText) ||
            item.tipo.toLowerCase().includes(searchText) ||
            item.pais.toLowerCase().includes(searchText)
        );
    });


    // LIMPIAR RESULTADOS ANTERIORES

    searchResults.innerHTML = "";



    // SI NO HAY RESULTADOS

    if (results.length === 0) {
        searchResults.innerHTML = `
        <p>
            No se encontraron resultados.
        </p>
    `;

        return;
    }

    // MOSTRAR RESULTADOS

    results.forEach(function (item) {

        searchResults.innerHTML += `
    <article class="search-result">

                <span class="search-result-type">
                    ${item.tipo}
                </span>

                <h3>
                    ${item.nombre}
                </h3>

                <p>
                    ${item.descripcion}
                </p>

                <small>
                    🌏 ${item.pais}
                </small>

            </article>

        `;
    });


});

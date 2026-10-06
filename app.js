// console.log("Fashion detective está funcionando");

/*Prueba de que el botón de búsqueda funciona

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    console.log("El detective quiere buscar");

}); */


// =========================================
// FASHION DETECTIVE
// JavaScript principal
// =========================================


// ELEMENTOS DEL BUSCADOR


const searchButton =
    document.getElementById("searchButton");

const searchPanel =
    document.getElementById("searchPanel");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const performSearch =
    document.getElementById("performSearch");

const searchResults =
    document.getElementById("searchResults");



// DATOS DE BÚSQUEDA

const fashionData = [

    {
        nombre: "Kimono",
        tipo: "Prenda",
        pais: "Japón",
        descripcion:
            "Prenda tradicional japonesa que ha influido en la moda contemporánea."
    },

    {
        nombre: "Harajuku",
        tipo: "Cultura",
        pais: "Japón",
        descripcion:
            "Distrito de Tokio conocido por su moda urbana, estilos alternativos y cultura juvenil."
    },

    {
        nombre: "Hanbok",
        tipo: "Prenda",
        pais: "Corea del Sur",
        descripcion:
            "Traje tradicional coreano caracterizado por sus líneas, colores y silueta."
    },

    {
        nombre: "K-fashion",
        tipo: "Diseño",
        pais: "Corea del Sur",
        descripcion:
            "Escena de moda contemporánea coreana con gran presencia internacional."
    },

    {
        nombre: "Qipao",
        tipo: "Prenda",
        pais: "China",
        descripcion:
            "Vestido tradicional chino asociado especialmente con la moda de Shanghai."
    },

    {
        nombre: "Moda de Shanghai",
        tipo: "Cultura",
        pais: "China",
        descripcion:
            "Mezcla de tradición china, influencias occidentales y tendencias contemporáneas."
    },

    {
        nombre: "Alta costura",
        tipo: "Categoría",
        pais: "Francia",
        descripcion:
            "Moda artesanal caracterizada por la elaboración de prendas únicas y técnicas especializadas."
    },

    {
        nombre: "Haute Couture",
        tipo: "Diseño",
        pais: "Francia",
        descripcion:
            "Tradición francesa de creación de prendas de alta costura y fuerte componente artesanal."
    },

    {
        nombre: "Made in Italy",
        tipo: "Industria",
        pais: "Italia",
        descripcion:
            "Concepto asociado a la tradición italiana en diseño, confección, materiales y calidad."
    },

    {
        nombre: "Streetwear",
        tipo: "Tendencia",
        pais: "Estados Unidos",
        descripcion:
            "Estilo urbano que ha tenido una gran influencia en la moda contemporánea."
    }

];


// ABRIR BUSCADOR


searchButton.addEventListener("click", function () {

    searchPanel.classList.add("active");

    searchInput.focus();

});


// CERRAR BUSCADOR

closeSearch.addEventListener("click", function () {

    searchPanel.classList.remove("active");

    searchInput.value = "";

    searchResults.innerHTML = "";

});


//REALIZAR BÚSQUEDA

performSearch.addEventListener("click", function () {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    console.log("🔎 Búsqueda:", searchText);


    const results =
        fashionData.filter(function (item) {

            return (

                item.nombre
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.tipo
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.pais
                    .toLowerCase()
                    .includes(searchText)

            );

        });


    searchResults.innerHTML = "";


    if (results.length === 0) {

        searchResults.innerHTML = `
            <p>
                🕵️ No se encontraron resultados.
            </p>
        `;

        return;
    }


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


// DATOS DE PELÍCULAS

const movies = [

    {
        titulo: "El diablo viste de Prada",

        año: 2006,

        pais: "Estados Unidos",

        genero: "Moda",

        descripcion:
            "Una joven comienza a trabajar como asistente de una poderosa editora de moda.",

        director: "David Frankel",

        vestuario:
            "Vestuario contemporáneo inspirado en la industria editorial de moda.",

        diseñadores: [
            "Patricia Field"
        ],

        prendas: [
            "Trajes",
            "Vestidos",
            "Abrigos",
            "Accesorios"
        ],

        marcas: [
            "Chanel",
            "Valentino",
            "Prada"
        ],

        textiles: [
            "Seda",
            "Lana",
            "Algodón"
        ]
    },


    {
        titulo: "Cruella",

        año: 2021,

        pais: "Estados Unidos",

        genero: "Moda",

        descripcion:
            "Una historia de identidad, diseño y ambición ambientada en el mundo de la moda.",

        director: "Craig Gillespie",

        vestuario:
            "Vestuario teatral y experimental construido alrededor de la identidad de Cruella.",

        diseñadores: [
            "Jenny Beavan"
        ],

        prendas: [
            "Vestidos",
            "Abrigos",
            "Trajes",
            "Accesorios"
        ],

        marcas: [
            "Casa de moda de la historia"
        ],

        textiles: [
            "Cuero",
            "Seda",
            "Tweed"
        ]
    },


    {
        titulo: "Confessions of a Shopaholic",

        año: 2009,

        pais: "Estados Unidos",

        genero: "Moda",

        descripcion:
            "Una periodista intenta abrirse camino mientras lidia con su pasión por la moda y las compras.",

        director: "P. J. Hogan",

        vestuario:
            "Moda urbana y accesorios utilizados para construir la personalidad de la protagonista.",

        diseñadores: [
            "Patricia Field"
        ],

        prendas: [
            "Vestidos",
            "Abrigos",
            "Zapatos",
            "Bolsos"
        ],

        marcas: [
            "Diseñadores y marcas de moda contemporánea"
        ],

        textiles: [
            "Lana",
            "Seda",
            "Algodón"
        ]
    }

];


// ELEMENTOS DE PELÍCULAS

const movieGrid =
    document.getElementById("movieGrid");



// ELEMENTOS DEL MODAL


const movieModal =
    document.getElementById("movieModal");

const movieModalContent =
    document.getElementById("movieModalContent");

const closeMovieModal =
    document.getElementById("closeMovieModal");



// MOSTRAR PELÍCULAS


movies.forEach(function (movie) {

    movieGrid.innerHTML += `

        <article class="movie-card">

            <div class="movie-image">
                🎬
            </div>


            <div class="movie-info">

                <span class="movie-type">
                    ${movie.genero}
                </span>


                <h3>
                    ${movie.titulo}
                </h3>


                <p>
                    ${movie.descripcion}
                </p>


                <small>
                    ${movie.año} · ${movie.pais}
                </small>


                <button
                    class="movie-button"
                    data-title="${movie.titulo}"
                >
                    🕵️ Investigar
                </button>

            </div>

        </article>

    `;

});


// BOTONES "INVESTIGAR"


const movieButtons =
    document.querySelectorAll(".movie-button");


movieButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        // OBTENER EL TÍTULO

        const movieTitle =
            button.dataset.title;


        // BUSCAR LA PELÍCULA

        const selectedMovie =
            movies.find(function (movie) {

                return movie.titulo === movieTitle;

            });

        // CREAR LA INVESTIGACIÓN

        movieModalContent.innerHTML = `

            <div class="movie-modal-header">

                <p class="eyebrow">
                    INVESTIGACIÓN
                </p>


                <h2>
                    ${selectedMovie.titulo}
                </h2>


                <p>
                    ${selectedMovie.descripcion}
                </p>

            </div>


            <div class="movie-modal-info">


                <div>

                    <strong>
                        Año
                    </strong>

                    <span>
                        ${selectedMovie.año}
                    </span>

                </div>


                <div>

                    <strong>
                        País
                    </strong>

                    <span>
                        ${selectedMovie.pais}
                    </span>

                </div>


                <div>

                    <strong>
                        Director
                    </strong>

                    <span>
                        ${selectedMovie.director}
                    </span>

                </div>


            </div>


            <div class="investigation-grid">


                <article>

                    <h3>
                        👗 Vestuario
                    </h3>

                    <p>
                        ${selectedMovie.vestuario}
                    </p>

                </article>


                <article>

                    <h3>
                        🎨 Diseñadores
                    </h3>

                    <p>
                        ${selectedMovie.diseñadores.join(", ")}
                    </p>

                </article>


                <article>

                    <h3>
                        👗 Prendas
                    </h3>

                    <p>
                        ${selectedMovie.prendas.join(", ")}
                    </p>

                </article>


                <article>

                    <h3>
                        🏛️ Marcas
                    </h3>

                    <p>
                        ${selectedMovie.marcas.join(", ")}
                    </p>

                </article>


                <article>

                    <h3>
                        🧵 Textiles
                    </h3>

                    <p>
                        ${selectedMovie.textiles.join(", ")}
                    </p>

                </article>


            </div>

        `;

        // ABRIR MODAL

        movieModal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});



// CERRAR MODAL

closeMovieModal.addEventListener("click", function () {

    movieModal.classList.remove("active");

    document.body.classList.remove("modal-open");

});


// CERRAR AL HACER CLIC FUERA

movieModal.addEventListener("click", function (event) {

    if (event.target === movieModal) {

        movieModal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }

});


// CERRAR CON LA TECLA ESC

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        movieModal.classList.contains("active")
    ) {

        movieModal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }

});
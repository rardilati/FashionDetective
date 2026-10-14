// console.log("Fashion detective está funcionando");

/*Prueba de que el botón de búsqueda funciona

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    console.log("El detective quiere buscar");

}); */


/* 

   FASHION DETECTIVE
   Buscador + Películas + Investigación

*/


/* 
    1. ELEMENTOS DEL BUSCADOR
 */

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const performSearch = document.getElementById("performSearch");
const searchResults = document.getElementById("searchResults");


/* 
   2. DATOS DEL BUSCADOR
*/

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


/* 
    3. ABRIR Y CERRAR EL BUSCADOR
 */

function openSearch() {
    if (!searchPanel) return;

    searchPanel.classList.add("active");

    if (searchInput) {
        searchInput.focus();
    }
}


function closeSearchPanel() {
    if (!searchPanel) return;

    searchPanel.classList.remove("active");

    // Vaciar el campo de búsqueda.
    if (searchInput) {
        searchInput.value = "";
    }

    // Eliminar los resultados anteriores.
    if (searchResults) {
        searchResults.innerHTML = "";
    }
}


if (searchButton) {
    searchButton.addEventListener("click", openSearch);
}


if (closeSearch) {
    closeSearch.addEventListener("click", closeSearchPanel);
}


/* 
    4. REALIZAR BÚSQUEDAS
 */

function runSearch() {
    if (!searchInput || !searchResults) return;

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    // Limpiar los resultados anteriores.
    searchResults.innerHTML = "";

    // No buscar si el campo está vacío.
    if (!searchText) {
        searchResults.innerHTML = `
            <p class="search-empty">
                Escribe una prenda, diseñador, país o tendencia.
            </p>
        `;

        return;
    }

    // Buscar coincidencias en nuestros datos.
    const results = fashionData.filter(function (item) {
        return (
            item.nombre.toLowerCase().includes(searchText) ||
            item.tipo.toLowerCase().includes(searchText) ||
            item.pais.toLowerCase().includes(searchText) ||
            item.descripcion.toLowerCase().includes(searchText)
        );
    });

    // Mostrar un mensaje si no hay coincidencias.
    if (results.length === 0) {
        searchResults.innerHTML = `
            <p class="search-empty">
                No se encontraron resultados para
                "${escapeHTML(searchText)}".
            </p>
        `;

        return;
    }

    // Mostrar cada resultado.
    results.forEach(function (item) {
        searchResults.insertAdjacentHTML(
            "beforeend",
            `
                <article class="search-result">

                    <span class="search-result-type">
                        ${escapeHTML(item.tipo)}
                    </span>

                    <h3>
                        ${escapeHTML(item.nombre)}
                    </h3>

                    <p>
                        ${escapeHTML(item.descripcion)}
                    </p>

                    <small>
                        🌏 ${escapeHTML(item.pais)}
                    </small>

                </article>
            `
        );
    });
}


// Botón de búsqueda.
if (performSearch) {
    performSearch.addEventListener("click", runSearch);
}


// También permite buscar pulsando Enter.
if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            runSearch();
        }
    });
}


/* 
    5. FUNCIÓN DE SEGURIDAD PARA EL HTML
 */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return characters[character];
    });
}


/* 
    6. DATOS DE LAS PELÍCULAS
 */

const movies = [
    {
        titulo: "El diablo viste de Prada",
        año: 2006,
        pais: "Estados Unidos",
        genero: "Moda y drama",
        descripcion:
            "Una joven comienza a trabajar como asistente de una poderosa editora de moda.",
        director: "David Frankel",
        vestuario:
            "Vestuario contemporáneo inspirado en la industria editorial y el lujo.",
        diseñadores: [
            "Patricia Field"
        ],
        prendas: [
            "Trajes",
            "Vestidos",
            "Abrigos",
            "Bolsos",
            "Zapatos"
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
        ],
        investigacion:
            "Analiza la evolución del estilo de Andy, la influencia de Miranda y el papel del vestuario en la construcción de la identidad profesional."
    },

    {
        titulo: "Cruella",
        año: 2021,
        pais: "Estados Unidos",
        genero: "Moda y comedia dramática",
        descripcion:
            "Una historia de identidad, diseño y ambición ambientada en el Londres de los años setenta.",
        director: "Craig Gillespie",
        vestuario:
            "Vestuario teatral, punk y experimental que refleja la transformación de Estella en Cruella.",
        diseñadores: [
            "Jenny Beavan"
        ],
        prendas: [
            "Vestidos de gala",
            "Abrigos",
            "Trajes",
            "Prendas de inspiración punk"
        ],
        marcas: [
            "La casa de moda de la Baronesa, dentro de la ficción"
        ],
        textiles: [
            "Cuero",
            "Tul",
            "Encaje",
            "Tejidos estructurados"
        ],
        investigacion:
            "Investiga el vestuario como herramienta narrativa, la rivalidad creativa y la relación entre moda, identidad y rebeldía."
    },

    {
        titulo: "Confessions of a Shopaholic",
        año: 2009,
        pais: "Estados Unidos",
        genero: "Comedia romántica",
        descripcion:
            "Una periodista apasionada por las compras intenta abrirse camino profesional mientras afronta sus deudas.",
        director: "P. J. Hogan",
        vestuario:
            "Estilismo urbano, accesorios llamativos y combinaciones de prendas que reflejan la personalidad de la protagonista.",
        diseñadores: [
            "Patricia Field"
        ],
        prendas: [
            "Vestidos",
            "Abrigos",
            "Faldas",
            "Bolsos",
            "Bufandas"
        ],
        marcas: [
            "Marcas de moda y accesorios presentes en la película"
        ],
        textiles: [
            "Lana",
            "Algodón",
            "Tejidos de punto",
            "Materiales sintéticos"
        ],
        investigacion:
            "Explora la relación entre moda, consumo, identidad personal y comunicación visual a través del vestuario."
    }
];


/* 
   7. GENERAR LAS TARJETAS DE PELÍCULAS
*/

const movieGrid = document.getElementById("movieGrid");


function renderMovies() {
    if (!movieGrid) {
        console.warn(
            'Fashion Detective: no se encuentra el elemento con id="movieGrid".'
        );

        return;
    }

    movieGrid.innerHTML = "";

    movies.forEach(function (movie, index) {
        movieGrid.insertAdjacentHTML(
            "beforeend",
            `
                <article class="movie-card">

                    <div class="movie-image">
                        🎬
                    </div>

                    <div class="movie-info">

                        <span class="movie-type">
                            ${escapeHTML(movie.genero)}
                        </span>

                        <h3>
                            ${escapeHTML(movie.titulo)}
                        </h3>

                        <p>
                            ${escapeHTML(movie.descripcion)}
                        </p>

                        <small>
                            ${movie.año} · ${escapeHTML(movie.pais)}
                        </small>

                        <button
                            class="movie-button"
                            type="button"
                            data-movie-index="${index}"
                        >
                            🕵️ Investigar
                        </button>

                    </div>

                </article>
            `
        );
    });
}


renderMovies();


/* 
   8. ELEMENTOS DEL MODAL DE INVESTIGACIÓN
*/

const movieModal = document.getElementById("movieModal");
const movieModalContent = document.getElementById("movieModalContent");
const closeMovieModal = document.getElementById("closeMovieModal");


/* 
   9. ABRIR LA INVESTIGACIÓN DE UNA PELÍCULA
*/

function openMovieInvestigation(movie) {
    if (!movieModal || !movieModalContent) {
        console.error(
            "No se encuentra el modal. Revisa los IDs de index.html."
        );

        return;
    }

    movieModalContent.innerHTML = `
        <div class="movie-modal-header">

            <p class="eyebrow">
                FASHION DETECTIVE · INVESTIGACIÓN
            </p>

            <h2>
                ${escapeHTML(movie.titulo)}
            </h2>

            <p>
                ${escapeHTML(movie.descripcion)}
            </p>

        </div>

        <div class="movie-modal-info">

            <div>
                <strong>Año</strong>
                <span>${movie.año}</span>
            </div>

            <div>
                <strong>País</strong>
                <span>${escapeHTML(movie.pais)}</span>
            </div>

            <div>
                <strong>Dirección</strong>
                <span>${escapeHTML(movie.director)}</span>
            </div>

        </div>

        <div class="investigation-grid">

            <article>
                <h3>👗 Vestuario</h3>
                <p>${escapeHTML(movie.vestuario)}</p>
            </article>

            <article>
                <h3>🎨 Diseñadores</h3>
                <p>${movie.diseñadores
                    .map(escapeHTML)
                    .join(", ")}</p>
            </article>

            <article>
                <h3>🧥 Prendas</h3>
                <p>${movie.prendas
                    .map(escapeHTML)
                    .join(", ")}</p>
            </article>

            <article>
                <h3>🏛️ Marcas y maisons</h3>
                <p>${movie.marcas
                    .map(escapeHTML)
                    .join(", ")}</p>
            </article>

            <article>
                <h3>🧵 Textiles</h3>
                <p>${movie.textiles
                    .map(escapeHTML)
                    .join(", ")}</p>
            </article>

            <article>
                <h3>🔎 Pistas de investigación</h3>
                <p>${escapeHTML(movie.investigacion)}</p>
            </article>

        </div>
    `;

    movieModal.classList.add("active");
    document.body.classList.add("modal-open");

    if (closeMovieModal) {
        closeMovieModal.focus();
    }
}


/* 
   10. DETECTAR QUÉ PELÍCULA SE INVESTIGA
*/

if (movieGrid) {
    movieGrid.addEventListener("click", function (event) {
        const button = event.target.closest(".movie-button");

        if (!button) return;

        const movieIndex = Number(button.dataset.movieIndex);
        const selectedMovie = movies[movieIndex];

        if (!selectedMovie) return;

        openMovieInvestigation(selectedMovie);
    });
}


/* 
    11. CERRAR EL MODAL
 */

function closeMovieInvestigation() {
    if (!movieModal) return;

    movieModal.classList.remove("active");
    document.body.classList.remove("modal-open");
}


if (closeMovieModal) {
    closeMovieModal.addEventListener(
        "click",
        closeMovieInvestigation
    );
}


// Cerrar al pulsar fuera de la ficha.
if (movieModal) {
    movieModal.addEventListener("click", function (event) {
        if (event.target === movieModal) {
            closeMovieInvestigation();
        }
    });
}


/* 
   12. CERRAR VENTANAS CON ESCAPE
*/

document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    // Cerrar el modal si está abierto.
    if (movieModal && movieModal.classList.contains("active")) {
        closeMovieInvestigation();
        return;
    }

    // Cerrar el buscador si está abierto.
    if (searchPanel && searchPanel.classList.contains("active")) {
        closeSearchPanel();
    }
});


/* 
    FIN DE FASHION DETECTIVE
 */

console.log("Fashion Detective está funcionando correctamente.");
console.log("Hola Mundo!");

// VARIABLES
const $carrito = document.querySelector("#carrito");
const $cursos = document.querySelector("#lista-cursos");
const $listaCursos = document.querySelector("#lista-carrito tbody");
const $vaciarCarrito = document.querySelector("#vaciar-carrito");

// LISTENERS
cargarEventListeners();
function cargarEventListeners() {
  $cursos.addEventListener("click", comprarCurso);
  $carrito.addEventListener("click", borrarCurso);
  $vaciarCarrito.addEventListener("click", vaciarCarrito);
}

// FUNCTIONS
function comprarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    leerDatosCurso(curso);
  }
}

function leerDatosCurso(curso) {
  const datosCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").innerText,
    precio: curso.querySelector(".precio span").innerText,
    id: curso.querySelector("a").getAttribute("data-id"),
  };

  agregarCarrito(datosCurso);
}

function agregarCarrito(curso) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100"/>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
  $listaCursos.appendChild(row);
}

function borrarCurso(e) {
  e.preventDefault;
  let curso;
  if (e.target.classList.contains("borrar-curso")) {
    e.target.parentElement.parentElement.remove();
  }
}

function vaciarCarrito() {
  while ($listaCursos.firstChild) {
    $listaCursos.removeChild($listaCursos.firstChild);
  }
}

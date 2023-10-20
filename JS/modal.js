const modalContenedor = document.querySelector(".modal-contenedor")
const abrirCarrito = document.getElementById("cesta-carrito")
const cerrarCarrito = document.getElementById("btn-cerrar-carrito")
const modalCarrito = document.querySelector(".modal-carrito")


abrirCarrito.addEventListener ("click", () => {
    modalContenedor.classList.toggle("modal-active")
})

cerrarCarrito.addEventListener ("click", () => {
    modalContenedor.classList.toggle("modal-active")
})

modalCarrito.addEventListener("click", (e) => {
    e.stopImmediatePropagation
    e.target.classList.contains('boton-eliminar') && eliminarProducto(e.target.value);

})

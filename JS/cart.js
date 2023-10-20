let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductos = document.querySelector(".productos");

contenedorProductos.addEventListener("click", (e) => {
    e.target.classList.contains('agregar') && comprobarCarrito(e.target.id)
});

const comprobarCarrito = (id) => {
    let productoEncontrado = carrito.find((el) => el.id === parseInt(id));

    if (productoEncontrado) {
        productoEncontrado.cantidad++;
        actualizarTotalesCarrito(carrito);
        mostrarProductosEnCarrito(carrito);
    } else {
        const nuevoProducto = productos.find((el) => el.id === parseInt(id));
        carrito.push({ ...nuevoProducto, cantidad: 1 });
        actualizarTotalesCarrito(carrito);
        mostrarProductosEnCarrito(carrito);
    }
};

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    mostarTotalesEnCarrito(totalCantidad, formatearPrecio(totalCompra));

    guardarCarritoStorage (carrito)
};

const mostarTotalesEnCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById("contador-carrito");
    const totalCarrito = document.getElementById("precioTotal");

    contadorCarrito.innerText = totalCantidad;
    totalCarrito.innerText = totalCompra;
};

const mostrarProductosEnCarrito = (carrito) => {
    const contain = document.getElementById("carrito-contenedor");
    contain.innerHTML = "";

    carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `<p>${producto.marca}</p>
                        <p>Precio:${formatearPrecio(producto.precio)}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button class="btn waves-effect waves-light boton-eliminar" value="${producto.id}">X</button>`;
        contain.appendChild(div);
    });
};

const eliminarProducto = (Idproducto) => {
    const localizarIndex = carrito.findIndex(producto => producto.id == Idproducto)
        if(carrito[localizarIndex].cantidad > 1) {
            carrito[localizarIndex].cantidad -= 1;
        } else {
            carrito.splice (localizarIndex, 1)
            }
    
    mostrarProductosEnCarrito (carrito)
    actualizarTotalesCarrito (carrito)
}

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const cargarCarrito = () => {
    localStorage.getItem("carrito") &&
        mostrarProductosEnCarrito (carrito); 
        actualizarTotalesCarrito(carrito);
} 


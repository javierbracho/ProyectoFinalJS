function formatearPrecio(precio) {
    return precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  }

let productos;

const mostrarProductos = () => {
    const main = document.querySelector(".productos");
    
    fetch ("./stock.json")
        .then(response => response.json())
        .then(data => {
            productos = data
            data.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("productos-card-" + producto.id);
                div.innerHTML += `
                    <img src="${producto.img}" class="card-img-top" alt="notebook">
                    <div class="card-body">
                        <h5 class="card-title">${producto.marca} ${producto.modelo}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p> Precio: ${formatearPrecio(producto.precio)} </p>
                        <a href="#" id=${producto.id} class="btn btn-primary agregar">Agregar al carrito</a>
                    </div>`;
                
                main.appendChild(div);
            });
    })
    
}


document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
})

document.addEventListener("DOMContentLoaded", () => {
    cargarCarrito()
})


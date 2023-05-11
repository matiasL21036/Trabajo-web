function agregarProducto() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").files[0];
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;

    // Crear un objeto producto con la información obtenida
    const producto = {
      nombre,
      imagen,
      cantidad,
      precio,
    };

    // Agregar el producto al arreglo de productos
    productos.push(producto);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";

    // Imprimir los productos en la página
    imprimirProductos();
  }

  function imprimirProductos() {
    // Obtener el div donde se imprimirán los productos
    const divProductos = document.getElementById("productos");

    // Limpiar el contenido actual del div
    divProductos.innerHTML = "";

    // Recorrer el arreglo de productos y crear un div para cada uno
    for     (let i = 0; i < productos.length; i++) {
  const producto = productos[i];

  // Crear el div del producto
  const divProducto = document.createElement("div");
  divProducto.classList.add("producto");

  // Agregar la imagen del producto
  const imgProducto = document.createElement("img");
  imgProducto.src = URL.createObjectURL(producto.imagen);
  divProducto.appendChild(imgProducto);

  // Agregar el nombre del producto
  const spanNombre = document.createElement("span");
  spanNombre.textContent = producto.nombre;
  divProducto.appendChild(spanNombre);

  // Agregar la cantidad del producto
  const spanCantidad = document.createElement("span");
  spanCantidad.textContent = producto.cantidad;
  divProducto.appendChild(spanCantidad);

  // Agregar el precio del producto
  const spanPrecio = document.createElement("span");
  spanPrecio.textContent = "$" + producto.precio;
  divProducto.appendChild(spanPrecio);

  // Agregar el div del producto al div de productos
  divProductos.appendChild(divProducto);
}
}

// Arreglo para almacenar los productos
const productos = [];

// Imprimir los productos en la página al cargar la página
imprimirProductos();
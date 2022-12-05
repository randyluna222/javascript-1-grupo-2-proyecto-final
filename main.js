let listaTenis = [];

const agregarProducto = (e) => {
  e.preventDefault();

  const nuevoProductoForm = document.getElementById("nuevoProductoForm");
  const elementos = [...nuevoProductoForm.elements];
  let dataProducto = {};

  elementos.forEach((item) => {
    if (item.name && item.name !== "enviar") {
      dataProducto[item.name] = item.value;
    }
  });

  listaTenis.push(dataProducto);
  nuevoProductoForm.reset();
  console.log(listaTenis);

  imprimirProductos(listaTenis);
};
/*________________________________________________IMPRIMIR_________________________________________________________*/

const imprimirProductos = (lista) => {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  lista.forEach((tenis) => {
    const contenedor = document.createElement("div");
    const nombreProducto = document.createElement("p");
    const precio = document.createElement("p");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const cantidad = document.createElement("p");
    const boton = document.createElement("button");
    boton.addEventListener("click", () => {
      eliminarTenis(tenis.nombre);
    });
    
    //TENIS
    nombreProducto.textContent = `Nombre del producto: ${tenis.nombre}`;
    precio.textContent = `Precio: $${tenis.precio}`;
    descripcion.textContent = `descripcion: ${tenis.descripcion}`;
    categoria.textContent = `Categoria: ${tenis.categoria}`;
    cantidad.textContent = `Cantidad: ${tenis.cantidad}`;
    boton.textContent = `Eliminar`;

    contenedor.append(
      nombreProducto,
      precio,
      descripcion,
      categoria,
      cantidad,
      boton
    );

    productList.appendChild(contenedor);
  });
};

/*________________________________________________BORRAR_________________________________________________________*/

const eliminarTenis = (productoNombre) => {
  listaTenis = listaTenis.filter((item) => {
    if (item.nombre !== productoNombre) {
      return tenis;
    }
  });

  imprimirProductos(listaTenis);
};

/*________________________________________________BUSCAR_________________________________________________________*/

const buscarTenis = (productoNombre) => {
  listaTenis = listaTenis.filter((item) => {
    if (item.nombre !== productoNombre) {
      return tenis;
    }
  });

  imprimirProductos(listaTenis);
};

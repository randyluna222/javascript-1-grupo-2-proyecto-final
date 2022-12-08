let listaTenis = [];

const agregarProducto = (e) => {
  e.preventDefault();

  const productoForm = document.getElementById("productoForm");
  const elementos = [...productoForm.elements];
  let dataProducto = {};

  elementos.forEach((item) => {
    if (item.name && item.name !== "enviar") {
      dataProducto[item.name] = item.value;
    }
  });

  listaTenis.push(dataProducto);
  productoForm.reset();
  console.log(listaTenis);

  imprimirProductos(listaTenis);
};

/*____________________________________________________IMPRIMIR________________________________________________*/

const imprimirProductos = (lista) => {
  const listaProducto = document.getElementById("listaProducto");
  listaProducto.innerHTML = "";

  lista.forEach((tenis) => {
    const contenedor = document.createElement("div");
    const nombretenis = document.createElement("h3");
    const precio = document.createElement("p");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const cantidad = document.createElement("p");
    const boton = document.createElement("button");
    boton.addEventListener("click", () => {
      eliminarTenis(tenis.nombre);
    });

    nombretenis.textContent = `Nombre tenis: ${tenis.nombre}`;
    precio.textContent = `Precio: $ ${tenis.precio}`;
    descripcion.textContent = `Descripcion:  ${tenis.descripcion}`;
    categoria.textContent = `Categoria:  ${tenis.categoria}`;
    cantidad.textContent = `Cantidad ${tenis.cantidad}`;
    boton.textContent = `Eliminar`;

    contenedor.append(
      nombretenis,
      precio,
      descripcion,
      categoria,
      cantidad,
      boton
    );

    listaProducto.appendChild(contenedor);
  });
};
/*____________________________________________________BORRAR________________________________________________*/

const eliminarTenis = (productoNombre) => {
  listaTenis = listaTenis.filter((tenis) => {
    if (tenis.name === productoNombre) {
      return tenis;
    }
  });

  imprimirProductos(listaTenis);
};

/*____________________________________________________SEARCH________________________________________________*/

const myList = document.querySelectorAll(".myList");

const form = document.querySelector("#miFormulario");
const input = document.querySelector("#name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  myArray.forEach((element) => {
    if (element.textContent === input.value) {
      console.log("encontrado");
    }
  });
});

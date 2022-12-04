let listaTenis = [];

const agregarProducto = (e) => {
  e.preventDefault();

  const nuevoProductoForm = document.getElementById('nuevoProductoForm');
  const elementos = [...nuevoProductoForm.elements];
  let dataProducto = {};

  function checkName(evt) { var charCode = evt.charCode; if (charCode != 0)
    { if (charCode < 97 || charCode > 122) 
       { evt.preventDefault(); alert("Por favor usa sólo letras minúsculas." + "\n" + "charCode: " + charCode + "\n" ); } 
   } 
}

  elementos.forEach((item) => {
    if (item.name && item.name !== 'enviar') {
      dataProducto[item.name] = item.value;
    }
  });

  listaTenis.push(dataProducto);
  nuevoProductoForm.reset();
  console.log(listaTenis);

  imprimirProductos(listaTenis);
};

const imprimirProductos = (lista) => {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  lista.forEach((tenis) => {
    const contenedor = document.createElement('div');
    const nombretenis  = document.createElement('h3');
    const precio = document.createElement('p'); 
    const descripcion = document.createElement('p');
    const categoria = document.createElement('p');
    const cantidad = document.createElement('p');
    const boton = document.createElement('button'); // <button onclick="eliminarTenis('celular')">aksdal</button>

    boton.addEventListener('click', () => {
      eliminarTenis(tenis.nombre);
    });

   
    nombretenis.textContent = `Nombre tenis: ${tenis.nombre}`;
    precio.textContent = `Precio: $ ${tenis.precio}`;
    descripcion.textContent = `Descripcion:  ${tenis.descripcion}`;
    categoria.textContent = `Categoria:  ${tenis.categoria}`;
    cantidad.textContent = `Cantidad ${tenis.cantidad}`;
    boton.textContent = `Eliminar`;

    contenedor.append(nombretenis, precio, descripcion, categoria, cantidad, boton);

    productList.appendChild(contenedor);
  });
}

const eliminarTenis = (productoNombre) => {
  listaTenis = listaTenis.filter((item) => {
    if(item.nombre !== productoNombre) {
      return tenis;
    }
  });

  imprimirProductos(listaTenis);
}



function checkName(evt) { var charCode = evt.charCode; if (charCode != 0)
     { if (charCode < 97 || charCode > 122) 
        { evt.preventDefault(); alert("Por favor usa sólo letras minúsculas." + "\n" + "charCode: " + charCode + "\n" ); } 
    } 
}
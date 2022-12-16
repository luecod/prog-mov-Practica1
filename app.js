const productos = [];
let indiceFila = -1
let estaModificando = false


function mostrar(pos) {
  // let _pro = document.getElementById("producto").value;
  // let _nom = document.getElementById("nombre").value;
  // let _can = document.getElementById("cantidad").value;
  // let _pre = document.getElementById("precio").value;

  if (estaModificando) {
    document.getElementById('myTable').remove
    let fila = "<tr><td>" + productos[pos].producto +
      "</td><td>" + productos[pos].nombre +
      "</td><td>" + productos[pos].cantidad +
      "</td><td>" + productos[pos].precio +
      "</td><td>" + `<button class="boton" id="botoncito" onclick="deleteRow(this)">Eliminar</button>` +
      "</td><td>" + `<button class="boton" id="botoncito" onclick="modificar(this)">Modificar</button>` + "</td></tr>";

    let btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("myTable").appendChild(btn);
  } else {
    let fila = "<tr><td>" + productos[pos].producto +
      "</td><td>" + productos[pos].nombre +
      "</td><td>" + productos[pos].cantidad +
      "</td><td>" + productos[pos].precio +
      "</td><td>" + `<button class="boton" id="botoncito" onclick="deleteRow(this)">Eliminar</button>` +
      "</td><td>" + `<button class="boton" id="botoncito" onclick="modificar(this)">Modificar</button>` + "</td></tr>";

    let btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("myTable").appendChild(btn);
  }
}

function agregar() {
  if (estaModificando) {
    const forma = document.forms['forma'];
    const producto = forma['producto'];
    const nombre = forma['nombre'];
    const cantidad = forma['cantidad'];
    const precio = forma['precio'];
    const product = new Producto(producto.value, nombre.value, cantidad.value, precio.value);
    productos[indiceFila] = product;
    // console.log(productos.length);
    mostrar();
    document.getElementById('forma').reset();

    estaModificando = false;
  } else {
    const forma = document.forms['forma'];
    const producto = forma['producto'];
    const nombre = forma['nombre'];
    const cantidad = forma['cantidad'];
    const precio = forma['precio'];
    const product = new Producto(producto.value, nombre.value, cantidad.value, precio.value);
    productos.push(product);
    // console.log(productos.length);
    mostrar(productos.length - 1);
    document.getElementById('forma').reset();
  }
}

function calcular() {
  let suma = 0;
  let subtotal = 0;
  for (let producto of productos) {
    if (producto.cantidad > 10) {
      suma += producto.precio * producto.cantidad * 0.8;
      subtotal += producto.precio * producto.cantidad;
    } else {
      suma += producto.precio * producto.cantidad
      subtotal += producto.precio * producto.cantidad;
    }
  }

  document.getElementById("total").value = suma;
  document.getElementById("subtotal").value = subtotal;
  // console.log(suma);
}

function deleteRow(r) {
  let row = r.parentNode.parentNode;
  let indice = row.rowIndex
  productos.splice(indice - 1, 1);
  console.log(productos.length);
  // Obtener la tabla en la que se encuentra la fila
  let table = row.parentNode;
  // Eliminar la fila
  table.removeChild(row);
}

function modificar(r
  ) {
  let row = r.parentNode.parentNode;
  indiceFila = row.rowIndex - 1;
  let producto = productos[indiceFila];
  document.getElementById("producto").value = producto.producto;
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("cantidad").value = producto.cantidad;
  document.getElementById("precio").value = producto.precio;
  estaModificando = true;
}
let productos = [];
let indiceFila = -1
let estaModificando = false

function limpiar () {
    productos = []
    document.getElementById("total").value = "";
    document.getElementById("subtotal").value = "";
    deleteAll()
}

function deleteAll() {
  // productos = []
  let filas = document.getElementById('tablaCuerpo')
  let tabla = document.getElementById('tabla')
  tabla.removeChild(filas)
  filas = document.createElement('tbody');
  filas.setAttribute('id', 'tablaCuerpo');
  document.getElementById('tabla').appendChild(filas)
}

function mostrarTodo(array) {
  let fila, btn
  deleteAll()
  for (let element of array) {
    fila = "<tr><td>" + element.producto +
      "</td><td>" + element.nombre +
      "</td><td>" + element.cantidad +
      "</td><td>" + element.precio +
      "</td><td>" + `<button class="boton" id="botoncito" onclick="deleteRow(this)">Eliminar</button>` +
      "</td><td>" + `<button class="boton" id="botoncito" onclick="modificar(this)">Modificar</button>` + "</td></tr>";
    btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablaCuerpo").appendChild(btn);
    document.getElementById('forma').reset();
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
    estaModificando = false;
  } else {
    const forma = document.forms['forma'];
    const producto = forma['producto'];
    const nombre = forma['nombre'];
    const cantidad = forma['cantidad'];
    const precio = forma['precio'];
    const product = new Producto(producto.value, nombre.value, cantidad.value, precio.value);
    productos.push(product);
  }
  mostrarTodo(productos)
  calcular()
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
  calcular()
}

function modificar(r) {
  let row = r.parentNode.parentNode;
  indiceFila = row.rowIndex - 1;
  let producto = productos[indiceFila];
  document.getElementById("producto").value = producto.producto;
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("cantidad").value = producto.cantidad;
  document.getElementById("precio").value = producto.precio;
  estaModificando = true;
}
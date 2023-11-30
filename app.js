
// Bienvenida 
alert("¡Bienvenido/a a la tienda de repuestos de Francisco Castro!");

// Nombre
let fullName = prompt("Ingrese su nombre completo");

// Saludo
alert(`Bienvenido/a ${fullName} a nuestra tienda`);

const prodTienda = [
    { producto: 1, precio: 1200000 },
    { producto: 2, precio: 1350000 },
    { producto: 3, precio: 2000000 },
    { producto: 4, precio: 285000 }
];

let infoProdTienda = "Información sobre la tienda:\n";

for (const prod of prodTienda) {
    infoProdTienda += `Producto: ${prod.producto} - Precio: ${prod.precio} pesos\n`;
}
alert(infoProdTienda);

// Funciones
function mostrarProdTienda() {
    let mensaje = "Productos Disponibles:\n";

    for (let i = 0; i < prodTienda.length; i++) {
    mensaje += `${prodTienda[i].producto} - ${prodTienda[i].precio} pesos\n`;
    } 

    alert(mensaje);
}

function encontrarProdPorNombre(producto) {
    const prodEncontrado = prodTienda.find(prod => prod.producto === producto);

    if (prodEncontrado) {
    return prodEncontrado;
    } else {
    return null;
    }
}

function filtrarProdPorPrecio(min, max) {
    const prodFiltrados = prodTienda.filter(prod => prod.precio >= min && prod.precio <= max);
    return prodFiltrados;
}

// Entrada de datos del cliente
const prodCliente = parseFloat(prompt("1: Horquilla, 2:Suspension, 3:Transmision, 4:Cuadro, Ingrese el numero del producto que desea comprar:"));

// Búsqueda de producto
const prodElegido = encontrarProdPorNombre(prodCliente);

// Mostrar resultados
if (prodElegido) {
    const precioProd = prodElegido.precio ;
    alert(`Has elegido un/una ${prodElegido.producto}. El costo es de ${precioProd.toFixed(2)} pesos.`);
} else {
    alert("Lo siento, no tenemos ese producto disponible.");
}

// Otra compra
let otraCompra = prompt("¿Desea comprar algo más? (S/N)").toLowerCase();

if (otraCompra === "S") {
  mostrarProdTienda(); // Mostrar productos disponibles

  // Entrada de datos del cliente para la nueva compra
    const prodClienteNuevo = parseFloat(prompt("Ingresa el nombre del producto deseado para tu nueva compra:"));

  // Búsqueda de pesa rusa para la nueva compra
    const prodElegidoNuevo = encontrarProdPorNombre(prodClienteNuevo);

  // Mostrar resultados para la nueva compra
    if (prodElegidoNuevo) {
    const precioNuevo = prodElegidoNuevo.precio ; 
    alert(`Has elegido un/una ${pesaElegidaNueva.peso}. El costo es de ${precioNuevo.toFixed(2)} pesos.`);
    alert("Gracias por comprar.");
    } else {
    alert("Lo siento, no tenemos ese producto disponible.");
    }
}   else {
    alert("Gracias por comprar.");
}
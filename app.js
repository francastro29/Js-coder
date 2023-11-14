let nombreComprador;
let primera__pantalla;
let producto;
let mensaje = 'ERROR';

let prod__susp = 0;
let prod__transm = 0;
let prod__horq = 0;
let prod__cuadro = 0;
let prod = 0;

function comprar__prod(nombreComprador) {

    let productos_tienda;
    let suspension = '1';
    let transmision = '2';
    let horquilla = '3';
    let cuadro = '4';
    let salir = 'X';


    do {
        productos_tienda = prompt(`${nombreComprador}, Bienvenido a la tienda de repuestos de Francisco` + '\n' +
            '¿Que producto desea comprar?' + '\n' +
            '1) Suspension' + '\n' +
            '2) Transmision' + '\n' +
            '3) Horquilla' + '\n' +
            '4) Cuadro' + '\n' +
            '\n' +
            'Para salir presione X');

        if (productos_tienda !== suspension && productos_tienda !== transmision && productos_tienda !== horquilla && productos_tienda !== cuadro && productos_tienda !== salir) {

            alert('No existe');

        } else {

            if (productos_tienda !== 'X') {
                producto = productos_tienda;
                prod++;

                switch (producto) {

                    case suspension:
                        if (prod__susp == 0) {
                            alert(`${nombreComprador} agregaste este producto a tu carrito`);
                        } else {
                            alert(`${nombreComprador} agregaste ${prod__susp} mas a tu carrito`);
                        }

                        prod__susp++;

                        return comprar__prod (nombreComprador);

                    case transmision:
                        if (prod__transm == 0) {
                            alert(`${nombreComprador} agregaste este producto a tu carrito`);
                        } else {
                            alert(`${nombreComprador} agregaste ${prod__transm} mas a tu carrito`);
                        }

                        prod__transm++;

                        return comprar__prod (nombreComprador);

                    case horquilla:
                        if (prod__horq == 0) {
                            alert(`${nombreComprador} agregaste este producto a tu carrito`);
                        } else {
                            alert(`${nombreComprador} agregaste ${prod__horq} mas a tu carrito`);
                        }

                        prod__horq++;

                        return comprar__prod (nombreComprador);

                    case cuadro:
                        if (prod__cuadro == 0) {
                            alert(`${nombreComprador} agregaste este producto a tu carrito`);
                        } else {
                            alert(`${nombreComprador} agregaste ${prod__cuadro} mas a tu carrito`);
                        }

                        prod__cuadro++;

                        return comprar__prod (nombreComprador);

                    default:
                        alert('Esta opcion no existe');

                        return comprar__prod (nombreComprador);

                }

            }

        }  

    } while (productos_tienda !== 'X');

    alert(`${nombreComprador} agregaste ${prod} productos a tu carrito ` + '\n' + 'Gracias!');

}

do {
    primera__pantalla = prompt('Hola! Bienvenido a nuestra tienda, ¿Desea comprar un producto?? S/N');

    if (primera__pantalla !== 'N') {

        nombreComprador = prompt('Ingrese su nombre: ');

        if (typeof nombreComprador !== 'string') {
            alert('El nombre no es valido!')
            nombreComprador = prompt('Ingrese su nombre: ');
        } else {
            comprar__prod(nombreComprador);
            
        }

    }else {
        alert ('Hasta pronto!');
    }

} while (primera__pantalla !== 'N');

alert('Gracias por visitar nuestra tienda')
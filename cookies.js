function crearCookie(nombre, valor, duracion) {
    //Esta variable recupera la fecha actual desde el navegador
    var fecha = new Date();
    //Calculamos la nueva fecha en función de la duración o periodo de validez que tiene nuestra cookie
    fecha.setDate(fecha.getDate() + duracion);
    /*En este caso establecemos una fecha de caducidad de la cookie utilizando expires la fecha se calcula contando 7 dias desde la fecha actual
    tambien es posible establecer un tiempo de caducidad en segundos con max-age
    encodeURIComponent recupera la información que pasamos a la función. En nuestro caso nombre de la cookie y valor*/
    document.cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor) + "; expires=" + fecha + "path=/;";
    var miCookie = document.cookie;
    return miCookie;
}
//Si el usuario acepta creamos las cookies
if (window.confirm("Acepta las cookies")) {
    let leerCookie = crearCookie("nombre", "Juan", 7);
    console.log(leerCookie);
}

function abrirNuevaVentana(url, nombre) {
    if (window.confirm("Indica si quieres abrir una nueva ventana para el buscador de Google")) {
        window.open(url, nombre, "_blank");//Los parametros de la función los pasaremos desde el documento HTML
    } else {
        alert("Has rechazado abrir una nueva ventana");
    }
}

function obtenerParametrosUrl() {
    /*URLSearchParams crea un objeto iterativo utilizando los parametros pasados como consulta a URL.
    En este caso location.search obtiene los parametros de la consulta de la página actual*/
    let miConsulta = new URLSearchParams(location.search);
    console.log(miConsulta);
    //Obtenemos los valores correspondientes a las claves nombre y centro en caso de que esa información este contenida en los parámetros de la URL
    const name = miConsulta.get('nombre');
    const centro = miConsulta.get('centro');
    console.log("El nombre de la consulta es " + name + ", el centro es " + centro);
}

/*Cambiar color de fondo
Utilizamos el array hexadecimal para almacenar los 16 elementos del sistema nunérico hexadecimal*/
const hexadecimal = ["0", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
//Esta variable almacena el color en formato hexadecimal
var color = "#";

//Función que genera un color aleatorio en formato hexadecimal
function colorHexRandom() {
    /*Cualquier color en formato hexadecimal cuenta con el caracter # y 6 elementos del sistema numérico hexadecimal
    Para generar los elementos del sistema numérico hexadecimal lo haremos de forma aleatoria
    repetiendo el proceso un total de 6 veces generamos numeros aleatorios del 1 al 15,
    puesto que los numeros que genera la función random pueden ser decimales aplicamos la función floor para conseguir números enteros
    el número generado aleatoriamente se pasa como indice para obtener el caracter (variable charHex) correspondiente del array hexadecimal
    y ese valor se suma a la cadena que almacena la variable color */
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        let charHex = hexadecimal[index];
        color += charHex;
    }
    return color;
}

function colorDeFondo() {
    /*La variable body almacena el elemento que corresponde al id body dentro del documento HTML
    a este elemento se le aplicará un color aleatorio llamando a la función colorHexRandom()*/
    var nuevoColor = colorHexRandom()
    document.getElementById('body').style.backgroundColor = nuevoColor;
    alert("Se cambia el color de fondo. Nuevo color de fondo " + nuevoColor);
}

function cambiarColorDeFondo() {
    /*Devuelve la variable color al estado de partida cada que vez que hacemos click
    sirve para que cada vez que el usuario haga click pueda cambiar el color de fondo*/
    color = "#";
    //Variable boton almacena el elemento mybutton del documento HTML
    let boton = document.getElementById('mybutton');
    //Se añade un listener para que cada que vez que la variable buton registre un click cambie el color de fondo
    boton.addEventListener("click", colorDeFondo());
}

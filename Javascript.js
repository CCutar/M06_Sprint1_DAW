// Declaración de una variable 'x' con un valor numérico
var x = 2;

// Declaración de una variable 'y' con un valor de cadena de texto
var y = "2";

// Comprobación de igualdad estricta (valor y tipo) entre 'x' e 'y'
if (x === y) {
    alert("SON IGUALES"); // Esta alerta no se ejecutará debido a que 'x' es un número y 'y' es una cadena de texto.
}

// Declaración de una función llamada 'holaMon'
function holaMon() {
    console.log("Funció"); // Imprime "Funció" en la consola si la función se llama.
}

// Declaración de un arreglo vacío llamado 'nombres'
let nombres = [];

// Declaración de una función llamada 'paramsFunction'
function paramsFunction() {
    // Agrega el valor del elemento con el id "name" a la matriz 'nombres'
    nombres.push(document.getElementById("name").value);
    
    // Actualiza el contenido del elemento con el id "contador" con la longitud de la matriz 'nombres'
    document.getElementById("contador").innerText = nombres.length;
}

// Declaración de una función llamada 'view'
function view() {
    var html = "<ul>"; // Inicializa una variable 'html' con el comienzo de una lista no ordenada en HTML
    
    // Recorre la matriz 'nombres' y construye una lista de elementos
    for (var i = 0; i < nombres.length; i++) {
        // Agrega cada nombre y un botón "delete" que, cuando se hace clic, muestra un alert con el índice
        html += "<li>" + nombres[i] + "<button onclick='alert(" + i + ")'>delete</button></li>";
    }
    
    html += "</ul>"; // Cierra la lista
    
    // Actualiza el contenido del elemento con el id "dades" con la lista construida
    document.getElementById("dades").innerHTML = html;
}

// Elimina los datos de la matriz 'nombres' en la posición 'index' y actualiza la vista y el contador
function deleteDades(index) {
    nombres.splice(index, 1);
    view();
    paramsFunction();
}

// Muestra el tipo de 'x' en la consola (debería imprimir 'number')
console.log(typeof x);

// Muestra el tipo de la cadena de texto "y" en la consola (debería imprimir 'string')
console.log(typeof "y");

// Imprime "Hola" en la consola
console.log("Hola");

// Imprime un mensaje de error en la consola
console.error("Mierdoooo");

// Imprime un mensaje de advertencia en la consola
console.warn("WARNING");

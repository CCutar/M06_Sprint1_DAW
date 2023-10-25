// Llama a la función hiddenAll() para ocultar todos los elementos div con identificadores 1, 2 y 3.
// Luego, llama a la función show("1") para mostrar el elemento con el identificador "1".
hiddenAll();
show("1");

// Define una función llamada show que toma un argumento id.
function show(id){
    
    // Llama a hiddenAll() para ocultar todos los elementos div con identificadores 1, 2 y 3.
    hiddenAll();

    // Obtén el elemento con el id especificado y cambia su estilo para mostrarlo.
    document.getElementById(id).style = "display: block";
}

// Define una función llamada hiddenAll.
function hiddenAll(){

   // Oculta los elementos div con los identificadores 1, 2 y 3 cambiando su estilo para que no se muestren.
   document.getElementById(1).style = "display: none";
   document.getElementById(2).style = "display: none";
   document.getElementById(3).style = "display: none";
}



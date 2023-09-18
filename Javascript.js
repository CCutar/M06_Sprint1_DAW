var x = 2;
var y ="2";

if (x === y){
    alert("SON IGUALES")
}

function holaMon(){
    console.log("Funció")
}

//crear array
let nombres = []; 

function paramsFunction(){
    //guardar els valors
    nombres.push(document.getElementById("name").value);
    //actualizar el contador
    document.getElementById("contador").innerText = nombres.length;
}

function view(){
    //nombres.forEach((element) => console.log(element));
    var html = "<ul>";
    for(var i = 0; i<nombres.length;i++){
        html += "<li>" +nombres[i] + "<button onclick = 'alert("+i+")'>delete</button></li>";
    }
    html += "</ul>"
    document.getElementById("dades").innerHTML = html;
}

function deleteDades(index){
    nombres.splice(index, 1);
    view();
    paramsFunction();
}

console.log (typeof x);
console.log (typeof "y");

console.log("Hola")
console.error("Mierdoooo")
console.warn("WARNING")
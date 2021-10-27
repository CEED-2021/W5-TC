let cero = [" ─ ", "| |", " ", "| |", " ─ "];
let uno = [" ", " |", " ", " |", " "];
let dos = [" ─ ", " |", " ─ ", "| ", " ─ "];
let tres = [" ─ ", " |", " ─ ", " |", " ─ "];
let cuatro = [" ", "| |", " ─ ", " |", " "];
let cinco = [" ─ ", "| ", " ─ ", " |", " ─ "];
let seis = [" ─ ", "| ", " ─ ", "| |", " ─ "];
let siete = [" ─ ", " |", " ", " |", " "];
let ocho = [" ─ ", "| |", " ─ ", "| |", " ─ "];
let nueve = [" ─ ", "| |", " ─ ", " |", " ─ "];

let numero = 123456789;

console.log("El número a imprimir es: " + numero);

let numeroTexto = numero + "";
let numeros = [];

for (let n = 0; n < numeroTexto.length; n++) {
    switch (numeroTexto.charAt(n)) {
        case "0":
            numeros.push(cero);
            break;
        case "1":
            numeros.push(uno);
            break;
        case "2":
            numeros.push(dos);
            break;
        case "3":
            numeros.push(tres);
            break;
        case "4":
            numeros.push(cuatro);
            break;
        case "5":
            numeros.push(cinco);
            break;
        case "6":
            numeros.push(seis);
            break;
        case "7":
            numeros.push(siete);
            break;
        case "8":
            numeros.push(ocho);
            break;
        case "9":
            numeros.push(nueve);
            break;
    }
}
let linea1 = "";
let linea2 = "";
let linea3 = "";
let linea4 = "";
let linea5 = "";
for (let i = 0; i < 5; i++) {
    linea1 += numeros[i][0] + " "; 
    linea2 += numeros[i][1] + " "; 
    linea3 += numeros[i][2] + " "; 
    linea4 += numeros[i][3] + " "; 
    linea5 += numeros[i][4] + " ";
}

console.log(linea1);
console.log(linea2);
console.log(linea3);
console.log(linea4);
console.log(linea5);
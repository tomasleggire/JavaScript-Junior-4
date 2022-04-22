////////////////////////////////////////////Metodos de Cadenas//////////////////////////////////////

//concat() junta 2 o mas cadenas y retorna una nueva
                                                                      /*
let cadena = "cadena de prueba";
let cadena2 = " Hola";

resultado = cadena.concat(cadena2);
document.write(resultado);

//.startWith() / .endsWith(): si la cadena empieza o termina con los caracteres de otra cadena, devuelve true, y sino devuelve false
                                                                
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);
document.write(resultado);
                                                                    
// .includes() : si una cadena se puede encontrar en otra cadena, devuelve true, sino false.

let cadena = "cadena de prueba";
let cadena2 = "cadena p";

resultado = cadena.includes(cadena2);
document.write(resultado);
                                                                      
//.indexOf(): igual que includes pero nos devuleve la posicion de donde empieza la cadena

let cadena = "cadena de prueba";
let cadena2 = "";

resultado = cadena.indexOf("prueba");
document.write(resultado);
                                                                    
//.lastIndexOf(): igual que indexOf pero de todas las coincidencias nos devuelve la ultima posicion

let cadena = "cadena de prueba prueba prueba prueba prueba prueba";
let cadena2 = "";

resultado = cadena.lastIndexOf("prueba");
document.write(resultado);
                                                                 
//.padStart(num,"") : nos llena al principio de la cadena lo que le pidamos. Num es el numero total que queremos que tenga la cadena y "" es con que queremos que la llene
//.padEnd(num,"") : lo mismo pero los coloca al final

let cadena = "abc";

resultado = cadena.padStart(6,"x");
document.write(resultado);
                                                                   
//.repeat(): devuelve la misma cadena, las veces que digamos

let cadena = "abc ";

resultado = cadena.repeat(3);
document.write(resultado);
                                                  

//Otros metodos:

//.split(): nos divide la cadena como le pidamos

let cadena = "Hola como estas";

resultado = cadena.split("como");
document.write(resultado);
                                                             
//.substring(): nos recorta el string como le pidamos. Num1 donde empieza(inluido), y Num2 donde temrmina(no incluido)

let cadena = "ABCDEFG";

resultado = cadena.substring(1,4);
document.write(resultado);

//.toLowerCase() : cambia todo  a minuscula
//.toUpperCase() : cambia todo  a mayuscula
                                                                          
//.toString() : transformar a string un dato

let cadena = ["pedro", "matias"];

resultado = cadena.toString();
document.write(resultado[0]);
                                                             
//.trim() : elimina los espacios en blanco al principio y al final de una cadena

let cadena = "  pedro  ";

resultado = cadena.trim();
document.write(resultado.length);

//.trimEnd() : elimina los espacio en blanco del final
//.trimStart() : elimina los espacio en blanco del principio

                                                           
                                                  

////////////////////////////////////Metodos de Arrays///////////////////////////////////////////

--------------------------METODOS TRANSFORMADORES---------------------------------------------
Modifican el array, no es que crean uno nuevo. Modifican el array ya existente


//.pop() : elimina el ultimo elemento del array y lo muestra, y el array ya no lo tiene mas ese elemento

let nombres = ["pedro","maria","jose"];

document.write(nombres + "<br>");
let resultado = nombres.pop();

document.write(resultado + "<br>");

document.write(nombres);
                                                                   
//.shift() : igual que .pop() pero elemina y muestra el primer elemento del array

//.push() : agrega un elemento al final del array y nos devuelve la cantidad de elmentos que hay en el array

let nombres = ["pedro","maria","jose"];

document.write(nombres + "<br>");

let resultado = nombres.push("leyi","juan");

document.write(nombres + "<br>");

document.write(resultado);
                                                                  
//.reverse() : invierte el orden de los elementos de una array

//.unshift() : lo opuesto a .shift() , es decir, agrega elementos al principio del array

let numeros = [3,4,5];

document.write(numeros + "<br>");

numeros.unshift(0,1,2);

document.write(numeros);
                                                                           
//.sort() : ordena los elementos del array de manera lexico grafico, es decir alfabeticamente y si son numeros de menor a mayor

//.splice() : cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// el primer parametro es donde arranca y el segundo parametro es cuantos elementos elimina (incluido el elemento donde arranca)
// y si quiero agregar elementos, los defino a partir del tercer parametro

let numeros = [1,2,3,4,5];

document.write(numeros + "<br>");

numeros.splice(1,3,"juan");

document.write(numeros);
                                                                     
//------------------------------------METODOS ACCESORES---------------------------------------
//-No se modifica el array original, sino que me crea uno nuevo en la variable que definamos el metodo

//.join() : nos transforma el nuevo array en una cadena de texto (string) pero lo podemos modificar poniendo en los () lo que querramos que se agrege en el medio de cada elemento

let nombres = ["pedro","maria","jose","leyi","pelado"];

document.write(nombres + "<br>");

let resultado = nombres.join(" -- ");
//como que reemplza las comas por lo que pongamos en los ()
document.write(resultado);
                                                                      
//.slice() : devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
// basicamente nos recorta los elementos del array como querramos, 1er parametro donde empieza(includio) y 2do parametro donde termina(no incluido)

let nombres = ["pedro","maria","jose","leyi","pelado","juan"];

document.write(nombres + "<br>");

let resultado = nombres.slice(1,4);

document.write(resultado);
                                                                                 
//Metodos ya vistos en cadenas: .toString() / .indexOf() / .lastIndexOf() / .includes()
//Funcionan igual que en los strings pero verifican por el elemento entero, es decir no encontraria la letra "p" en "pelado"

//-------------------------------METODOS DE REPETICION----------------------------------------

//.filter() : recibe como parametro una funcion y en cada vuelta toma como parametro un elemento del array del primero al ultimo


let nombres = ["pedro","maria","jose","leyi","pelado","juan"];

nombres.filter(nombre => document.write(nombre + " leggire", "<br>"));

// ademas puede devolver elementos que cumplan con una condicion:
resultado = nombres.filter(nombre => nombre.length > 4);

document.write(resultado);

//.forEach() : igual que .filter() pero no puede devovler elementos que cumplan una funcion





                                                       








///////////////////////////////////OBJETO MATH////////////////////////////////////////////////

//Math.sqrt() : devulve la raiz cuadrada posivita de un numero
//Math.cbrt() : devuelve la raiz cubica de un numero

let numero = Math.sqrt(25);

document.write(numero);
                                                      
//Math.max() : opera exclusivamente numeros y me devuelve el mas grande

let numero = Math.max(25,34,44,667,233,1,43,56);

document.write(numero);

//Math.min() : igual que max pero devuelve el numero mas chico
                                                                      
//Math.random() : devuelve un numero aleatorio entre 0 y 1, nunca llega a 0 y nunca llega a 1

let numero = Math.random();

document.write(numero);
                                                                 
//Si quiero aumentar el rango del pick random se hace asi:
//Math.round(numero) para redondear al valor mas cercano y que no salgan decimales

let numero = Math.random()*100;
numero = Math.round(numero);

document.write(numero);
                                                                    
//Math.floor() : si no es un numero entero lo redondea para abajo


let numero = Math.floor(9.9999);

document.write(numero);

//Math.fround() : ??¿¿
                                                           
//Math.trunc() : parecido a round pero elemina los decimales en vez de redondear

let numero = Math.trunc(8.9999);

document.write(numero);
                                                                 
//PROBLEMA 1:

class Calculadora{
    constructor(){
    }
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num,exp){
    return num**exp
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar?");
let operacion = prompt("1: sumar, 2:restar, 3:dividir, 4:multiplicar, 5:potenciacion, 6:raiz cuadrada, 7:raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 5) {
    let numero1 = prompt("Numero para potenciar");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 6) {
    let numero1 = prompt("Numero para raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 7) {
    let numero1 = prompt("Numero para raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("No se ha encontrado la operacion");
}
                                                                    

                 
//PROBLEMA 2:

const obtenetInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","pepito","juan"],
        logica: ["Rodriguez","pedro","pepito","cofla","maria","pepito"],
        quimica: ["Hernandez","pedro","pepito","cofla","maria","pepito"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{

    let informacion = obtenetInformacion(materia);

if (informacion !== false) {
    let profesor = obtenetInformacion(materia)[0][0];
    alumnos = obtenetInformacion(materia)[0];
    alumnos.shift();
    document.write(`El profesor de ${informacion[1]} es: ${profesor}<br>
    Los alumnos son: ${alumnos}<br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenetInformacion();
    let clasesPresentes = [];
    let cantitadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)) {
            cantitadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `${alumno} esta en ${cantitadTotal} clases<br>
    Esta cursando las clases: ${clasesPresentes}<br><br>
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("maria"));


                                                              */

//PROBLEMA 3:

let materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","pepito","juan"],
        logica: ["Rodriguez","pedro","pepito","cofla","maria","pepito"],
        quimica: ["Hernandez","pedro","pepito","cofla","maria","pepito"]
    }

const inscribir =(alumno,materia)=> {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`);
    } else {
        personas.push(alumno);
        if (materias == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias[`programacion`],
                logica: materias[`logica`],
                quimica: materias[`quimica`]
            }
        }
        else if (materias == "programacion") {
            materias = {
                fisica: materias[`fisica`],
                programacion: personas,
                logica: materias[`logica`],
                quimica: materias[`quimica`]
            }
        }
        else if (materias == "logica") {
            materias = {
                fisica: materias[`fisica`],
                programacion: materias[`programacion`],
                logica: personas,
                quimica: materias[`quimica`]
            }
        }
        else if (materias == "quimica") {
            materias = {
                fisica: materias[`fisica`],
                programacion: materias[`programacion`],
                logica: materias[`logica`],
                quimica: personas
            }
        }
        document.write(`Felicidades ${alumno}, te has inscrito a ${materia} correctamente`);
    }
}

inscribir("pedrito","fisica");

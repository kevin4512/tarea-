//arreglos(Arrays)

let varios =[1,"Juan","Bogota",20.45,true];
//en consola el tamaño del arreglo
console.log(varios.length);
// accede solo al elemento que se requiere en este ejemplo seria el numero 1
console.log(varios[0]);
//agrega un solo valor y lo agrega al final del vector 
varios.push(30);
console.log(varios);
//sacar un elemento del arreglo(el ultimo)
varios.pop();
let enteros = [1,2,3,4,5,7,9];
//concatenar con varios y se agrega al final de el vector varios
let concat = varios.concat(enteros)
console.log(concat);
//agregar al inicio 
let inicio = concat.unshift("inicio")
console.log(inicio)
//quitar el primer elemento
//unshift es al inicio del vector
inicio = concat.shift();

const arregloUno = inicio;

// produce error,no se puede modificar la cantidad de elementos
//arregloUno.push(1);

for(i=0;i<varios.length; i++){
    console.log(varios[i]);
}
//primer metodo para arreglos
varios.forEach(Elemento=>{
    console.log(Elemento);
});

//.reduce()
let numeros1 = [100,300,2,5,10];

let resultado = numeros.reduce((acumulador,ValorActual)=>{
    return acumulador+ValorActual;
});
console.log(resultado);

//.filter()
let filtrado = numeros.filter( numero => {
    return numero>10;
});
console.log(filtrado)

let paises =["Colombia","Usa","Brazil"]
//buscar que hace starstswith
let filtered = paises.filter(pais=>{
    return pais.startsWith("C")
})
console.log(filtered);

//.map()
//buscar que hace map
const saludarPais = paises.map( country =>{
    return "Bienvenidos pasajeros de "+ country;
}) 
console.log(saludarPais);

//crear arreglos usando funciones tipo flecha 
//usaar metodos de arreglos vistos y mostrar resultados(pasar cada arreglo minimo un metodo)
//siempre usando callbackfn




const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((numero) => {
    return numero * numero;
});
console.log(cuadrados); 


const edades = [18, 22, 16, 14, 30, 25];
const mayoresDeEdad = edades.filter((edad) => {
    return edad >= 18;
});
console.log(mayoresDeEdad); 
const precios = [200, 150, 50, 100];
const precioMenorA100 = precios.find((precio) => {
    return precio < 100;
});
console.log(precioMenorA100); 

const nombres = ['Ana', 'Luis', 'Carlos', 'Marta'];
nombres.forEach((nombre) => {
    console.log(`¡Hola ${nombre}!`);
});


const numeros2 = [1, 2, 3, 4, 5];
const suma = numeros2.reduce((acumulado, numero) => {
    return acumulado + numero;
}, 0);
console.log(suma); 


const temperaturas = [22, 28, 31, 18, 19, 21];
const hayCalor = temperaturas.some((temperatura) => {
    return temperatura > 30;
});
console.log(hayCalor); 


const calificaciones = [8, 9, 10, 8, 7, 9];
const todosAprobados = calificaciones.every((calificacion) => {
    return calificacion >= 7;
});
console.log(todosAprobados); // true


const frutas = ['Manzana', 'Pera', 'Banana', 'Durazno'];
const frutasOrdenadas = frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutasOrdenadas); 
const letras = ['a', 'b', 'c', 'd', 'e'];
const subConjunto = letras.slice(1, 4); 
console.log(subConjunto); 


let animales = ['perro', 'gato'];
const agregarAnimal = (animal) => {
    animales.push(animal);
};
agregarAnimal('caballo');
console.log(animales); 



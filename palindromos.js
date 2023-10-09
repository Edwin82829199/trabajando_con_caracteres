const palabra =prompt("ingresa tu palabra: "); 

const palabraInvertida = palabra.split('').reverse().join('');

if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
    console.log(`${palabra} es un palíndromo.`);
} else {
    console.log(`${palabra} no es un palíndromo.`);
}

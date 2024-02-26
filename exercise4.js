// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
// Res:
console.log('Resultado1: ', avengers1[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
// Res:
avengers2[0] = 'IRONMAN';
console.log('Resultado2: ', avengers2[0]);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
avengers3.length = 4;
console.log('Resultado3:', avengers3.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters1_4 = ['Rick', 'Beth', 'Jerry'];
rickAndMortyCharacters1_4.push('Morty');
rickAndMortyCharacters1_4.push('Summer');
console.log('Resultado4: ', rickAndMortyCharacters1_4);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1_5 = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez'];
rickAndMortyCharacters1_5.pop();
console.log('Resultado5, primer elemento: ', rickAndMortyCharacters1_5[0]);
console.log('Resultado5, último elemento: ', rickAndMortyCharacters1_5[rickAndMortyCharacters1_5.length - 1]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters1_6 = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez'];
rickAndMortyCharacters1_6.splice(1, 1);
console.log('Resultado6: ', rickAndMortyCharacters1_6);

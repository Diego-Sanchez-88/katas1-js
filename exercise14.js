/** Contador de repeticiones:
 * Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
 */

const counterWords = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code'];

function repeatCounter(param) {
    let res = {};

    param.forEach((element) => {
        if (res[element]) {
            res[element]++;
        } else {
            res[element] = 1;
        }
    });

    return res;
}

let result = repeatCounter(counterWords);
console.log('Resultado: ', result);

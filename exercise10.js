/** Calcular promedio */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let res = 0;
    for (const item of param) {
        res += item;
    }

    res = res / param.length;

    return res;
}

let result = average(numbers);
console.log(result);

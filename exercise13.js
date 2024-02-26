/** Buscador de nombres:
 * Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array.
 * Comprueba si existe el elemento, en caso de que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
 */

const nameFinder = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];

function finderName(listNames, name) {
    let resBoolean = false;
    let resPosition = 0;

    // for (let i = 0; i < listNames.length; i++) {
    //     let itemName = listNames[i];
    //     if (itemName == name) {
    //         resBoolean = true;
    //         resPosition = listNames.indexOf(name);
    //     }
    // }

    listNames.forEach((element) => {
        if (element == name) {
            resBoolean = true;
            resPosition = listNames.indexOf(name);
        }
    });

    if (resBoolean) {
        return 'Exists: ' + resBoolean + ', in position: ' + resPosition;
    } else {
        return 'Exists: ' + resBoolean;
    }
}

let result = finderName(nameFinder, 'Natasha');
// let result = finderName(nameFinder, 'Pop');
console.log('Resultado: ', result);

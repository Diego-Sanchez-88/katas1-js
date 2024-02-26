/** Probando For...in:
 * Usa un for...in para imprimir por consola los datos del alienígena.
 */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien) {
    if (Object.hasOwnProperty.call(alien, key)) {
        const element = alien[key];
        console.log(element);
    }
}

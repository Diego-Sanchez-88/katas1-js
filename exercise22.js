/** Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
 * Recuerda no usar frutas duplicadas.
 * Finalmente, imprime el array resultante.
 */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    { name: 'Heura', isVegan: true },
    { name: 'Salmon', isVegan: false },
    { name: 'Tofu', isVegan: true },
    { name: 'Burger', isVegan: false },
    { name: 'Rice', isVegan: true },
    { name: 'Pasta', isVegan: true }
];

for (const key in foodSchedule) {
    if (Object.hasOwnProperty.call(foodSchedule, key)) {
        const element = foodSchedule[key];
        for (const fruit of fruits) {
            if (element.isVegan == false) {
                element.name = fruit;
                element.isVegan = true;
                fruits.shift();
            }
        }
    }
}

// console.log(fruits);
console.log(foodSchedule);

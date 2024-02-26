// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++) {
    const element1 = i;
    console.log(element1);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
for (let j = 0; j < 10; j++) {
    const element2 = j;
    if (element2 == element2 % 2) {
        console.log(element2);
    }
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */
for (let k = 1; k < 10; k++) {
    const element3 = k;
    console.log(element3 + ' ovejita. Intentando dormir 🐑');
    if (element3 == 10 - 1) {
        console.log('Dormido!');
    }
}

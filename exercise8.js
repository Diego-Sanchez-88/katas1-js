const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let nWord = 0;
    let word = '';
    param.forEach((element) => {
        if (element.length > nWord) {
            nWord = element.length;
            word = element;
        }
    });

    return word;
}

let result = findLongestWord(avengers);
console.log('El Vengador más largo es: ', result);

// boki trójkąta
let a = 3;
let b = 5;
let c = 7;
// h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let heronAlgorithm = (a, b, c) => {
    let p = 0.5 * (a + b + c);
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return result = `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${area}.`;
};

console.log( heronAlgorithm(a, b, c) );
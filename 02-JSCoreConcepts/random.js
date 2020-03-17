const fillArrayByRandomIntInRange = (array, min=5, max=20, count=10) => {
    for(let i=1; i<=count; i++) array.push(Math.floor(Math.random() * (max - min) ) + min);
    return array;
}

const printArr = (array) => {
    console.log(array);
}

let randomArr = [];
fillArrayByRandomIntInRange(randomArr);
printArr(randomArr);
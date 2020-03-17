const whileExample = (max, min=1, add=1) => {
    let result = "";

    let i = min;
    while(i<=max) {
        if(i<=(max-add)) result += `${i}, `;
        else result += `${i}`;
        console.log(i);
        i += add;
    }

    return result;
}

console.log(whileExample(16, 2, 4));
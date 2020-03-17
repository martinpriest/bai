const forExample = (max, min=1, add=1) => {
    let result = "";

    for(let i=min; i<=max; i+=add) {
        if(i<=(max-add)) result += `${i}, `;
        else result += `${i}`;
        console.log(i);
    }

    return result;
}

console.log(forExample(16, 2, 4));
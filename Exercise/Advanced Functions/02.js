function argumentInfo(...args){
    const typeCounterObj = {};
    for (const variable of args) {
        const type = typeof(variable);
        console.log(`${type}: ${variable}`);
        if(typeCounterObj[type] === undefined){
            typeCounterObj[type] = 1;
        }else{
            typeCounterObj[type]++;
        }
    }

    const sortedArr = Object.entries(typeCounterObj).sort((a,b) => b[1]-a[1]);
    for (const element of sortedArr) {
        console.log(`${element[0]} = ${element[1]}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })
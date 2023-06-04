function sortByTwoParameters(arr){
    const output = arr.sort((a,b) => {
        const firstParameter = a.length - b.length;
        const secondParameter = a.localeCompare(b);

        return firstParameter || secondParameter;
    });  
    
    return output.join('\n');
}
console.log(sortByTwoParameters(['alpha','beta','gamma']));
console.log(sortByTwoParameters(['test','Deny','omen', 'Default']));

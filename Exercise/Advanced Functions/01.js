function sortArray(array,sortSetting){
    const dict = {
        asc:(a,b) => a-b,
        desc:(a,b) => b-a,
    }

    array.sort(dict[sortSetting]);
    return array;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))
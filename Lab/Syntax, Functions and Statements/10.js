function agregateElements(arr){
    
    let result = '';
    console.log(arr.reduce((acc,val) => acc + val,0));
    console.log(arr.slice().map(x => 1 / x).reduce((acc,val) => acc + val, 0));
    for (const element of arr) {
            result+=element;
    }
    console.log(result);
}
agregateElements([1,2,3])
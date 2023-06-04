function calorieObject(productArray){
    const result = {};
    for(let i = 0; i<productArray.length; i+=2){
        result[productArray[i]] = Number(productArray[i+1]);
    }
    return result;
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 
'Apple', '52']));

//{ Yoghurt: 48, Rise: 138, Apple: 52 } 

console.log(calorieObject(['Potato', '93', 'Skyr', '63', 
'Cucumber', '18', 'Milk', '42']));
//{ Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 } 

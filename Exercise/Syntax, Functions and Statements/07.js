function cookingByNumbers(...params){
    let number = Number(params.shift());
    for(let i = 0; i<params.length; i++){
        switch(params[i]){
            case 'chop': number /=2; console.log(number); break;
            case 'dice': number = Math.sqrt(number); console.log(number); break;
            case 'spice': number++; console.log(number); break;
            case 'bake': number*=3; console.log(number); break;
            case 'fillet': number-=number*0.20; console.log(number); break;
        }
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//16 8 4 2 1
console.log('------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet')
//3 4 2 6 4.8
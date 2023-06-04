function rectangleOfStars(input){
    if(typeof(input) !== 'number') input = 5;
    let buff = '';
    for(let column = 0; column < input; column++){
        if(column !== 0) buff += '\n'
        for(let row = 0; row < input; row++){
            buff += '* '
        }
    }
    console.log(buff);
}
rectangleOfStars(2)
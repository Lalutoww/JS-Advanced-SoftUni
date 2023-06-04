function validityChecker(x1,y1,x2,y2){
    function distance(x1,y1,x2,y2){
        return formula = (Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)));
    }
    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(3, 0, 0, 4);
/*{3, 0} to {0, 0} is valid 
{0, 4} to {0, 0} is valid 
{3, 0} to {0, 4} is valid*/
console.log(' ');
validityChecker(2, 1, 1, 1);
/*{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid 
{2, 1} to {1, 1} is valid*/
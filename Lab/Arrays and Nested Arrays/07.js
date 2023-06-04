function pieceOfPie(arr,pieOne,pieTwo){
    let start = arr.indexOf(pieOne);
    let end = arr.indexOf(pieTwo);

    let output = arr.slice(start,end+1);
    return output;

}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie', 'Lemon Meringue Pie'));
console.log(' ');
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));
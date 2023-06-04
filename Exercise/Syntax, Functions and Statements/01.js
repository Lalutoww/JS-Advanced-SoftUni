function fruit(fruit,weightInGrams,pricePerKG){
    let weight = weightInGrams/1000;
    let money = weight * pricePerKG;
   return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}
console.log(fruit('orange',2500,1.80));
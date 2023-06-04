function lowestPricesInCities(pricesArr){
    const result = {};
    // Add product object with towns as keys and prices as values for towns
    for (const element of pricesArr) {
        const [town,product,price] = element.split(' | ');
        if(result[product] === undefined) result[product] = {};
        result[product][town] = Number(price); // example result: result{Samle Product: {Sample Town: 1000, New York: 1000.1}}
    }

    // Sort town prices for each product
    for (const [product,towns] of Object.entries(result)) { // Object.entries returns: Key and value pairs
        // console.log(product); logs Sample product
        // console.log(towns); logs {Sample Town: 1000, New York: 1000.1}
        const sorted = Object.entries(towns).sort((a,b) => a[1]-b[1]); // returns [Town, price] sorted by price;
        // console.table(sorted); logs index 00 = Sample town, index 01 = 1000 ; index 10 = New York, index 11 = 1000.1
        const [town,price] = sorted[0] // gets cheapest town and it's price;
        console.log(`${product} -> ${price} (${town})`);

    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000', 
'Sample Town | Orange | 2', 
'Sample Town | Peach | 1', 
'Sofia | Orange | 3', 
'Sofia | Peach | 2', 
'New York | Sample Product | 1000.1', 
'New York | Burger | 10'] 
);
// Sample Product -> 1000 (Sample Town) 
// Orange -> 2 (Sample Town) 
// Peach -> 1 (Sample Town) 
// Burger -> 10 (New York) 

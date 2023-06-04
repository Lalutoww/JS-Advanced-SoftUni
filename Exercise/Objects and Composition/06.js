function storeCatalogue(catalogueArr) {
    const result = {};
    let modifiedArr = [...catalogueArr];
    const sorted = modifiedArr.sort((a,b) => a.localeCompare(b));
    //sort items and then get the first letter of an item and put it as an object if it doesn't exist
    for (const line of sorted) {
        let [item,price] = line.split(' : ');
        const firstLetter = item[0]
        if(result[firstLetter] === undefined) result[firstLetter] = {};
        result[firstLetter][item] = Number(price); // put the items in the right category with their prices as values
    }
    //  first print the category then in the second loop print all the elements in that category
    for (const key in result) {
        console.log(key);
        for (const item in result[key]) {
            console.log(`  ${item}: ${result[key][item]}`);
        }
    }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499

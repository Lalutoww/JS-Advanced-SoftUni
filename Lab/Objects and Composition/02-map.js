function townPopulation(arr){
    let cityPopulation = new Map();
    for (const element of arr) {
        let [city,population] = element.split(' <-> ');
        population = Number(population);
        if(!cityPopulation.has(city)){
            cityPopulation.set(city,0);
        }
        let addition = cityPopulation.get(city) + population;
        cityPopulation.set(city,addition);
    }

    const output = cityPopulation.entries();
    //console.log(output);
    for (const element of output) {
        let [city,population] = element;
        console.log(`${city} : ${population}`)
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Las Vegas <-> 20'])

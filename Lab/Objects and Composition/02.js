function townPopulation(arr){
    let cityPopulation = {};
    for (const element of arr) {
        let [city,population] = element.split(' <-> ');
        population = Number(population);
        if(cityPopulation[city]=== undefined){
            cityPopulation[city] = 0;
        }
        cityPopulation[city]+=population;
    }

    for (const city in cityPopulation) {
        console.log(`${city} : ${cityPopulation[city]}`)
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',])

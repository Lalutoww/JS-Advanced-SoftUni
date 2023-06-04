function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
        this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      percentage /= 100;
      this.population += this.population * percentage;
      Math.floor(population);
    },
    applyRecession(percentage) {
      percentage /= 100;
      this.treasury -= this.treasury * percentage;
      Math.floor(treasury);
    },
  };
}

console.log(cityTaxes("Tortuga", 7000, 15000));
/*{
name: 'Tortuga',
population: 7000,
treasury: 15000,
taxRate: 10,
collectTaxes: [Function: collectTaxes], applyGrowth: [Function: applyGrowth], applyRecession: [Function: applyRecession]
}*/
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
/*85000
7350*/

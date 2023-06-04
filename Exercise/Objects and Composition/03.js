function carFactory(input) {
  const car = { ...input };

  if (car.power <= 90) {
    car.engine = { power: 90, volume: 1800 };
    delete car.power;
  } else if (car.power <= 120) {
    car.engine = { power: 120, volume: 2400 };
    delete car.power;
  } else if (car.power <= 200) {
    car.engine = { power: 200, volume: 3500 };
    delete car.power;
  }

  switch (car.carriage) {
    case "hatchback":
      car.carriage = { type: "hatchback", color: car.color };
      delete car.color;
      break;
    case "coupe":
      car.carriage = { type: "coupe", color: car.color };
      delete car.color;
      break;
  }

  if (car.wheelsize % 2 === 0) {
    let wheelsize = car.wheelsize - 1;
    car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    delete car.wheelsize;
  } else {
    let wheelsize = car.wheelsize;
    car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    delete car.wheelsize;
  }

  return car;
}
console.table(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
//{ model: 'VW Golf II',   engine: { power: 90,             volume: 1800 },   carriage: { type: 'hatchback',               color: 'blue' },   wheels: [13, 13, 13, 13] } ;
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
//{ model: 'Opel Vectra',   engine: { power: 120,             volume: 2400 },   carriage: { type: 'coupe',               color: 'grey' },   wheels: [17, 17, 17, 17] }

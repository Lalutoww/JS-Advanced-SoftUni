function autoEngineeringCompany(input) {
    const output = {};
    for (const car of input) {
        const [brand, model, production] = car.split(' | ');
        if (!output.hasOwnProperty(brand)) output[brand] = {};
        if (!output[brand].hasOwnProperty(model)) output[brand][model] = 0;
        output[brand][model] += Number(production);
    }
    for (const car in output) {
        console.log(car);
        for (const model in output[car]) {
            console.log(`###${model} -> ${output[car][model]}`);
        }
    }
}

autoEngineeringCompany([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200',
]);

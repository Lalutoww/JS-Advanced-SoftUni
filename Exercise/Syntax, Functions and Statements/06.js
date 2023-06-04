function roadRadar(speed,area){
    const roadDictionary = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    const limit = roadDictionary[area];
    if(speed <= limit) return `Driving ${speed} km/h in a ${limit} zone`
    if(speed > limit){
        let status = '';
        const overLimit = Math.abs(speed - limit);
        if(overLimit <= 20) status = 'speeding';
        else if(overLimit > 20 && overLimit <= 40) status = 'excessive speeding';
        else status = 'reckless driving'

        return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`
    }
}
console.log(roadRadar(40, 'city'));
//Driving 40 km/h in a 50 zone
console.log('--------------------');
console.log(roadRadar(21, 'residential'));
//The speed is 1 km/h faster than the allowed speed of 20 - speeding
console.log('--------------------');
console.log(roadRadar(120, 'interstate'));
//The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
console.log('--------------------');
console.log(roadRadar(200, 'motorway'));
//The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
function townsToJSON(tableArray) {
    const regex = new RegExp(/\s*\|\s*/);
    const result = []
    
    for(let i = 1; i<tableArray.length; i++){
        let [town, latitude, longitude] = tableArray[i].split(regex).filter(Boolean);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({Town: town.trim(), Latitude: Number(latitude), Longitude: Number(longitude)})
    }
    return JSON.stringify(result);
}
console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
// [
//   { Town: "Sofia", Latitude: 42.7, Longitude: 23.32 },
//   { Town: "Beijing", Latitude: 39.91, Longitude: 116.36 },
// ];
console.log("-------------");
console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
  ])
);
// [
//   { Town: "Veliko Turnovo", Latitude: 43.08, Longitude: 25.62 },
//   { Town: "Monatevideo", Latitude: 34.5, Longitude: 56.11 },
// ];

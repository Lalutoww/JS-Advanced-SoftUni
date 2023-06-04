function heroicInventory(heroArr){
    let output = [];
    for (const element of heroArr) {
        const [name,level,items] = element.split(' / ');
        
        const inventory = items ? items.split(", ") : [];
        const heroData = {
            name: name,
            level: Number(level),
            items: inventory,
        };
        output.push(heroData);
    }
    return JSON.stringify(output);

}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun', 
'Derek / 12 / BarrelVest, DestructionSword', 
'Hes / 1 / Desolator, Sentinel, Antara'] 
));
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun" ]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}];

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'] ));
//[{"name":"Jake","level":1000,"items":["Gauss","HolidayGr enade"]}];
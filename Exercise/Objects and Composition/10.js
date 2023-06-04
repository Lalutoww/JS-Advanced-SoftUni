function heroes() {
  const heoresCreator = {
    fighter(name) {
      const fighterObj = {
        name,
        health: 100,
        stamina: 100,
        fight() {
          console.log(`${this.name} slashes at the foe!`);
          this.stamina--;
        },
      };
      return fighterObj;
    },
    mage(name) {
      const mageObj = {
        name,
        health: 100,
        mana: 100,
        cast(spell) {
          console.log(`${this.name} cast ${spell}`);
          this.mana--;
        },
      };
      return mageObj;
    },
  };
  return heoresCreator;
}
let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
//          Scorcher cast fireball
//          Scorcher cast thunder
//          Scorcher cast light
//          Scorcher 2 slashes at the foe!
//          99
//          97

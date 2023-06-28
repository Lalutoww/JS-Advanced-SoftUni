class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = Number(altitude);
        return `You have successfully added a new goal - ${peak}`;
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources <= 0) {
            throw new Error(
                "You don't have enough resources to start the hike"
            );
        }
        const difference = this.resources - time * 10;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources -= time * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        let updatedResources = this.resources + time * 10;
        if (updatedResources >= 100) {
            updatedResources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        this.resources = updatedResources;
        return `You have rested for ${time} hours and gained ${
            time * 10
        }% resources`;
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'hard' || criteria === 'easy') {
            const filteredHikesArr = this.listOfHikes.filter(
                (hike) => hike.difficultyLevel === criteria
            );
            const sortedHikesArr = filteredHikesArr.sort(
                (a, b) => a.time - b.time
            );
            const bestHike = sortedHikesArr[0];
            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        } else if (criteria === 'all') {
            const allHikes = ['All hiking records:'];
            for (const hike of this.listOfHikes) {
                allHikes.push(
                    `${this.username} hiked ${hike.peak} for ${hike.time} hours`
                );
            }
            return allHikes.join('\n');
        }
    }
}
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// Musala has already been added to your goals

console.log('-------------');
const user2 = new SmartHike('Vili');
console.log(user2.addGoal('Musala', 2925));
console.log(user2.addGoal('Rui', 1706));
console.log(user2.hike('Musala', 8, 'hard'));
console.log(user2.hike('Rui', 3, 'easy'));
//console.log(user2.hike('Everest', 12, 'hard')); // Error
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left
// You don't have enough resources to complete the hike
// Uncaught Error: Everest is not in your current goals

console.log('-------------');
const user3 = new SmartHike('Vili');
console.log(user3.addGoal('Musala', 2925));
console.log(user3.hike('Musala', 8, 'hard'));
console.log(user3.rest(4));
console.log(user3.rest(5));
// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left
// You have rested for 4 hours and gained 40% resources
// Your resources are fully recharged. Time for hiking!

console.log('------------');
const user4 = new SmartHike('Vili');
console.log(user4.showRecord('all'));
//Vili has not done any hiking yet
console.log('----------');
const user5 = new SmartHike('Vili');
user5.addGoal('Musala', 2925);
user5.hike('Musala', 8, 'hard');
console.log(user5.showRecord('easy'));
user5.addGoal('Vihren', 2914);
user5.hike('Vihren', 4, 'hard');
console.log(user5.showRecord('hard'));
user5.addGoal('Rui', 1706);
user5.hike('Rui', 3, 'easy');
console.log(user5.showRecord('all'));
// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours

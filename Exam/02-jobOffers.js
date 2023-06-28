class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        for (const candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            const person = this.jobCandidates.find((x) => x.name === name);
            if (!person) {
                this.jobCandidates.push({ name, education, yearsExperience });
            } else {
                if (person.yearsExperience < yearsExperience) {
                    person.yearsExperience = yearsExperience;
                }
            }
        }
        return `You successfully added candidates: ${this.jobCandidates
            .map((x) => x.name)
            .join(', ')}.`;
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        const person = this.jobCandidates.find((x) => x.name === name);
        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        } else {
            if (minimalExperience > person.yearsExperience) {
                throw new Error(
                    `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
                );
            }
            person.yearsExperience = 'hired';
            return `Welcome aboard, our newest employee is ${name}.`;
        }
    }
    salaryBonus(name) {
        const person = this.jobCandidates.find((x) => x.name === name);
        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (person.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (person.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }
    candidatesDatabase() {
        if (this.jobCandidates.length <= 0) {
            throw new Error('Candidate Database is empty!');
        }
        const allCandidates = ['Candidates list:'];
        const editedArr = this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((x) => `${x.name}-${x.yearsExperience}`)
        for (const element of editedArr) {
            allCandidates.push(element);
        }
        return allCandidates.join('\n');
    }
}
let Jobs = new JobOffers('Google', 'Strategy Analyst');
console.log(
    Jobs.jobApplication([
        'John Doe-Bachelor-10',
        'Peter Parker-Master-5',
        'Peter Parker-Bachelor-6',
        'Daniel Jones- Bachelor-18',
    ])
);
//You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
console.log('-----------');
let Jobs2 = new JobOffers('Google', 'Strategy Analyst');
console.log(
    Jobs2.jobApplication([
        'John Doe-Bachelor-10',
        'Peter Parker-Master-5',
        'Daniel Jones- Bachelor-18',
    ])
);
console.log(Jobs2.jobOffer('John Doe-8'));
console.log(Jobs2.jobOffer('Peter Parker-4'));
// console.log(Jobs2.jobOffer("John Jones-8"));//Error
// //  You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// //  Welcome aboard, our newest employee is John Doe.
// //  Welcome aboard, our newest employee is Peter Parker.
// //  Uncaught Error Error: John Jones is not in the candidates list!
console.log('--------------');
let Jobs3 = new JobOffers('Google', 'Strategy Analyst');
console.log(
    Jobs3.jobApplication([
        'John Doe-Bachelor-10',
        'Peter Parker-Master-5',
        'Snegar Snegar-Test-5',
        'Daniel Jones- Bachelor-18',
    ])
);
console.log(Jobs3.jobOffer('John Doe-8'));
console.log(Jobs3.jobOffer('Peter Parker-4'));
console.log(Jobs3.jobOffer('Snegar Snegar-4'));
console.log(Jobs3.salaryBonus('John Doe'));
console.log(Jobs3.salaryBonus('Snegar Snegar'));
console.log(Jobs3.salaryBonus('Peter Parker'));
// //  You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// //  Welcome aboard, our newest employee is John Doe.
// //  Welcome aboard, our newest employee is Peter Parker.
// //  John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// //  Peter Parker will sign a contract for Google, as Strategy Analyst with a salary of $60,000 per year!
console.log('------------------');
let Jobs4 = new JobOffers('Google', 'Strategy Analyst');
console.log(
    Jobs4.jobApplication([
        'John Doe-Bachelor-10',
        'Peter Parker-Master-5',
        'Jordan Cole-High School-5',
        'Daniel Jones- Bachelor-18',
    ])
);
console.log(Jobs4.jobOffer('John Doe-8'));
console.log(Jobs4.jobOffer('Peter Parker-4'));
console.log(Jobs4.jobOffer('Jordan Cole-4'));
console.log(Jobs4.salaryBonus('Jordan Cole'));
console.log(Jobs4.salaryBonus('John Doe'));
console.log(Jobs4.candidatesDatabase());
// // //  You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
// // // Welcome aboard, our newest employee is John Doe.
// // // Welcome aboard, our newest employee is Peter Parker.
// // // Welcome aboard, our newest employee is Jordan Cole.
// // // Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
// // // John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// // // Candidates list:
// // // Daniel Jones-18
// // // John Doe-hired
// // // Jordan Cole-hired
// // // Peter Parker-hired

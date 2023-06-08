function getManager() {
    const SUCCESS_MSG = 'Success';

    const elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    const recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { carbohydrate: 10, protein: 10, fat: 10, flavour: 10 },
    };

    const errorMessage = (element) => `Error: not enough ${element} in stock`;

    const commands = {
        restock(microelement, quantity) {
            elements[microelement] += Number(quantity);
            return SUCCESS_MSG;
        },
        prepare(recipe, quantity) {
            let missingElementEntry;
            let errorMsg;

            for (let i = 0; i < quantity; i++) {
                missingElementEntry = Object.entries(recipies[recipe]).find(
                    (x) => elements[x[0]] < Number(x[1])
                );

                if (missingElementEntry) {
                    errorMsg = errorMessage(missingElementEntry[0]);
                    break;
                }

                Object.entries(recipies[recipe]).forEach((x) => {
                    elements[x[0]] -= Number(x[1]);
                });
            }

            return errorMsg ? errorMsg : SUCCESS_MSG;
        },
        report: () => {
            return Object.keys(elements)
                .reduce((a, b) => {
                    a.push(`${b}=${elements[b]}`);
                    return a;
                }, [])
                .join(' ');
        },
    };
    return function (cmd) {
        const cmdTokens = cmd.split(' ');

        return cmdTokens.length === 1
            ? commands[cmdTokens[0]]()
            : commands[cmdTokens[0]](cmdTokens[1], cmdTokens[2]);
    };
}
const manager = getManager();
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare apple 1')); // Success
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare burger 1')); // Success
console.log(manager('report')); //'protein=0 carbohydrate=4 fat=3 flavour=5'

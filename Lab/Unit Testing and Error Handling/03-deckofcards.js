function deckOfCards(cards) {
    const resultArr = [];
    for (const card of cards) {
        let [cardFace, cardSuit] = [undefined, undefined];
        if (card.length > 2) {
            let modifiedArr = card.split('');
            cardFace = modifiedArr[0] + modifiedArr[1];
            cardSuit = modifiedArr[2];
        } else {
            [cardFace, cardSuit] = card.split('');
        }
        try{
            resultArr.push(createCard(cardFace,cardSuit));
        }catch(e){
            console.log(e.message)
            return
        }
    }
    function createCard(cardFace, cardSuit) {
        const cardFaces = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            J: 'J',
            Q: 'Q',
            K: 'K',
            A: 'A',
        };
        const cardSuits = {
            S: '\u2660',
            H: '\u2665 ',
            D: '\u2666 ',
            C: '\u2663 ',
        };
        if (
            cardFaces.hasOwnProperty(cardFace) &&
            cardSuits.hasOwnProperty(cardSuit)
        ) {
            return `${cardFaces[cardFace]}${cardSuits[cardSuit]}`;
        } else {
            throw new Error(`Invalid card: ${cardFace}${cardSuit}`);
        }
    }
    console.log(resultArr.join(' '));
}
deckOfCards(['AS', '10D', 'KH', '2C']); //A♠ 10♦ K♥ 2♣
deckOfCards(['5S', '3D', 'QD', '1C']); //Invalid card: 1C

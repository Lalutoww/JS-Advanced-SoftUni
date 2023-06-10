function playingCards(cardFace, cardSuit) {
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
        'S': '\u2660',
        'H': '\u2665 ',
        'D': '\u2666 ',
        'C': '\u2663 ',
    };
    if(cardFaces.hasOwnProperty(cardFace) && cardSuits.hasOwnProperty(cardSuit)){
        return `${cardFaces[cardFace]}${cardSuits[cardSuit]}`;
    }else{
        throw new Error('Invalid card face or card suit');
    }
}
try{
    console.log(playingCards('A', 'S')); //A♠
    console.log(playingCards('10','H')); //10♥
    console.log(playingCards('1', 'S')); //Error
    
}catch(e){
    console.log(e.message);
}
function encodeAndDecodeMessages() {
    //Get arrays
    const textAreas = Array.from(document.querySelectorAll('div textarea'));
    const buttonsArr = Array.from(document.querySelectorAll('div button'));

    //Declare both text areas and buttons
    const messageArea = textAreas[0];
    const recieverArea = textAreas[1];
    const encodeBtn = buttonsArr[0];
    const decodeBtn = buttonsArr[1];

    //Event listener setup
    encodeBtn.addEventListener('click', encodeHandler);
    decodeBtn.addEventListener('click', decodeHandler);


    function encodeHandler(){
        let sentenceArr = messageArea.value.split('');
        const encodedSentenceArr = [];
        for (let char of sentenceArr) {
            modified = char.charCodeAt(0) + 1;
            char = String.fromCharCode(modified);
            encodedSentenceArr.push(char);
        }
        recieverArea.value = encodedSentenceArr.join('');
        messageArea.value = '';
    }

    function decodeHandler(){
        let sentenceArr = recieverArea.value.split('');
        const decodedSentenceArr = [];
        for (let char of sentenceArr) {
            modified = char.charCodeAt(0) - 1;
            char = String.fromCharCode(modified);
            decodedSentenceArr.push(char);
        }
        recieverArea.value = decodedSentenceArr.join('');
    }
}
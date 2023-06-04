function extractText() {
    const itemsArr = Array.from(document.getElementById('items').children).map(x=>x.textContent)
    const textArea = document.getElementById('result');
    textArea.textContent = itemsArr.join('\n');
}
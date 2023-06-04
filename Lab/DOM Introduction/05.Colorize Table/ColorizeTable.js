function colorize() {
    const tableRowsArr = Array.from(document.querySelectorAll('tr'));
    for(let i = 1; i<tableRowsArr.length; i++){
        const tr = tableRowsArr[i];
        if(i%2 === 1) tr.style.backgroundColor = 'Teal'
    }
}
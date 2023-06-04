function sumTable() {
    //Claim elements
    const total = document.getElementById('sum');
    const productsArr = Array.from(document.querySelectorAll('td:not(#sum)')).map(x=>x.textContent);
    let sum = 0;
    for(let i = 1; i<productsArr.length; i+=2){
        sum+=Number(productsArr[i]);
    }
    total.textContent = sum;

}
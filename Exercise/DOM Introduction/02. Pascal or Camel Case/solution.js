  function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let lettersToLowerCase = input.toLowerCase();
    
    let outputContainer = document.getElementById('result');

    switch(convention){
      case 'Camel Case': lettersToLowerCase = lettersToLowerCase.split(' ');
        for(let i = 1; i<lettersToLowerCase.length; i++){
          const str = lettersToLowerCase[i];
          const str2 = str.charAt(0).toUpperCase() + str.slice(1);
          lettersToLowerCase[i] = str2;
        }
        outputContainer.textContent = lettersToLowerCase.join('');
      break;
      case 'Pascal Case': lettersToLowerCase = lettersToLowerCase.split(' ');
        for(let i = 0; i<lettersToLowerCase.length; i++){
          const str = lettersToLowerCase[i];
          const str2 = str.charAt(0).toUpperCase() + str.slice(1);
          lettersToLowerCase[i] = str2;
        }
        outputContainer.textContent = lettersToLowerCase.join('');
      break;
      default: outputContainer.textContent = 'Error!'; break;
    }
}
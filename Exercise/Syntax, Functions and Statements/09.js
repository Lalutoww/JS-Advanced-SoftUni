function wordsUppercase(sentence){
    let pattern = /\w+/g;
    sentence = sentence.match(pattern).map(x => x.toUpperCase()).join(', ');
    console.log(sentence);
}
wordsUppercase('Hi, how are you?');
//HI, HOW, ARE, YOU
wordsUppercase('hello');
//HELLO
function addAndRemove(commandArr){
    let output = [];
    let dictionary = {
        add: (x) => output.push(x),
        remove: () => output.pop(),
    }
    let n = 1;
    for (const cmd of commandArr) {
        dictionary[cmd](n);
        n++;
    }
    return output.length > 0 ? output.join('\n') : 'Empty';
}
console.log(addAndRemove(['add',
'add',
'add',
'add']))
//1 2 3 4
console.log('----');
console.log(addAndRemove(['add',
'add',
'remove',
'add',
'add']))
// 1 4 5
console.log('----');
console.log(addAndRemove(['remove',
'remove',
'remove']))
// Empty
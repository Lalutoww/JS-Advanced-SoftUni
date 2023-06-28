class List {
    constructor() {
        this.output = [];
        this.size = 0;
    }
    sortElements() {
        this.output.sort((a, b) => a - b);
    }
    updateSize() {
        this.size = this.output.length;
    }
    add(element) {
        this.output.push(element);
        this.sortElements();
        this.updateSize();
    }
    remove(index) {
        if (this.output[index] === undefined) {
            return;
        }
        this.output.splice(index, 1);
        this.updateSize();
    }
    get(index) {
        if (this.output[index] === undefined) {
            return;
        }
        return this.output[index];
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

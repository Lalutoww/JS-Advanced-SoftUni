function createSortedList() {
  const output = {
    resultArr: [],
    size: 0,

    
    add(element) {
      this.resultArr.push(element);
      this.resultArr = this.resultArr.sort((a,b) => a-b);
      this.size++;

      return output;
    },
    remove(index) {
        if (index>=0 && index < this.resultArr.length) {
            this.resultArr.splice(index, 1);
            this.size--;
        }
        return output;
    },
    get(index) {
        if (index>=0 && index < this.resultArr.length) {
            return this.resultArr[index];
        }
    },
  };
  return output;
}
let list = createSortedList();
console.log(list.add(5).resultArr);
console.log(list.add(6).resultArr);

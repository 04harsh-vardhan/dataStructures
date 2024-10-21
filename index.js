class MinHeap {
  constructor() {
    this.arr = [];
    this.arrLength = 0;
  }
  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
  insert(element) {
    let newIndex = this.arrLength;
    this.arr[newIndex] = element;
    let currIndex = newIndex;
    while (currIndex > 0) {
      let parentIndex = Math.floor((currIndex - 1) / 2);
      if (this.arr[parentIndex] > this.arr[currIndex]) {
        this.swap(parentIndex, currIndex);
        currIndex = parentIndex;
        parentIndex = Math.floor((currIndex - 1) / 2);
      } else {
        break;
      }
    }
    this.arrLength += 1;
  }
  remove() {
    
  }
  printHeap() {
    return this.arr;
  }
}

module.exports = MinHeap;

// let heap = new MinHeap();
// heap.insert(2);
// heap.insert(5);
// heap.insert(1);
// heap.printHeap();

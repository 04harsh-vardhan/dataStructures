const assert = require("assert");
const MinHeap = require("../index");

const data = require("./insert.json");
const removeJson = require("./remove.json");

// describe("Insert function test", () => {
//   let heap;
//   beforeEach(() => {
//     heap = new MinHeap();
//   });
//   data.testCases.forEach((testcase) => {
//     it(testcase.description, () => {
//       testcase.input.forEach((num) => {
//         heap.insert(num);
//       });

//       assert.deepEqual(heap.printHeap(), testcase.expected);
//     });
//   });
// });

// describe("remove function test", () => {
//   let heap;
//   beforeEach(() => {
//     heap = new MinHeap();
//   });
//   removeJson.testCases.forEach((testcase) => {
//     it(testcase.description, () => {
//       heap.arr = testcase.input;
//       heap.arrLength = testcase.input;
//       heap.remove();
//       assert.deepEqual(heap.printHeap(), testcase.expected);
//     });
//   });
// });

describe('MinHeap Integration Test', function () {
  let heap;

  // Run before each test to start with a new heap
  beforeEach(function () {
    heap = new MinHeap();
  });

  it('should insert and remove elements and verify the final heap structure', function () {
    // Insert elements
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);
    heap.insert(15);
    
    // Check heap after insertions
    let heapAfterInsertions = heap.printHeap();
    console.log("heapAfterInsertions  ",heapAfterInsertions)
    assert.deepEqual(heapAfterInsertions,[1, 5, 20, 10, 15]);

    // Remove a few elements
    let removed1 = heap.remove(); // should remove 1
    
    assert.equal(removed1,1)

    let removed2 = heap.remove(); // should remove 5
    // expect(removed2).to.equal(5);
    assert.equal(removed2,5)

    // Check heap after removals
    let heapAfterRemovals = heap.printHeap();
    assert.deepEqual(heapAfterRemovals,[10, 15, 20]);

    // Insert more elements
    heap.insert(3);
    heap.insert(7);

    // Check heap after more insertions
    let finalHeap = heap.printHeap();
    assert.deepEqual(finalHeap,[3, 10, 20, 15, 7]);
  });
});
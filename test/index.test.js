const assert = require("assert");
const MinHeap = require("../index");

const data = require("./insert.json");
const removeJson = require("./remove.json");
describe("Insert function test", () => {
  let heap;
  beforeEach(() => {
    heap = new MinHeap();
  });
  data.testCases.forEach((testcase) => {
    it(testcase.description, () => {
      testcase.input.forEach((num) => {
        heap.insert(num);
      });

      assert.deepEqual(heap.printHeap(), testcase.expected);
    });
  });
});

describe("remove function test", () => {
  let heap;
  beforeEach(() => {
    heap = new MinHeap();
  });
  removeJson.testCases.forEach((testcase) => {
    it(testcase.description, () => {
      heap.arr = testcase.input
      heap.arrLength = testcase.input
      heap.remove()
      assert.deepEqual(heap.printHeap(),testcase.expected)
    });
    
  });
});

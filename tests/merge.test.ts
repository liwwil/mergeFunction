import { merge } from "../src/merge";

describe("Testing Merge function", () => {
  it("--------Test case 1--------", () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [10, 8, 6, 4, 2];
    const collection3 = [11, 12, 13, 14, 15];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("--------Test case 2--------", () => { 
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [9, 7, 5, 3, 1];
    const collection3 = [11, 12, 13, 14, 15];
    const expected = [1, 1, 3, 3, 5, 5, 7, 7, 9, 9, 11, 12, 13, 14, 15]; 
    /** i assume that when some array have duplicate numbers , the function will  add duplicate number too**/
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
});
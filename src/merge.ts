export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    const mergedArray = [...collection_1, ...collection_2, ...collection_3];
    return quicksort(mergedArray);
  }
  
  function quicksort(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }
  
    const pivot = data[0];
    const left = data.slice(1).filter((item) => item <= pivot);
    const right = data.slice(1).filter((item) => item > pivot);
  
    return quicksort(left).concat(pivot, quicksort(right));
}
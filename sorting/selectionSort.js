function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

let array = [2, 1, 4, 6, 5, 3];
console.log(selectionSort(array));

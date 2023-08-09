function removeDuplicates(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1 && arr[i] == arr[i + 1]) {
      continue;
    }
    arr[count] = arr[i];
    count++;
  }

  return count;
}

function removeMostDuplicate(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 2]) {
      arr[count] = arr[i];
      count++;
    }
  }
  return count;
}

var arr = [0, 0, 1, 1, 1, 1, 2, 3, 3];

const removeDup = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], i);
    }
  }
  return [...map.keys()];
};


const bSearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] == target) return mid;
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(bSearch(arr, 12));

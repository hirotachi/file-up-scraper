const binarySearch = (arr, value, key) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (arr[mid][key] !== value && left <= right) {
    if (arr[mid][key] < value) {
      left = mid + 1;
    } else if (arr[mid][key] > value) {
      right = mid - 1;
    }
    mid = Math.floor((right + left) / 2);
  }
  return arr[mid][key] === value ? mid : -1;
};

export default binarySearch;
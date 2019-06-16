const binarySearch = (arr, id) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (arr[mid].id !== id && left <= right) {
    if (arr[mid].id < id) {
      left = mid + 1;
    } else if (arr[mid].id > id) {
      right = mid - 1;
    }
    mid = Math.floor((right + left) / 2);
  }
  return arr[mid].id === id ? mid : -1;
};

export default binarySearch;
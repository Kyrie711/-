let arr = [2,4,6,3,8,6,4,2,5,6,4,3,1]

// function quickSort(arr) {
//   let len = arr.length
//   if(len < 2) return arr
//   let middleIndex = Math.floor(len / 2)
//   let middle = arr.splice(middleIndex, 1)[0]
//   const left = []
//   const right = []
//   arr.forEach(item => {
//     item > middle ? right.push(item) : left.push(item)
//   })
//   return quickSort(left).concat(middle, quickSort(right))
// }

// console.log(quickSort(arr))


const quickSort = (arr, left, right) => {
  let partitionIndex;
  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  //分区操作
  let pivot = left, //设定基准值（pivot）
      index = pivot + 1;
  // index 保存着第一个大于arr[pivot]的值，和后面小于arr[pivot]来交换，然后index++
  // 小的就切换到前面去
  for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}; 

console.log(quickSort(arr, 0, arr.length - 1))
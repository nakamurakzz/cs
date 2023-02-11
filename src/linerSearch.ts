const linerSearch = (numList: number[], n: number) => {
  for (let i of numList) {
    if (i === n) return true;
  }
  return false;
};

/**
 * 二分探索
 */
const binarySearch = (numList: number[], n: number) => {
  let first = 0;
  let last = numList.length - 1;
  while (last >= first) {
    let mid = Math.floor((first + last) / 2);
    if (numList[mid] === n) return true;
    if (n < numList[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return false;
};

const aList = [1, 8, 32, 91, 5, 15, 9, 100, 3];
console.log(linerSearch(aList, 91));

// 二分木探索はソート済みの配列を前提とする
console.log(
  binarySearch(
    aList.sort((a, b) => a - b),
    91
  )
);

const cList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
// ASCIIコードで比較する
console.log(
  linerSearch(
    cList.map((w) => w.charCodeAt(0)),
    "e".charCodeAt(0)
  )
);

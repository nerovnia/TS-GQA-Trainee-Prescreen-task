"use strict";

function processArrayTasks(inputArray) {
  if (!Array.isArray(inputArray)) return {};

  const reverseArray = (arr) => {
    const res = new Array(arr.length);
    for (let i = 0, j = arr.length - 1; j >= 0; i++, j--) {
      res[j] = arr[i];
    }
    return res;
  };
  
  const sumEven = (arr) => {
    const res = arr.reduce((accumulator, currentValue, index) => {
      if (!(currentValue % 2 === 0 && index % 2 === 0)) return accumulator;
      return (accumulator = accumulator + currentValue);
    }, 0);
    return res;
  };
  
  const isPalindrome = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
      if (arr[i] !== arr[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  return {
    reverseArray: reverseArray(inputArray),
    sumEven: sumEven(inputArray),
    isPalindrome: isPalindrome(inputArray),
  };
}

export { processArrayTasks };

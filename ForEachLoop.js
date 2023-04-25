// Given an Array of Integers, calculate the cumulative sum of the array.

const arr = [1,3,5,7] 
//Solution 1: Using JavaScript's Built in Functions
// const sum = [1,3,5,7].reduce((acc, cur) => acc + cur, 0)

//Reduce reduces the array into a single value
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//Solution 2: Without JavaScript built-in method

export function cumSum(arr) {
    let total = 0;
    
    for(let i = 0; i < arr.length; i++) {
      total += arr[i];
    } 
    
    return total;
  }

console.log('result:', cumSum(arr))




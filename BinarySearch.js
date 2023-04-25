//solution 1: inefficient method

// function Search(arr, value) {

//     if( value !== arr.length -1) {

//     for ( let i = 0; i < arr.length; i++) {
//         let currentValue = arr[i]
//         if (value === currentValue) {
//             return arr.indexOf(currentValue)
//         }
//   }
//  }
// }

// console.log('result:', Search(arr, value))

//solution 2: Binary Search

export function search(arr, target, start=0, end=arr.length-1) {

    console.log(start, end)

    if (start > end) {
        console.log('Not found!');
        return -1;
    } 

    const middle = Math.floor( (start + end) / 2 );

    if (arr[middle] === target) {
        console.log(`${target} Found at index ${middle}`);
        return middle;
    } 

    if(arr[middle] > target) {
        return search(arr, target, start, middle-1);
    }

    if(arr[middle] < target) {
        return search(arr, target, middle+1, end);
    }

}

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
console.log(search(arr, 'b'));
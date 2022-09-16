// function countDown(num) {
//    arrCount = []
//    console.log(arrCount)
//     console.log(num) ;
//     if (num > 1) {

//     countDown(num -1);
//     arrCount.push(num)
//   //return num;
// }
// }
// countDown(5);


// function sum(elems) {
//     if (elems.length === 0) {
// //         return 0;
//     } else  {
//         const [head,...rest] = elems;
// //         return head + sum(rest);
//     }

// } console.log(sum([1,2,3,4,5]))

// function factorial(n) {
//   if (n=== 1 || n === 0) {
//     //   return 1;
//   } else {
//     //   return n * factorial(n-1);
//   }
// } console.log(factorial(4));

// function fuckingCoins(num) {


//     //console.log(num)

//     if (num > 25) {
//         console.log(25)

//         // return fuckingCoins(num - 25)  ;
//     } else if (num >= 10) {
//         console.log(10)
//         // return fuckingCoins(num -10);
//     } else if (num >5) {
//         console.log(5)
//         // return fuckingCoins(num - 5);
//     } else if (num >2) {
//         console.log(2)
//         // return fuckingCoins(num - 2);
//     }else if (num >= 1 ){
//         console.log(1)
//         // return  fuckingCoins(num - 1);
//     } else  {
//         // return 0 ;
//     }

// }
// fuckingCoins(70)

// var factorial = function fac(num) {
// if (num === 1) {
//     return 1;
// }
//     return num * fac(num-1);
// };
// var  final = factorial(5)
// console.log(final)

// 1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
// Click me to see the solution

// function factoral( num ) {
//     if (num === 0) {
//         return 1;
//     } else {
//     return num * factoral(num-1) ;
// }
// } console.log(factoral(5));

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. Go to the editor
// Click me to see the solution.
// var gcd = function(a, b) {
//     if ( ! b) {
//         return a;
//     }

//     return gcd(b, a % b);
// };
// console.log(gcd(27, 18));

// 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// Click me to see the solution.

// function range(x,y) {
//   if (x === -y) {
//       return -y;
//   } else {
//       return 1 + range(x-1)
//   }

//   }
// console.log(range(2,9))
// 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : 
// Expected Output : 21
// Click me to see the solution.
var arr = [10, 92, 37, 43, 85, 6]
function sum(arr, L) {
    if (L <= 0) {
        return 0;
    } else {
        return (sum(arr,L-1) + arr[L-1]);
}
}
let L = arr.length
console.log(sum(arr, L))

// 5. Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// Click me to see the solution.
function exp(b, e) {
    if (e === 0) { 
        return 1;
    } else {
        return b * exp(b, e -1);
    }
} console.log(exp(8,3))

// 6. Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// Click me to see the solution.
function fibo(n) {
    if (n===0) {
        return 1;
        
    } else  {
        return n + fibo(n-1);
    }
    
}console.log('fibo ' + fibo(34))

// 7. Write a JavaScript program to check whether a number is even or not. Go to the editor
// Click me to see the solution.

// function even(num) { 
//     if (num ) {

//     } else {

//     }

// }console.log(num(87))

// 8. Write a JavaScript program for binary search. Go to the editor
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
// Click me to see the solution. 
let array = [0,1,2,3,4,5,6]
function binary(arr, num) { 
let low = 0;
let high = arr.length -1;
let mid = 0; 

while (low <= high) {
    mid = Math.floor((high+low)/2);
    if ( arr[mid] == num) {
        return arr[mid];
    } else if (num > arr[mid]) {
        low = mid +1;
    } else {
        high = mid -1
    }
}
return -1;
}

console.log(binary(array, 49))

// 9. Write a merge sort program in JavaScript. Go to the editor
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]
// Click me to see the solution.

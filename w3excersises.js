// 1. Write a JavaScript program that accept two integers and display the larger.Go to the editor
// Click me to see the solution
// let a = 10;
// let b = 9;
// function bigger() {
// if (a > b) {
//     return a;
// }else {
//     return b;
// }

// }
// console.log(bigger(a, b));


//-------------------------------------------
// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
// Sample 
// Output : The sign is -
// Click me to see the solution

// function negorpos(...numbers) {
// let sum = 1;

// for (let i of numbers) {
//     sum *= i;
//    } 
//  if (sum < 0) { 
//      console.log('negative')
     
//     } else {
//     console.log('positive')
//     }
 
// } let result = negorpos([3, -7, 2,9])
// console.log(result);
  


// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1 , 4
// Output : 4, 0, -1
// Click me to see the solution




// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
// Click me to see the solution
// let nums=[-5, -2, -6, -100, -1]
// let result = -10;
// for (let i = 0; i<nums.length; i++){
//     if (nums[i] > result) {
//         result =nums[i];
//     }
    
// }console.log(result)



// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
// Click me to see the solution

// for (let i = 0; i < 15; i++) {
//     if (i %2 === 0) {
//         console.log(i + ' is even');
//         console.log(`${i} is even`)
//     } else {
//         console.log(i + ' is odd');
//         console.log(`${i} is odd`)
//     }
// }console.log()






// 6. Write a JavaScript program which compute, the average marks of the following students. Then, this average is used to determine the corresponding grade. Go to the editor

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
// let students = {
// David	:80,
// Vinoth	:77,
// Divya	:88,
// Ishitha	:95,
// Thomas	:68,
// Uva:30
// }

// let result = [];
// let letter = '';
// for (let i in students)  { 
//     if (students[i] < 69 && students[i]>=60) {
//         letter = 'D';
//         console.log(`${i} ${letter}`)
//     } else if (students[i] < 79 && students[i]>=70) {
//         letter = 'C';
//         console.log(`${i} ${letter}`)
//         }   else if (students[i] < 89 && students[i]>=80) {
//                 letter = 'B';
//                 console.log(`${i} ${letter}`)
//             }   else if (students[i] < 100 && students[i]>=90) {
//                     letter = 'A';
//                     console.log(`${i} ${letter}`)
//                 }  else {
//                     console.log(`${[i]} failed miserably`)
//     }
// }



// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// Click me to see the solution

// for (let i = 0; i<100;i++) {
//     if ( i %5 === 0 && i % 3 === 0) {
//         console.log(i +' fizzbuzz');
//     } else if (i%5===0){
//         console.log(i + ' buzz');
//     } else if (i %3 === 0) {
//         console.log(i +' fizz')
//     }
// }

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor
// Click me to see the solution

//TOO HARD

// 9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
// Click me to see the solution

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
// Click me to see the solution

// Square
// let n = 5;
// let dot = '';
// for ( let i = 0; i< n ; i++){
//     for (let j= 0; j<n ; j++){
//         dot += '*';
//     }
//     dot += '\n';
// }console.log(dot)

let n = 5;
let dot = '';
for ( let rows = 0; rows < n  ; rows++){
    for (let col = rows; col < n  ; col++){
        dot += '  ';
    }
   
   for (let col  = 0; col < rows  ; col++){
        dot += ' *';
   }dot+= '\n'
}console.log(dot)



// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. Go to the editor
// Click me to see the solution

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor
// Click me to see the solution
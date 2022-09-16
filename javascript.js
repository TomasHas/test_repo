// // 2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
// // Test Data :
// // console.log(is_Blank(''));
// // console.log(is_Blank('abc'));
// // true
// // false
// // Click me to see the solution

// function blankString(input) {
//   if (input.length === 0) {
//     return true;
//   }
//   else {
//     return false
//   }
// } console.log(blankString('fss'))

// // 3. Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
// // Test Data :
// // console.log(string_to_array("Robin Singh"));
// // ["Robin", "Singh"]
// // Click me to see the solution

// function string_to_array(str) {
//   let newArray = str.split(' ');

// console.log(newArray)
// }
// console.log(string_to_array("Robin Singh"));




// // 4. Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// // Test Data :
// // console.log(truncate_string("Robin Singh",4));
// // "Robi"
// // Click me to see the solution.
// let truncate_string = function(str1, num) {
//   return str1.slice(0,num);
// }
// console.log(truncate_string("Robin Singh",4));

// // 5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
// // Test Data :
// // console.log(abbrev_name("Robin Singh"));
// // "Robin S."
// // Click me to see the solution.

// //let abbrev_name = function() { 
// function abbrev_name(str3) {
//   let splitName = str3.trim().split(' ');
//   if (splitName.length > 1) {
//     return splitName[0] + ' ' + splitName[1].charAt(0) + '.';
//     }
//   return splitName;
// }
// console.log(abbrev_name("Tomas Hastrup"));
// // "Robin S."

// // 6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
// // Test Data :
// // console.log(protect_email("robin_singh@example.com"));
// // "robin...@example.com"
// // Click me to see the solution.
// // protect_email = function(email) {
// // let splitted = email.trim().split('@');//['robin_singh', 'example.com']
// // let avg = splitted[0].length/2; 
// // let firstHalf = splitted[0].substring(0,avg);
// // let secondHalf = splitted[1];
// //   return firstHalf + '...@' + secondHalf;
// // }

// // console.log(protect_email("gh@example.com"));
// // // 7. Write a JavaScript function to parameterize a string. Go to the editor
// // Test Data :
// // console.log(string_parameterize("Robin Singh from USA."));
// // "robin-singh-from-usa"
// // Click me to see the solution.

// string_parameterize = function (str1) {
//   return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
// };
// console.log(string_parameterize("Robin Singh from USA."));  

// // 8. Write a JavaScript function to capitalize the first letter of a string. Go to the editor
// // Test Data :
// // console.log(capitalize('js string exercises'));
// // "Js string exercises"
// // Click me to see the solution.
// let capitalize = function(str4) {
//   let capStr = str4.trim();
//     return capStr[0].toUpperCase() + capStr.substring(1,);
// };
// console.log(capitalize('js string exercises'));

// // 9. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
// // Test Data :
// // 
// // "Js String Exercises"
// // Click me to see the solution.
// capitalize_Words = function(strr) {
//   let newWords = strr.split(' ');
//   let caps = [];
//     for (let i = 0 ; i < newWords.length ; i++) {
//       caps += newWords[i].charAt(0).toUpperCase() + newWords[i].substring(1) + ' '; 
//     }
//   return caps;
// }
// console.log(capitalize_Words('js string exerc00ises'));

// // 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
// Test Data :
// 
// "aAbBC"

// let swapcase = function() {
//  return swapcase.replace(/A-Z/g, )
// }

// console.log(swapcase("aAbBC"))

// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor

// Sample Output: name,sclass,rollno

//Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// // let lista = [];
// // for (let i in student) {
// //     lista += i + ', ';
    
// // }
// // console.log('\(excercise 1\) ' + lista);
//Done



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// console.log(student.rollno)
// console.log(delete student.rollno)
// console.log(student.rollno)
//done

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(Object.keys(student).length)




// // 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }]; 
// for (let i in library) {
//     console.log(library[i]);
// }
    


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// class Cylinder {
//      constructor(radius, height){
        
//         this.radius = radius;
//         this.height = height;
//      }
//     getFormula() {
//          return this.height * Math.PI * (this.radius)**2 ;
         
//      }
//      printDescription() {
//         return this.getFormula();
//      }
// }
// let myCylinder = new Cylinder(9,8);
// myCylinder.getFormula();
// console.log(myCylinder.radius);
// console.log(myCylinder.printDescription().toFixed(4));
//console.log(Cylinder.getFormula)
//class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.calcArea();
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
//   }
  
//   const square = new Rectangle(10, 10);
  
//   console.log(square.area); // 100

// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: 
// Expected Output : [-2, 0, 1, 3, 4, 6]
// Click me to see the solution
//

// let arr = [6,4,0,3,-2,1];

// let  bubbleSort = () => {
//     let bla = arr.length;
// for (let i = 0 ; i < bla ; i++) {
//     for(let j = 0 ; j < bla ; j++) {
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
    
//    } 
//    return arr;
// };
// console.log(bubbleSort(arr));


// let inputArr = [6,4,0,3,-2,1];
// //console.log(bubbleSort(arr));


// let bubbleSort1 = () => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
// console.log(bubbleSort1(inputArr));
//console.log(arr)


// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("catos".sub_String());


let subset = () => {
    let result = [];
    let bla = this.length;
    for (let i = 0; i< bla; i++) { 
        for (let j = i + 1 ; i < bla +1; i++)
        result.push(this.slice(i,j));
        }
       
    return result;
}
console.log(subset('dog'));


// 
// 8. Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
// Click me to see the solution

// 9. Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// Click me to see the solution

// 10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
// Click me to see the solution

// 11. Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
// Click me to see the solution

// 12. Write a JavaScript function to parse an URL. Go to the editor
// Click me to see the solution

// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties. Go to the editor
// Click me to see the solution

// 14. Write a JavaScript function to retrieve all the values of an object's properties. Go to the editor
// Click me to see the solution

// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs. Go to the editor
// Click me to see the solution

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys. Go to the editor
// Click me to see the solution

// 17. Write a JavaScript function to check whether an object contains given property. Go to the editor
// Click me to see the solution

// 18. Write a JavaScript function to check whether a given value is a DOM element. Go to the editor
// Click me to see the solution















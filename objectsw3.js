// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// // Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// //Sample Output: name,sclass,rollno
// // Click me to see the solution
//  function llaves(obj) {
//   let keys = [];

//   for ( let i in obj) {
//     keys.push(i)
//   }
//   console.log(keys)
//     return keys
// }console.log(llaves(student))


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Click me to see the solution
// console.log(student);
// delete student.rollno;
// console.log(student)

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// // Click me to see the solutionc
// function len(obj) {
//   let file = '';
//     for ( let i  in obj) {
//       file += i + '\n';
//   }
// return file
// } console.log(len(student))


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

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

//    function stat(obj) {
//        console.log(obj)
//         let onetrue = [];
//         let twofalse= [];
//        for (let i = 0 ; i < obj.length; i++) {

//             if (obj[i].readingStatus === true) {
//                 onetrue.push( obj[i].author + ' ' + obj[i].readingStatus);

//             } if (obj[i].readingStatus === false) {
//                 twofalse.push(  obj[i].author + ' ' + obj[i].readingStatus);
//             }
//         }
//         return 'True: ' + onetrue +  '\n' + 'False: '+ twofalse
//     }
// console.log(stat(library))

// return  'I have read ' + obj[i].readingStatus+ ' '  + obj[i].title + ' by ' +obj[i].author;
// }
// else if ( )
//     return 'I HAVE NOT READ ' + obj[i].readingStatus+ ' '  + obj[i].title + ' by ' +obj[i].author;
// }
// else {
//  return 'I HAVE NOT READ ' + obj[i].readingStatus+ ' '  + obj[i].title + ' by ' +obj[i].author;
// }
// }


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// Click me to see the solution

// class Cylinder{
//     constructor(_height, _radius) {
//         this.height = _height;
//         this.radius = _radius;
//     }
//  getVol() {
//      let vol = Math.PI * this.height * 2 * this.radius;
//      return vol.toFixed(4)
//  }
// }
// let myCyl =  new Cylinder(10,40)
// console.log(myCyl.getVol())



// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
// Click me to see the solution
// let arr = [6,4,0, 3,-2,1];

// for (let i = 0; i < arr.length ; i++) {
//     for (let j = 0; j < arr.length ; j++) {
//         if (arr[j+1] > arr[j]) {
//             let temp = arr[j] ;
//             arr[j] = arr[j+1];
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)

// function bubble(array) {

//     for ( let i = 0; i < array.length; i++) {
//         for ( let j = 0; j < array.length; j++) {
//     if (array[j] < array[j+1]) {
//         [array[j], array[j+1]] = [array[j+1], array[j]]
//         }
//     }
//     }return array

// }
// console.log(bubble([1, 2, 4, 25, 24, 14, 75, 27,94,3,5,78,36,7,60]))

//----------------------------------------------------------

// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
// Click me to see the solution

// function subset(str) 
// { str.split('')
// // d , o , g 
//   var subs = [];
//   for (var m = 0; m < str.length; m++) 
//   {
//     for (var n = m+1; n < str.length+1; n++) 
//     { 
//       subs.push(str.slice(m,n));
//     }
//   }
//   return subs;
// };

// console.log(subset('dog'));


// for ( let i = 0 ; i < 3; i++) {
//     for (let k = 0+1; k <  +1 ; k++) {
//         console.log(i,k)
//     }
// }


//(6) ['dd', 'do', 'od', 'oo', 'gd', 'go']


// let arr1 = [
//     [1, 2,3],
//     [3, 4, 5 ],
//     [5, 6, 6],
//   ];
  
//   for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
//   }

// let arr = [
//     // [1, 2],
//     // [3, 4],
//     // [5, 6],
//     [1, 2,3],
//     [3, 4, 5 ],
//     [5, 6, 6]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0 ; j < arr[i].length; j++)
//     console.log(arr[i][j]);
//   }

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

// 9. Write a JavaScript program to calculate the area(πr**2) and perimeter (2πr)of a circle. Go to the editor
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// Click me to see the solution

// function circle(radius) {
//     let circum = 2 * Math.PI * radius;
//     let area = Math.PI * radius ** 2;
//     return 'the circumference is ' + circum.toFixed(2) + ' and the area is '+ area.toFixed(2)
// }console.log(circle(5))

// 10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
// library.sort(function(a, b) {
//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//         return -1;
//     } if (a.title.toLowerCase() > b.title.toLowerCase()) {
//         return 1;
//     } return 0;
// });
// console.log(library.sort((a,b) => a > b))


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
var sort_by = function(field_name, reverse, initial){

    var key = initial ?
        function(x)
              {
                return initial(x[field_name]);
              } :
        function(x) 
              {
                return x[field_name];
              };
 
    reverse = !reverse ? 1 : -1;
 
    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
      } ;
 };
 
 
 var newobj = library.sort(sort_by('libraryID', true, parseInt));
 
 console.log(newobj);

// 11. Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
// Test Data :
// console.log(all_properties(Array));
// Array = ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
// // Click me to see the solution

// function all_properties()

// 12. Write a JavaScript function to parse an URL. Go to the editor
// Click me to see the solution

// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties. Go to the editor
// Click me to see the solution
function nameProps(obj) {
  return  Object.getOwnPropertyNames(obj) ;
}

// 14. Write a JavaScript function to retrieve all the values of an object's properties. Go to the editor
// Click me to see the solution
function val(obj) {
  return  Object.values(obj);
} 

// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs. Go to the editor
// Click me to see the solution

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys. Go to the editor
// Click me to see the solution

// 17. Write a JavaScript function to check whether an object contains given property. Go to the editor
// Click me to see the solution

// 18. Write a JavaScript function to check whether a given value is a DOM element. Go to the editor
// Click me to see the solution
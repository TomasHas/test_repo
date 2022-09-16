// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223
// Click me to see the solution

// function reverpass(num) {
//     return (
//         parseFloat(num.toString()
//             .split('')
//             .reverse()
//             .join('')
//         ) * Math.sign(num)
//     );
// }

//return (reverpass(-85403))


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// Click me to see the solution

// function palindrome(str) {
//   firstHalf = str.split('').slice(str[0],str.length/2);
//   secondHalf = str.split('').slice(str.length/2, ).reverse();
//  return (firstHalf);
//  return (secondHalf)
//     for (let i = 0; i<firstHalf.length; i++) {
//         if (firstHalf[i] === secondHalf[i]) {
//             return (str + ' is palindrome');
//         }
//     }
// }
//return (palindrome('ssmooadaoomss'));

// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// Click me to see the solution

// function combos(str) {
//  word = str.split('')
//  letters = '';
//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < word[i].length; j++) {
//         letters = word[i] + word[j];
//         }//return '\n';
//     }

// return letters
// }
//return (combos('dog'));

//return ('tomas')
//--------------------------------------

// function getCombn(arr, pre) {
//     pre = pre || '';
//     if (!arr.length) {
//         return pre;
//     }
//    let ans = arr[0].reduce(function(ans, value) {
//         return ans.concat(getCombn(arr.slice(1), pre + value));
//     }, []);
//     return ans;
// }


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
// Click me to see the solution

// function alpha(str) {
//   tell = str.split('').sort().join('');
//   return (tell)
//     return tell;

// } let huy= alpha('tomas')
//return (huy)
////-------------------------------

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// Click me to see the solution

// function caps(str) {
//     let arr = [];
//     let pom = str.split(' ')
//    return (pom)
//     for (let i = 0 ; i<pom.length; i++) {
//         arr.push(pom[i].charAt(0).toUpperCase() + pom[i].slice(1,))

//     }
//     return arr;
// }console.log(caps('the quick brown fox'))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// Click me to see the solution

// function long(str) {
//    word = '';
//     pom =str.split(' ')
//     for (let i = 0; i< pom.length ; i++) {
//         word = pom[i].length > word.length   ? pom[i] : word;
//     }
//  return word
// }
//return (long('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
// Click me to see the solution

// function count(str) {
//     vowels = [];
//     pom = str.split('')
//         for (let i = 0; i < pom.length ; i++) {
//             if (pom[i].match(/[aeiou]/i)) {
//                 vowels.push(pom[i].toUpperCase());
//             }
//         }
//         return vowels.length
// }return (count('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Click me to see the solution

// function prime(num) {
//     let isPrime = true;
//     if (num === 1) {
//        return ('num is 1. not prime mo fo')
//     } else {
//         if (num > 1) {
//             for ( let i = 2; i < num ; i++) {
//                 if (num % i === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }return isPrime;
//     }

// }console.log(prime(9))

// 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// Click me to see the solution

// function type(item) {
//  return typeof item ;
// }
//return (type('poop'));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. Go to the editor
// Click me to see the solution
// function matrix(n) {

//     var i;
//     var j;

//     for (i=0; i < n; i++)
//     {
//       for (j=0; j < n; j++)
//       {
//            if (i === j)
//            {

//              console.log(1);
//            }

//            else
//             {
//              console.log(0);}
//             }
//          console.log('----------');
//        }
//    }
// matrix(4);
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// Click me to see the solution.

// let unoarr= [1,32,5,34,67];
// function second(arr)  {

//   newArr = [];
//   arr.sort(function(a,b){return a-b});
//   one = arr[1];
//   two = arr[arr.length -2]

//   newArr.push(one);
//   newArr.push(two);

//   return  newArr

// }
//  console.log(second(unoarr))

// 12. Write a JavaScript function which says whether a number is perfect. Go to the editor
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
// Click me to see the solution.

// function perfect(num) {
//   result = num%2;
//   if (num === 0) {
//     return 'not perfect';
//   }
//   console.log(result)
//   if (result === 0) {
//     return result + ' perfect';
//   } else {
//   return 'not perfect';
// }
//   }
//   console.log(perfect(0))




// 13. Write a JavaScript function to compute the factors of a positive integer. Go to the editor
// Click me to see the solution.

// function compute(int) {

//   let factors = [];
//   for (let i = 0; i< int; i++) {
//     if (int % i === 0) {

//       factors.push(i);
//     } 
//   } return factors;
// }
// console.log(compute(12))

// 14. Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// Click me to see the solution.

// function coinCom(amount) {
//  console.log(amount)
//   if (amount === 0) { 
//     return 0;
//   } else if (amount > 25) {
//     return coinCom(amount-25)
//   } else if (amount > 10) {
//     return coinCom(amount-10);
//   }
//   }coinCom(88)


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor
// Click me to see the solution.
// function compute(b,n) {
//   return n**b
// }console.log(compute(7,3))

// 16. Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// Click me to see the solution.

// function unique_char(str1)
// {
//  var str = str1;
//  var uniql = "" ;
//  for (var x = 0 ; x < str.length ; x++) {

//     if(uniql.indexOf(str.charAt(x)) === -1 ) {

//       uniql += str[x];  

//     }
//   }
//   return uniql;  
// }  
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. Go to the editor
// Click me to see the solution.

// function occ(str) {
//   let letter = str.split('')
//   for (let i =0; i < letter.length ; i++) {
//     if (letter[i] )
//   }

// }console.log(occ('hello'))

////_____________________________--------------------------------
///______________________________________------------------------

// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Click me to see the solution. 
//
// 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor
// Click me to see the solution.

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Click me to see the solution.

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Go to the editor
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
// Click me to see the solution.

// 22. Write a JavaScript function that accepts two bla, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// Sample bla : 'w3resource.com', 'o'
// Expected output : 2
// Click me to see the solution

// 23. Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample bla : 'abacddbec'
// Expected output : 'e'
// Click me to see the solution

// 24. Write a JavaScript function to apply Bubble Sort algorithm. Go to the editor
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// Click me to see the solution

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// Click me to see the solution

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. Go to the editor
// Click me to see the solution

// 27. Write a JavaScript function that returns the longest palindrome in a given string. Go to the editor

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
// Click me to see the solution

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. Go to the editor
// Click me to see the solution

// 29. Write a JavaScript function to get the function name. Go to the editor
// Click me to see the solution
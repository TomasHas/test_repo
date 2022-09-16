// Promises have 3 stages:
//      Pending,  Fullfilled and Rejected
// Promises deliver ASYNC code. JS delivers SYNC code.

const myPromise = new Promise ((resolve, reject)=>{
const error = true;
if (!error) {
    resolve('Yes! resolved the promise');
} else {
    reject('no rejected te promise');
}
})
console.log(myPromise); 

myPromise.then(value => {
    return value +' '+ 1;
})
.then(newValue => {
    console.log(newValue)
})
.catch((err) => {
    console.log(err);
})

// let stocks = {
//     fruits: ['banana' , ' apple ', ' kiwi',  ' uva '],
//     liquid: [' ice ' , ' water '],
//     topps: [' choc ' , ' crap ', ' peas'],
//     holder: [' cup ' , ' plate ', ' stick ']

// };

// let is_shop_open = true;

// let order = (time, work) => {

//     return new Promise( (resolve, reject)=> {
//         if (is_shop_open) {
//            setTimeout( ()=>{
//                resolve( work() );
//         }, time);
//         }
//         else {
//             reject( console.log('our shop is closed'));
//         }
//     });
// };
// order(2000, ()=> { console.log(`${stocks.fruits[1]} was selected`)})

// .then( () =>{
//     return order(0000, () => {console.log('production has started')});
// })
// .then( () =>{ 
//     return order(2000, () => {console.log('the fruit is being chopped')
//     });
// })
// .then( () => {
//     return order(2000, () => {console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
// });
// })
// .then( () => {
//     return order(2000, ()=>{console.log('the machine was started')
// });
// })
// .then( ()=> {
//     return order(1000, () => {console.log(`${stocks.holder[1]} was selected`)
// });
// })
// .then( () => {
//     return order(1000, () => { console.log('the ice cream was served')
// });
// })

// .catch(()=>{
//     console.log('customer left');
// })

// .finally(()=>{
//     console.log('Day Ended. Shop is closed')
// })

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    }
    else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
     records[id][prop] = [value];
    }
     else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
     }
     else if (value = '') {
       delete records[id][prop];
     }
  
  return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', "ABBA");
  

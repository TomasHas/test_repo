// function one (call_2, call_3) {
//     console.log(' step 1 ');
//   call_2();
//   call_3();
// }
// function two () {
//     console.log(' step 2 ');
    
// }
// function three () {
//     console.log(' step 3 ');
// }

// function four () {
//     console.log(' step 4 ');
// }
// function five (call_four) {
//     console.log(' step 5 ')
//     call_four();
// }
// one(two,three);
// four();
// five(four);

// SYNTAX
// firstFunction(param, function() {
//     do stuff
//     secondFunction(param, function() {
//         do stuff
//         thirdFunction(param, function {

//         })
//     })
// }

let stocks = {
    fruits: ['banana' , ' apple ', ' kiwi',  ' uva '],
    liquid: [' ice ' , ' water '],
    topps: [' choc ' , ' crap ', ' peas'],
    holder: [' cup ' , ' plate ', ' stick ']

}

let order = (fruit_name, call_production) => {
    
    setTimeout (() => {
        console.log(`Order of${stocks.fruits[fruit_name]} was placed`);
     
     call_production();
    
    
    }, 2000)
    
};

let production = () => {

    setTimeout(() => {
        console.log('production started.')
        setTimeout(()=> {
            console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
            setTimeout(()=>{
                console.log('start the machine');
                setTimeout(()=>{
                    console.log(`add ${stocks.topps[0]}`);
                }, 2000)

            },3000)
        },2000)     
    }, 0000)
};
order(2, production);
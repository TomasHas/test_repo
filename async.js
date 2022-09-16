
let stocks = {
    fruits: ['banana' , ' apple ', ' kiwi',  ' uva '],
    liquid: [' ice ' , ' water '],
    topps: [' choc ' , ' crap ', ' peas'],
    holder: [' cup ' , ' plate ', ' stick ']

};

let is_shop_open = true;

// let order = () => {
//     return  new Promise( (resolve, reject)=>{
//         if(true) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     } )
// }

async function order () {
    try {
        await abc;
    } catch(error) {
        console.log('abc doesnt exist', error);
    } finally {
        console.log('runs anyways');
    }
}
order();
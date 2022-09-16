let stocks = {
    fruits: ['banana' , ' apple ', ' kiwi',  ' uva '],
    liquid: [' ice ' , ' water '],
    topps: [' choc ' , ' crap ', ' peas'],
    holder: [' cup ' , ' plate ', ' stick ']

};

let is_shop_open = false;

function time(ms) {
    return new Promise( (resolve, reject) => { 
        if (is_shop_open) {
            setTimeout( resolve, ms)
        }
        else {
            reject(console.log('shop is closed'))
        }
    });
}
async function kitchen() {
  try{
      await time(2000)
      console.log(`${stocks.fruits[0]}`)

      await time(2000)
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)

      await time (2000)
      console.log('the machine was started')
    
      await time(1000)
      console.log(`the ${stocks.holder[0]} was chosen`)
      await time(1000)
      console.log(`${stocks.topps[1]} topping was selected`)

      await time(1000)
      console.log('icecream was served')
  }
  catch(error){
      console.log('customer left', error)
  }
  finally{
      console.log('the day has ended');
  }
}
kitchen();

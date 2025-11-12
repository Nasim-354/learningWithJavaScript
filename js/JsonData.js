const product = {
    name:'hardware',
    price:20,
    items:{
        oil:'olive'
    
    }
}
const Stringify = JSON.stringify(product);
console.log(Stringify)

const objectConverter = JSON.parse(Stringify);
console.log(objectConverter) 

// promise create
const foodOder = new Promise((resolve, reject)=>{
    const ready = false;
    if(ready){
        resolve("Working done");
    }
    else{
        reject("working is reject");
    }
})
console.log(foodOder);
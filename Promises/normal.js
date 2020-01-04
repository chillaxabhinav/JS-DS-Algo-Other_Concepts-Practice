const myPromiseObj = new Promise((resolve,reject)=>{
    resolve('This is promise resolution');
    reject('This is in error');
})

// async function me(){
//     try {
//         const my = await myPromiseObj;
//     }
//     catch(e) {
//         console.log('I am in error');
//         console.log(e);
//     }
// }
// me();

myPromiseObj.then((response)=>{
    console.log(response);
}).catch(()=>{
    console.log(error);
})

myArray = [1,2,3,4,5,6];

// const normal = myArray.filter((ele)=>{
//     return ele>1;
// })
// console.log(normal);

Array.prototype.myFilter = function(myFunc){
    const first = this.map(myFunc);
    const result = new Array();
    first.forEach((ele,index)=>{
        if(ele){
            result.push(this[index]);
        }
    })
    return result;
}


const resultant = myArray.myFilter((ele)=>ele>=3);
console.log(resultant);


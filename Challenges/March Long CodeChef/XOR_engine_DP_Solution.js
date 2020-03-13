let sequenceA = ['4', '2', '15', '9', '8', '8'];
let query = 3;
let memoization ={};
let ans = sequenceA.map((ele) => {
    return parseInt(ele) ^ query;
});
let even = 0;
let odd = 0;
console.log(memoization);
ans.forEach((ele,index)=>{
    let noOfOne = 0;
    let binary = ele.toString(2);
    let toProcess1 = `"${String(query)} ${String(sequenceA[index])}"`;
    let toProcess2 = `"${String(sequenceA[index])} ${String(query)}"`;
    if(memoization.hasOwnProperty(toProcess1)){
        if(memoization[toProcess1]){
            even++;
        }
        else{
            odd++;
        }
    }
    else{
        for (let i = 0; i < binary.length; i++) {
            if (binary.charAt(i) == '1') {
                noOfOne++;
            }
        }
        if (noOfOne % 2 == 0) {
            even++;
            memoization[toProcess1] = true;
            memoization[toProcess2] = true;
        }
        else {
            odd++;
            memoization[toProcess2] = false;
            memoization[toProcess1] = false;
        }
    }
    
});
console.log(even,odd);
let sequenceA = ['4', '2', '15', '9', '8', '8'];
let query = 1;
let ans = sequenceA.map((ele) => {
    return (parseInt(ele) ^ query).toString(2);
});
console.log(ans);
let even = 0;
let odd = 0;
ans.forEach((ele)=>{
    let noOfOne = 0;
    for(let i=0;i<ele.length;i++){
        if(ele.charAt(i)=='1'){
            noOfOne++;
        }
    }
    if (noOfOne % 2 == 0) {
        even++;
    }
    else {
        odd++;
    }
});
console.log(even,odd);
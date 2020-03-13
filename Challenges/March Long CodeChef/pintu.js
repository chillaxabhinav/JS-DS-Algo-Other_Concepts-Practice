let input1 = '1 2 3 3 2 2';
let input2 = '7 3 9 1 1 1';
let first = input1.split(' ');
let second = input2.split(' ');

let myObj = {};
first.forEach((ele,index) =>{
    if(!myObj[ele]){
        myObj[ele] = parseInt(0);
        myObj[ele] = parseInt(myObj[ele]) +  parseInt(second[index]);
    }
    else{
        myObj[ele] = parseInt(myObj[ele]) + parseInt(second[index]);
    }
})

let ans = Object.values(myObj);
console.log(Math.min(...ans));
//console.log(ans);


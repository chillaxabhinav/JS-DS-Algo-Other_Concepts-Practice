// myarray = [1,2,3,4];

// const maybe = myarray.map((ele)=>{
//     return ele*2;
// })
// console.log(maybe);
// console.log(myarray);

// myarray.splice(1,2,21,22);
// console.log(myarray);

// myarray = [1,2,3,4];
// const maybe = myarray.filter((ele)=>{
//     return ele>3;
// })
// console.log(maybe);
// console.log(myarray);

// myarray = [1,2,3,4];
// console.log(...myarray);

// obj = {
//     name : {
//         firstname : 'Abhinav',
//         lastname : 'Singh'
//     },
//     city : 'moradabad'
// }

// obj2 = [{name: 'Abhinav'},{last: 'Singh'}];
// const myobj = {...obj2[0]};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
//console.log(myobj);
// console.log(myobj);


// function me(first,second){
//     console.log(first,second);
// }
// myobj = {name : 'Abhinav',last :'Singh'};
// console.log({...myobj});


// Polyfill Filter below


// Array.prototype.myFilter = function(myFunc){
//     let result = new Array();
//     let me = new Array();
//     me = this.map(myFunc);
//     me.forEach((ele,index)=>{
//         if(ele){
//             result.push(this[index]);
//         }
//     })
//     console.log(result);
// }

// myarray = [1,2,3,4];
// const my = myarray.myFilter((ele)=>ele>1);


// class my {
//     first = 'Abhinav';
//     second = 'Singh';
//     myfunc(){
//         console.log('I am inside class function called myfunc');
//     }
// }

// const me = new my();
// console.log(me.myfunc());

// const my = ()=>{
//     console.log('This is my func');
// }
// console.log(my);
// console.log(typeof(my));

// class myclass{
//     constructor() {
//         console.log(this);
//     }
//     first = 'first';
//     second = 'second';
//     static myfunc(){
//         console.log('This is function of myclass');
//     }
// }

// const myobj = new myclass();

// myclass.prototype.myclassfunc = function(){
//     console.log('this is myclassfunc');
// }

// class mysecond extends myclass{
//     constructor(){
//         super();
//         console.log(this);
//     }
//     third = 'third';
//     mysecondfunc(){
//         console.log('This is mysecond func');
//     }
// }

// const myobj = new mysecond();

// const myobj = new myclass();

// Function Constructors

// const myclass = function(first,second){
//     this.first = first;
//     this.second = second;
//     my = function(){
//         console.log(myprop);
//     }
//     console.log(this);
// }
// myclass.prototype.myprop = function(){
//     console.log('I am prototype');
// }

// const myobj =  new myclass('Ahinav','Singh');


class check{
    constructor(){
        console.log(this);
    }
    first = 'Abhinav';
    second = 'Singh';
    static myfunc(){
        console.log('Myfunc of class');
    }
}

const myobj = new check();
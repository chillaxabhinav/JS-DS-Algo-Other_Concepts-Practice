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


// class check{
//     constructor(){
//         console.log(this);
//     }
//     first = 'Abhinav';
//     second = 'Singh';
//     static myfunc(){
//         console.log('Myfunc of class');
//     }
// }

// const myobj = new check();

// const me = 'Abhinav';
// for (let p of me){
//     console.log(p);
// }

// for(let i =0 ; i<me.length; i++){
//     console.log(me[i]);
// }

// const myarray = new Array();
// myarray.push(1);
// myarray.push(2);
// myarray.me = 'Abhinav';
// console.log(myarray);

// for(let p in myarray){
//     console.log(p);
// }

// class myclass {
//         first =[1, 2, 3];
//         second = 'Abhinav';
//         third = ()=>{
//             console.log('mr');
//         }
// }

// const myobj = new myclass();

// const me = myobj.third;
// me();

// const me = {
//     first : 'Abhinav',
//     second : 'singh',
//     class : 'B.Tech'
// }
// console.log(me[first]);

// for (let p of myobj){
//     console.log(p);
// }



// const arr = new Array();
// arr.push(1);

// class myclass{
//     constructor(){
//         console.log(this);    }
//     me = 'Abhinav';
//     my(){

//     };
//     second = ()=>{

//     }
// }
// myclass.prototype.myprop = 'Singh';

// class sec extends myclass{
//     constructor(){
//         super();
//         console.log(this);
//     }
//     see(){

//     }
// }

// class thir extends sec{
//     constructor(){
//         super();
//         console.log(this);
//     }
// }

// thir.prototype.some = 'some';

// const myobj = new thir();
// console.log(myobj);


// Object call recursivey below to traverse in a nested object 


// const myobj = {
//     name : 'Abhinav',
//     last : 'singh',
//     address : {
//         street : 'Line par',
//         area : 'Station area'
//     },
//     mylast : 'mylast' 
// }



// function ite(obj,keys){
//     for (let key of keys){
//         if(typeof(obj[key])==='object'){
//             ite(obj[key],Object.keys(obj[key]))
//         }
//         else{
//             console.log(obj[key]);
//         }
//     }
// }

// ite(myobj,Object.keys(myobj));


// ==== Function call and closures === //

// function me(){
//     const myanswer = 'I am my answer';
//     return () => {
        
//         return myanswer;
//     }
// }

// function second(){
//     const myanswer = me()();
//     console.log(myanswer);
// }

// second();


// class mysecond {
//     myproperty = 'Singh';
// }


// class myclass{
//     myprop = console.log(this);
//     mysecond = this.myprop;
//     mybox = {
//         myprop : console.log(this),
//         myfunc : () => console.log(this),
//         myreg : function(){console.log(this)}
//     }
//     myfunc(){
//         console.log(this);
//         return () => {
//             console.log(this);
//         }
        
//     }
//     myfunc2 = () => {
//         console.log(this);
//         return () => {
//             console.log(this);
//         }
//     }
// }

// const myobj = new myclass();
// const mysec =  new mysecond();
// myobj.myfunc2.call(mysec)();
// const sec =  new mysecond();
// const myobj = new myclass();
// myobj.mybox.myprop;
// myobj.mybox.myreg();
// const myf = myobj.myfunc.call(sec)();


// const box ={
//     color : console.log(this)
// }

// box.color;


// const box = {
//     color : 'green',
//     myprop : function(){console.log(this.color)},
//     boxfunc : () =>{console.log(this.color)}
// }
// box.myprop();
// box.boxfunc.call(box);

// const me = {
//     first : 'fir',
//     second : 'sec'
// }
// const check = 'fir';
// if(check in me){
//     console.log('I am checked');
// }


// const me = '1';
// const mynumber = '12345.3445';

// console.log(Number(me));
// console.log(parseFloat(mynumber).;
// console.log(mynumber.toString());

// const myarr = [1,2,3,5];
// const num =4;
// const show = myarr.sort();
// console.log(show);


// console.log('This is my console');

// let myobj = {
//     firstname : 'Abhinav',
//     lastname : 'Singh',
//     roll : 2016007
// }

// console.log(myobj.hasOwnProperty('firstname'));

// let mynew = {};

// const myarr = [1,2,3];

// for(let i in myarr){
//     mynew[myarr[i]]=String(myarr[i]);
// }
// console.log(mynew);

// const myarray = [1,2,3,-4,-3,-2];
// const myNew = myarray.sort();
// console.log(myNew);

// for(let i in myNew){
//     for(let j of myNew){
//         if(myNew[i] + j == 0){
//             const arr = new Array();
//             arr.push(myNew[i]);
//             arr.push(j);
//             console.log(arr);
//             break;
//         }
//     }
//     break;
// }


// // let myarray = [1,1,1,2,3,3,4,5,6,6,7,7,7,9];
// // let i = 0;
// // let j = 1;
// // while(j<myarray.length){
// //     if(myarray[i] == myarray[j]){
// //         j++;
// //     }
// //     else {
// //         i++;
// //         myarray[i] = myarray[j];
// //         j++;
// //     }
// // }
// // console.log(i+1);

// // let myarr = [1,2,3,4,5,6,7,8,9,10];

// // console.log(myarr.slice(0,5));

// // let myarr = [-1,-4,-3,-2,1,2,3,8,5];
// // console.log(myarr.sort());

// // let myarr = ['Abhi','Singh','Ubisoft','EA','Sprinklr'];

// // let sec = [1,10,9,5];

// // console.log(myarr.sort((a,b)=>b.length - a.length));

// // let myarr = new Array();
// // myarr[0] = [];
// // console.log(myarr);
// // myarr.push(34);
// // myarr[0].push(56);
// // console.log(myarr[0]);

// // const myarray = [10,20,30,40];
// // let my = myarray.pop();
// // console.log(my[4]);


// let scores = {
//     X : [{node : "A",weight : 10},{node : "B",weight : 20}],
//     Y: -1,
//     tie:0
// }


// // let myarr = [34,01,90,99];
// // myarr.forEach((ele,index,myarr) => {
// //     console.log(`element -> ${ele}`);
// //     console.log(`index -> ${index}`);
// //     console.log(`Array -> ${myarr[0]}`)
// // })

// // let myNew = myarr.map((ele,index)=>{
// //     return index;
// // })
// // console.log(myNew);

// // let myFilter = [51,34,67,100,110,11,98,7,23];
// // let so = myFilter.filter((ele)=> {
// //         return ele>40;  
// // });


// let my = [
//     {
//         node : 10,
//         visited : true
//     },
//     {
//         node : 20,
//         visited : false
//     },
//     {
//         node : 30,
//         visited : true
//     },
//     {
//         node : 40,
//         visited : false
//     },
//     {
//         node : 50,
//         visited : true
//     },
//     {
//         node : 60,
//         visited : false
//     },
//     {
//         node : 70,
//         visited : true
//     },
//     {
//         node : 80,
//         visited : false
//     },
//     {
//         node : 90,
//         visited : false
//     },
//     {
//         node : 100,
//         visited : true
//     }
// ];

// let shut = my.sort((a,b)=>a.visited - b.visited);
// console.log(shut);



//let myarr = [3,1,4,1,5,9];
// let fre = {};

// myarr.forEach(ele => {
//     if(fre.hasOwnProperty(ele)){
//         fre[ele] = fre[ele]  + 1;
//     }
//     else{
//         fre[ele] = 1;
//     }
// })
// myarr.sort((a,b)=>a-b);
// console.log(myarr);
// let count = 0;

// for(let i=0;i<myarr.length;i++){
//     if(myarr[i] != myarr[i+1]){
//         count++;
//     }
// }
// console.log(count);


//for()








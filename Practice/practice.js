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

// window.addEventListener('resize', ()=>{
//     console.log('resized');
//     console.log(window.innerWidth);
// })


// window.addEventListener('resize', () => {
//     let width = window.innerWidth;
//     console.log(width);
//     if (width <= 1382) {
//         document.querySelector('.main-sidebar-div').style.display = 'none';
//         document.querySelector('.main-content-div').classList.remove('col-lg-11');
//         document.querySelector('.main-content-div').classList.add('col-lg-12');
//         if (width <= 672) {
//             document.querySelector('.main-content-left').classList.remove('col-lg-7');
//             document.querySelector('.main-content-left').classList.add('col-lg-12');
//             document.querySelector('.main-content-right').classList.remove('col-lg-5');
//             document.querySelector('.main-content-right').classList.add('col-lg-12');
//         }
//         else {
//             document.querySelector('.main-content-right').classList.remove('col-lg-12');
//             document.querySelector('.main-content-right').classList.add('col-lg-7');
//             document.querySelector('.main-content-left').classList.remove('col-lg-12');
//             document.querySelector('.main-content-left').classList.add('col-lg-12');
//         }
//     }
//     else {
//         document.querySelector('.main-sidebar-div').style.display = 'block';
//         document.querySelector('.main-content-div').classList.remove('col-lg-12');
//         document.querySelector('.main-content-div').classList.add('col-lg-11');
//     }
// })


// let my = new Set(['123451','my']);
// console.log(my.entries());
// console.log(my);


// let myarr = [1,2,3];
// let some = '';
// let processed = myarr.map(ele => {
//     some = some + ' ' + String(ele);
// });
// let myset = new Set();
// myset.add(some);
// console.log(myset);

// let myset = new Set('hbAinavAbhinav'); 
// // console.log(myset.size);
// let tocheck = "1 2";
// tocheck = tocheck.split(' ').map(ele => parseInt(ele));
// console.log(tocheck);

// const myarr = [5,4,3,2,1,10];
// myarr.sort((a,b) => a-b);
// let a = 0.1;
// let b = 0.3;
// console.log(a,b);
// let my = 'Abhinav';
// let second = my.concat();
// console.log(second);

// let fruits = [2,3,1,4,5,6];

// //console.log(fruits);

// class my{
//     c = 10;
//     constructor(a,b) {
//         this.a = a;
//         this.b = b;
//     }

// }



// const body = [];

// body.push(10);
// body.push(20);
// console.log(body);

// const one = 'one';
// const sec = 'second';
// const third = 'third';
// const fourth = 'fourth';
// setTimeout(()=>console.log('my set timeout 1'),2);
// //window.setImmediate(()=>console.log('This is my set immediate !'));
// window.setTimeout(()=>console.log('my set timeout 2'),0);
// const five = 'five';
// const six = 'six';
// const seventh = 'seventh';
// const eigth = 'eigth';
// console.log(one);
// console.log('Code executed');
// console.log(sec);
// console.log(third);
// console.log(fourth);
// window.setTimeout(()=>console.log('set timeout 0.5'),0.5);
// console.log(five);
// console.log(six);
// // console.log(seventh);

// const my = {
//     get : () => {return 37},
//     set : () => {return 50}
// }
// console.log(my.get());

// function my (so){
//     console.log(this.a,this.b);
//     console.log(so);
// }


// const myobj = {
//     a : 'Apple',
//     b : 'ball',
//     c : 'cat'
// }

// const soy = ['this is','something big'];
// my.call(myobj,...soy);



// document.querySelector('.tocheck').addEventListener('click',()=>{
//     console.log('This is button click');
// });

// let i=1000000;

// while(i--){
//     // so this will keep the script running
// }

// console.log('Running finished');

// let i=2;
// try {
//     if(i!==1){
//         throw new error('Some error');
//     }
//     console.log('I am in try');
//     undef();
// }
// catch(e){
//     console.log(e);
// } finally{
//     console.log('This part always runs even after error occurs');
// }

// console.log('...I am back in main execution');



// let my = new Promise((res,rej) => {
//     res({my : 'This is my', some :'This is some'});
//     rej({error : 'This is error'});
// });

// my.then((response)=>{
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })


// async function mysy(){
// //     let data = await fetch('http://');
// //     data.catch(error => {
// //         console.log('Some error');
// //     })
// // }
// mysy();

// function my(){
//     return new Promise((resolve,reject) => {
//         resolve({data : 'data'});
//         //reject({error : 'error'});
//     })
// }

// // my().then((data) => {
// //     console.log(data);
// // }).catch((err)=>{
// //     console.log(err);
// // })

// // async function so(){
// //     try{
// //         let data = await my();
// //         console.log(data);
// //     }
// //     catch(e){
// //         console.log(e);
// //     }
// // }

// // so();
// my().then(data => {
//     console.log(data);
// })

// console.log('Script ends');

// console.log('Script ends');


// console.log('Script ends');

// console.log('Script ends');


// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');



// setImmediate(() => console.log('my setImmediate'));

// setTimeout(()=>{console.log('my SetTimeout')},0);


// console.log('Script ends');

// console.log('Script ends');


// console.log('Script ends');

// console.log('Script ends');


// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// console.log('Script ends');

// let myfirst = '30';
// let second = 'Abhiz';

// let some = 29;

// // if(myfirst >= second){
// //     console.log('Abhinav is more than Abhiz');
// // }
// // if(second >= myfirst){
// //     console.log('Abhiz is more than abhinav');
// // }

// if(myfirst >= 29){
//     console.log('Abhinav is more than 29');
// }
// if(29 >= myfirst){
//     console.log('29 is more than Abhinav');
// }

// const http = require('http');

// function func(req,res){

// }

// const server = http.createServer(func);

// server.listen();

// let myarr = [1,1,2,3,4];

// let second = [2,3];

// let someother = {
//     my : 'Abhinav',
//     name : 'Singh'
// }

// if(myarr >= second){
//     console.log('surprise');
// }
// if(second >  myarr){
//     console.log('again');
// }

// if(myarr >= someother){
//     console.log('arr greater than someother');
// }
// if(someother > myarr){
//     console.log('Someother is greater than arr');

// function me(first,second){
//     console.log(arguments.length);
// }
// let my = {
//     1: 1,
//     2: 2,
//     3 : 3
// }

// console.log(my[4]);




// Object.compare = function (obj1, obj2) {
//     //Loop through properties in object 1
//     for (var p in obj1) {
//         //Check property exists on both objects
//         if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
//         switch (typeof(obj1[p])) {
//             //Deep compare objects
//             case 'object':
//                 if (!Object.compare(obj1[p], obj2[p])) return false;
//                 break;
//             //Compare function code
//             case 'function':
//                 if (typeof(obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
//                 break;
//             //Compare values
//             default:
//                 if (obj1[p] !== obj2[p]) return false;
//         }
//     }

//     //Check object 2 for any extra properties
//     for (var p in obj2) {
//         if (typeof(obj1[p]) === 'undefined') return false;
//     }
//     return true;
// };


// class myclass{
//     constructor(){
//         this.so=10;
//     }
// }
// let my = new myclass();

// console.log(typeof(my));

// let myarr = [1,2,3,4];

// function check(){
//     console.log('Checking');
// }

// let another = () => {
//     console.log('Checking');
// }

// if(typeof(myarr)==='object'){
//     console.log('Working');
// }

// if(typeof(check) === 'function'){
//     console.log('working');
// }

// if(typeof(another)==='function'){
//     console.log('All Working');
// }

// let some1 = () =>{
//     console.log('yup');
// };

// let some1to = some1.toString();


// let my = [1,2,3,false,0];
// let sec = [1,2,3,false,0];

// let ans = Object.compare(some1,some1);
// console.log(ans);

// if(typeof(my)==='object'){
//     console.log('Code runs fine');
// }
// let some = 1;
// if(typeof(some)==='object'){
//     console.log('Sucks');
// }
// if(typeof(some)!='object'){
//     console.log('cool');
// }


// let yo =  new Response();

// console.log(`this is response ${typeof(yo)}`);



// document.title = 'message from webpage';

// alert('This is title','This is a palindrome');

// let left = {some : Infinity};
// console.log(typeof(left.some));
// if(isFinite(left.some)){
//     console.log('I fail');
// }
// console.log(isFinite(left.some));

// let some = {else : 'Abhinav'};
// // if(isFinite(some)){
// //     console.log('This works');
// // }
// if(true){
//     console.log(some.hasOwnProperty('name'));
// let some = [0,2,3,4];

// let yup = some.findIndex(ele => ele===100);
// console.log(yup);



// delete test[1];

// console.log(test);

// for(let i in test){
//     test[i] = test[i].filter(ele => ele !== 1);
// }
// console.log(test);


// const domes = require('domes.js');

// let my = new domes.Stack();
// my.push(2)
// console.log(my.toArray());

// const products = [];

// class Product{
//     constructor(title) {
//         this.title = title;
//     }

//     save(){
//         products.push(this);
//     }

//     static fetchAll(myobj){
//         return myobj.title;
//     }
// }

// let one = new Product({title : 'One'});
// one.save();
// let two = new Product({title : 'two'});
// two.save();

// console.log(products);
// console.log(Product.fetchAll(one));


// function yup(fir, sec){
//     this.first = fir,
//     this.second = sec
// }

// const yo = new yup(1, 2);
// console.log(yo);


const another = () => {

    console.log('This is my function');
}
 
const yo = () =>{
    console.log('This is my function');
}

console.log(_.isEqual(yo, another));

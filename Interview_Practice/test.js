// my();

// var yo;



// function my(){
//     yo = "yo";
// }


// console.log(typeof undefined);



// // let me = () => {
// //     console.log("me");
// // }

// // console.log(typeof me)


// let animal = {
//     my : 'one',
//     sec : 'second'
// }


// function Circle(rad){
//     this.radius = rad;

//     this.draw = function(){
//         console.log("Drawing");
//     }

//     let my = () => {
//         console.log("Yo");
//     }
// }


// Circle.prototype.me= "me";


// function Cat(rad){
//     Circle.call(this, rad);
//     this.breed= "breed";
// }

// // Cat.prototype = Object.create(Circle.prototype);
// Object.setPrototypeOf(Cat.prototype, Circle.prototype);
// Cat.prototype.constructor = Cat;

// const myCat = new Cat(5);

// Object.defineProperty(myCat,'key', {
//     value : 'yo',

// })


// const myCar = {
//     yo : 'Abhinav'
// }

// console.log(Object.assign({}, myCar));


// const arr = [1,2,3,4,5,6,7];

// // arr.push(...[5,6,7]);

// // const myarr = [];

// // console.log(arr.splice(-2,2,8,9,10));

// // // console.log(arr);

// // const arr = [1,2,3];


// // 

// const mynew = arr.reverse();

// let str = "test";

// console.log(str.split(''));


// let myObj = {
//     test : "test"
// }

// let ans = Object.create(myObj,{
//     my : {value : "my"}
// });


// const target = {
//     tar : 'tar'
// }

// // target.__proto__.yo = "yo";

// const test = {
//     testObj : "testObj"
// };

// // test.__proto__.letsee = "letsee";

// // Object.setPrototypeOf(target, myObj);

// target.__proto__ = test;

// console.log(target);

// console.log(test);

// console.log({});

// const sortIncreasing = (a, b) => {
//     if(a > b || a==b){
//         return 1;
//     }
//     else if(a < b){
//         return -1;
//     }
// }

// const sortDecreasing = (a, b) => {
//     if(a < b || a==b){
//         return 1;
//     }
//     else if(a > b){
//         return -1;
//     }
// }   

// console.log(arr.sort(sortDecreasing));


// const my = [ {
//     first : 'first'
// }, {
//     second : 'second'
// } , {
//     third : 'third'
// }];


// let value = my.reduce((finalObj, item, index) => {
//     finalObj[index] = item; 
//     return finalObj;
// });

// console.log(value);


// let my = {
//     first : 'first123',
//     second : 'second123'
// }

// console.log(Object.keys(my));

// console.log(Object.values(my));

// console.log(Object.entries(my));

// let yo = {};

// yo[1] = 'one';
// yo['1'] = "strpone";

// console.log("yo ", yo['1']);

// const map = new Map(Object.entries(yo));

// map.set(2,'second');

// let myarr = [];

// for(let i of map.entries()){
//     console.log(i);
// }

// map.forEach((value, key,) => {
//     console.log(value, key);
// })



// let set = new Set([1,2,3,4,4,4]);
// // console.log(set);

// // console.log(set.delete(1));

// // console.log(set.clear());


// for(let i in set){
//     console.log(i);
// }

// document.getElementById('first').addEventListener('click', function(e){
//     console.log(this, " ", e.target);

// }, true)


// document.getElementById('second').addEventListener('click', function(e){
//     console.log(this," ", e.target);
// }, true)


// const myPromise = Promise.resolve("first resolved");

// const secondPromise = new Promise((resolve, reject) => {
//     resolve("Second resolved");
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     resolve("Third resolved");
// })

// async function my(){
//     const yo = await myPromise;
//     console.log(yo);
// }

// my();

// Promise.race([myPromise, secondPromise, thirdPromise]).then((values) => {
//     console.log(values);
// });

// console.log("I am after promise");

// Currying

// function sum(first){
//     return (second) => {
//         return (third) => {
//             return (first + second + third);
//         }
//     }
// }

// const second = sum(1);

// const third = second(2);

// const answer = third(3);

// console.log(answer);


// const sum = (first, second) => {
//     console.log(first);
//     console.log(second);
//     return first+second;
// }

// const second = sum.apply(this,[1,2]);

// const ans = second.call(this, 2);

// console.log(ans);

// function my(first,...rest){
//     console.log(first);
//     console.log(rest);
// }

// let myarr = [1,2,3];

// my(...myarr);


// let outside = "outside";

// let my = (function(outside){
//     // console.log("I am here");

//     console.log(outside);

//     const another = () => {
//         console.log("I am another");
//     }

//     return {
//         some : "some",
//         func : () => another()
//     };
// })(outside);


// my.func()


// ======================== DOM Manipulations ============================ //

// console.log(document.getElementsByTagName('h1')[0]);

// const my = document.createElement('h1');
// my.textContent = "I am new h1";

// console.log(document.getElementById('second').getRootNode());

// document.getRootNode()


// ===================== Traverse the DOM ======================= //







const myQueue = [];

function bfs(element){
    const childElements = element.children;
    for(let i = 0 ; i < childElements.length; i++){
        myQueue.push(childElements[i]);
    }
    if(myQueue.length > 0){
        let element = myQueue.shift();
        console.log(element);
        bfs(element);
    }
    else{
        return;
    }
}

bfs(rootElement);
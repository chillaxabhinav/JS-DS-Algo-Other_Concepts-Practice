// ============= Testing Area ================ //

const domes = require('../../Domes.js');

// let my = new domes.SinglyLinkedList();



// let num1 = 100;
// let str1 = 'sample';
// let obj = {name : 'sample',language : 'Language'};
// let nestedObj = {
//     name : {
//         first : 'sample1',
//         last : 'sample2'
//     },
//     language : 'js',
//     frameworks : {
//         frontend : {
//             first : 'React',
//             second : 'Redux',
//             third : 'Next.js'
//         },
//         backend : {
//             first : 'node.js',
//             second : 'Django'
//         }
//     }
// };


// // let nestedObj2 = {
// //     name: {
// //         first: 'sample1',
// //         last: 'sample2'
// //     },
// //     language: 'js',
// //     frameworks: {
// //         frontend: {
// //             first: 'React',
// //             second: 'Redux',
// //             third: 'Next.js'
// //         },
// //         backend: {
// //             first: 'node.js',
// //         }
// //     }
// // };



// let another = new domes.SinglyLinkedList();
// // another.insertAtEnd(100);

// let array1 = [10,20,30,40,50];
// let array2 = [10, 20, 30, 40, 50];
// let yup = () =>{
//     console.log('yup');
// }
// let num2 = 200;
// let str2 = 'sum';

// let arrobj = [{first : 'first'},{second : 'second'},{third : {fourth : 'fourth',fifth : undefined}},{sixth : null}];

// let arrobj2 = [{ first: 'first' }, { second: 'second' }, { third: { fourth: 'fourth', fifth: undefined } },{sixth : null}];

// my.insertAtEnd(num1);
// my.insertAtEnd(str1);
// my.insertAtEnd(obj);
// my.insertAtEnd(nestedObj);
// my.insertAtEnd(another);
// my.insertAtEnd(array1);
// my.insertAtEnd(yup);
// my.insertAtEnd(num2);
// my.insertAtEnd(str2);
// my.insertAtEnd(arrobj);
// // my.insertAtEnd(triple);
// let triple = new domes.DoublyLinkedList();

// let store = my.search(arrobj2);
// console.log(store);

let my = new domes.Queue();

my.enqueue(10);
my.enqueue(20);
my.enqueue(30);
my.enqueue(40);

console.log(my.dequeue());

console.log(my.dequeue());


console.log(my.peek());
// console.log(my.dequeue());
console.log(my);
// ====== Typed Arrays ===== //

let myTypedArray1 = new Int8Array(8);
let myTypedArray2 = new Uint8Array(8);
let myTypedArray3 = new Uint8ClampedArray(8);

let myTypedArray4 = new Int16Array(16);
let myTypedArray5 = new Uint16Array(16);

let myTypedArray6 = new Int32Array(32);
let myTypedArray7 = new Uint32Array(32);

let myTypedArray8 = new Float32Array(32);
let myTypedArray9 = new Float64Array(64);

myTypedArray1[0]= 123;
// console.log(myTypedArray);


// ===== Set ===== //


let mySet = new Set();

mySet.add(12);
mySet.add(23);
mySet.add('myValue');
mySet.add('yo');
// console.log(mySet);

// mySet.forEach(val => {
//     console.log(val);
// })
// console.log(mySet.entries());



// ===== WeakSet ===== //


let myWeakSet = new WeakSet();

let one = {
    my : 'my'
};

let second = {
    my : 'my'
};

myWeakSet.add(one);
myWeakSet.add(second);
//myWeakSet.add({third : 'third'});
// console.log(myWeakSet.length);


// ===== Map ===== //

let myMap = new Map([['one','myone'],['two','mytwo']]);
myMap.set('mykey','myvalue');


// console.log(myMap.size);

// for(let i of myMap){
//     console.log(i);
// }






// ===== WeakMap ===== //

let myWeakMap = new WeakMap();

let key1 = {
    id : 1
};
let value1 = {
    value1 : 'value1'
};

let key2 = {
    id : 2
};
let value2 = {
    value2 : 'value2'
};

myWeakMap.set(key1,value1);
myWeakMap.set(key2,value2);
myWeakMap.set(value1, key1);
myWeakMap.set(value2, key2);
console.log(myWeakMap);
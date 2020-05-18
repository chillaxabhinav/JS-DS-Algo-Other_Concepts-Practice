const lodash = require('lodash');

const another = () =>{
    console.log('This is my function');
}

const my = () => {
    console.log('This is my function');
}

console.log(lodash.isEqual(another, another));
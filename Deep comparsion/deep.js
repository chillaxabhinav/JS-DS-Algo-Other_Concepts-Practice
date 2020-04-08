function comparator(obj1, obj2) {
    if (typeof (obj1) === 'function' && typeof (obj2) === 'function') {
        if (obj1.toString() == obj2.toString()) {
            return true;
        }
        else {
            return false;
        }
    }
    else if ((typeof (obj1) !== 'function' && typeof (obj2) === 'function') || (typeof (obj1) === 'function' && typeof (obj2) !== 'function')) {
        return false;
    }
    else if(typeof(obj1)==='number' && typeof(obj2)==='number'){
        if(obj1 === obj2){
            return true;
        }
        else{
            return false;
        }
    }
    else if ((typeof (obj1) !== 'number' && typeof (obj2) === 'number') || (typeof (obj1) === 'number' && typeof (obj2) !== 'number')) {
        return false;
    }
    else if(typeof(obj1)==='string' && typeof(obj2)==='string'){
        if(obj1===obj2){
            return true;
        }
        else{
            return false;
        }
    }
    else if ((typeof (obj1) !== 'string' && typeof (obj2) === 'string') || typeof (obj1) === 'string' && typeof (obj2) !== 'string') {
        return false
    }
    else if(typeof(obj1)==='boolean' && typeof(obj2)==='boolean'){
        if(obj1===obj2){
            return true;
        }
        else{
            return false;
        }
    }
    else if ((typeof (obj1) !== 'boolean' && typeof (obj2) === 'boolean') || typeof (obj1) === 'boolean' && typeof (obj2) !== 'boolean') {
        return false;
    }
    else if(obj1===undefined && obj2===undefined){
        return true;
    }
    else if ((obj1 === undefined && obj2 !== undefined) || (obj1 !== undefined && obj2 === undefined)) {
        return false;
    }
    else if(obj1===null && obj2===null){
        return true;
    }
    else if ((obj1 !== null && obj2 === null) || (obj1 === null && obj2 !==null)) {
        return false;
    }
    else if(typeof(obj1)==='object' && typeof(obj2)==='object'){
        if(Object.keys(obj1).length === Object.keys(obj2).length){
            for (let p in obj1) {
                if (obj2.hasOwnProperty(p)) {
                    if (!comparator(obj1[p], obj2[p])) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        else{
            return false;
        }
    }
    else if ((typeof (obj1) !== 'object' && typeof (obj2) === 'object') || typeof (obj1) === 'object' && typeof (obj2) !== 'object') {
        return false;
    }
    return true;
}

// module.exports.comparator = comparator;

let one = [
    {first : 'first'},
    {second : 'second'},
    {third : true},
    {fourth : {
        fun : () => {console.log('fun')},
        test : false   
    }}
];

let two = [
    { first: 'first' },
    { second: 'second' },
    { third: true },
    {
        fourth: {
            fun: () => {console.log('fun')},
            test: false
        }
    }
];

console.log(comparator(one,two));


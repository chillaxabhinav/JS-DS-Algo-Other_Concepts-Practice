console.log('This is something interesting i.e. Meta Programming concept of javascript');


// ===== Below is proxied object ===== // 

function proxObj(obj){
    return new Proxy(obj,{
        get(target,key){
            if(key){
                key = 'second';
            }
            return Reflect.get(target,key);
        }
    })
}


let test = {
    one : 'one',
    second : 'second',
    third : 'third'
};

let myproxied = proxObj(test);
//console.log(myproxied.one);


// ===== Below is proxied function ===== //


function proxFunc(fun){
    return new Proxy(fun,{
        apply(target,thisar,argsList){
            console.log(target(...argsList));
            return target(argsList[0],argsList[1]) * 10;
        }
    })
}

let mysum = (a,b) => {
    return a+b;
}


const proxiedSum = proxFunc(mysum);
console.log(proxiedSum(3,6));


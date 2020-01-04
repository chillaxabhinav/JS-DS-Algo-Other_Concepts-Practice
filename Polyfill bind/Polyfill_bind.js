// class me {
//     constructor(name) {
//         this.name = name;
//     }
//     mefunc() {
//         console.log(this.name);
//     }
// }

// me.prototype.meproto = function() {
//     console.log(this);
//     console.log('This is my me class prototype');
// }

// const meobj = new me('Me name');

// obj1 = {
//     firstname: 'Abhinav',
//     lastname: 'Singh'
// }

// Object.prototype.myproperty = () => {
//     console.log('This is my property');
// }

// obj1.myproperty();
// meobj.meproto();


obj1 = {
    firstname: 'Abhinav',
    lastname: 'Singh'
}

obj2 = {
    firstname: 'Kuch',
    lastname: 'Bhi'
}

const myfunc = function(first,second) {
    console.log(`${this.firstname} so this is mybind function ${this.lastname}, So next is ${first} and now ${second}`);
}




Function.prototype.mybind = function(...args) {
    //let thisfunc = this;
    const remains = args.slice(1);
    return (...otherargs) => {
        this.apply(args[0],[...remains,...otherargs]);
    }
}

const myreturn = myfunc.mybind(obj2,'So this is 1st argument');
myreturn('This is my 2nd argument');
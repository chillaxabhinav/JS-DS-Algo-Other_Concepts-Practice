class stack {
    constructor() {
        this.myarr = new Array();
        console.log('Stack created !')
    }
    mypush(ele){
        this.myarr.push(ele);
        console.log(this.myarr);
    }
    mypop(){
        if(this.myarr.length == 0){
            console.log('Cannot pop Array already empty !');
        }
        else{
            this.myarr.pop();
            console.log(this.myarr);
        }
    }
    myclear(){
        this.myarr = [];
        console.log(this.myarr);
    }
}

const mystack = new stack();
mystack.mypush(10);
mystack.mypush(11);
mystack.mypush(12);
mystack.mypush(13);
mystack.myclear();





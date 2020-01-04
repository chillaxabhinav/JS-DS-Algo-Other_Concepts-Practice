class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let listno = 0;

class LinkedList {
    constructor(){
        this.root = null;
        console.log(this);
    }
    addNode(root,value){
        if(this.root===null){
            const newNode = new node(value);
            this.root = newNode;
            return;
        }
        else{
            if(root.next===null){
                const newNode = new node(value);
                root.next = newNode;
                return;
            }
            else{
                this.addNode(root.next, value);
            } 
        }
    }
    traverse(root){
        if(root.next === null){
            console.log(root.value);
            return;
        }
        else{
            console.log(root.value);
            this.traverse(root.next);
        }
    }
}

const myList = new LinkedList();
myList.addNode(myList.root,10);
myList.addNode(myList.root,15);
myList.addNode(myList.root,20);
myList.traverse(myList.root);




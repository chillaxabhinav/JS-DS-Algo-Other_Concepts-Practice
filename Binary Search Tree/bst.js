class tree{

    constructor(){
        this.root = null;
        this.myArray = new Array();
        this.nodeCount = 0;
        console.log(this);
    }


    newNode(value){
        const myNode = new node(value);
        this.addNode(this.root,myNode);
    }


    addNode(root,myNode){
        if(root === null){
            this.root = myNode;
            return;
        }
        else if(root.value > myNode.value){
            if(root.left === null){
                root.left = myNode;
                return;
            }
            else{
                this.addNode(root.left, myNode);
            }
        }
        else if(root.value < myNode.value){
            if(root.right === null){
                root.right = myNode;
            }
            else{
                this.addNode(root.right, myNode);
            } 
        }
        else {
            if(root.left === null){
                root.left = myNode;
            }
            else{
                this.addNode(root.left, myNode);
            }
        }
    }


    traverse(thisNode){
        if(thisNode.left != null){
            this.traverse(thisNode.left);
        }
        this.myArray.push(thisNode.value);
        if(thisNode.right != null){
            this.traverse(thisNode.right);
        }
    }


}



function newNode(value) {
    const myNode = new node(value);
    return myNode;
};



class node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}



const myTree = new tree();
myTree.newNode(15);
myTree.newNode(9);
myTree.newNode(25);
myTree.newNode(5);
myTree.newNode(12);
myTree.newNode(19);
myTree.newNode(35);
myTree.traverse(myTree.root);
console.log(myTree.myArray);






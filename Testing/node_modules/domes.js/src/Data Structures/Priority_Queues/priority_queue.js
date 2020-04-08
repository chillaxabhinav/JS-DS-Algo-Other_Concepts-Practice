// ========= Priority Queue ============ //





/*

Our Priority queue in general can take any value apart from undefined and null.

But our priority will always be in number format

In section will contain both MinHeap Priority queue and MaxHeap Priority Queue

*/


// function minHeapifyPriorityQueue(myindex) {
//     let newNodeIndex = myindex;
//     let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
//     while (parentIndex >= 0 && this.values[parentIndex].priority > this.values[newNodeIndex].priority) {
//         let temp = this.values[parentIndex];
//         this.values[parentIndex] = this.values[newNodeIndex];
//         this.values[newNodeIndex] = temp;
//         newNodeIndex = parentIndex;
//         parentIndex = Math.floor((newNodeIndex - 1) / 2);
//     }
// }





class PriorityQueueNode {

    constructor(data, prior) {
        this.value = data;
        this.priority = prior;
    }

}


class MinPriorityQueue {

    constructor() {
        this.values = [];
        this.comparatorHelperMinQueue = null;
    }

    enqueue(val, priority) {
        try {
            if (arguments.length > 0) {
                if (val === 0 || val === false || val) {
                    if (typeof (priority) === 'number' && isFinite(priority)) {
                        const newNode = new PriorityQueueNode(val, priority);
                        this.values.push(newNode);
                        let newNodeIndex = (this.values.length) - 1;
                        let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
                        while (parentIndex >= 0 && this.values[parentIndex].priority > this.values[newNodeIndex].priority) {
                            let temp = this.values[parentIndex];
                            this.values[parentIndex] = this.values[newNodeIndex];
                            this.values[newNodeIndex] = temp;
                            newNodeIndex = parentIndex;
                            parentIndex = Math.floor((newNodeIndex - 1) / 2);
                        }
                        return val;
                    }
                    else {
                        throw new Error('Priority is not of type number apart from Infinity/-Infinity or not passed');
                    }
                }
                else {
                    throw new Error('Passed value is undefined/null');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    dequeue() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    let myValue = this.values.pop();
                    return myValue.value;
                }
                else if (this.values.length === 2) {
                    let myValue;
                    if (this.values[0].priority < this.values[1].priority) {
                        myValue = this.values.shift();
                    }
                    else {
                        myValue = this.values.pop();
                    }
                    return myValue.value;
                }
                else if (this.values.length === 3) {
                    let myValue = this.values.shift();
                    if (this.values[0].priority > this.values[1].priority) {
                        let temp = this.values[0];
                        this.values[0] = this.values[1];
                        this.values[1] = temp;
                    }
                    return myValue.value;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const myValue = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    while (this.values[index].priority > left.priority || this.values[index].priority > right.priority) {
                        if (right.priority > left.priority) {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 1];
                            this.values[2 * index + 1] = temp2;
                            index = 2 * index + 1;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                        else {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 2];
                            this.values[2 * index + 2] = temp2;
                            index = 2 * index + 2;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                    }
                    this.values = this.values.filter(ele => ele.value !== undefined);
                    return myValue.value;
                }
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }

    toArray() {
        try {
            let toReturn = [];
            for (let i = 0; i < this.values.length; i++) {
                toReturn.push({ value: this.values[i].value, priority: this.values[i].priority });
            }
            return toReturn;
        }
        catch (e) {
            console.log(e);
        }
    }

    getNodeInfo(index) {
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if (this.values.length !== 0) {
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    return { value: this.values[index].value, priority: this.values[index].priority };
                                }
                            }
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    isEmpty() {
        try {
            if (this.values.length === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(index, updatedValue) {
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if (updatedValue === 0 || updatedValue === false || updatedValue) {
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    this.values[i].value = updatedValue;
                                    return true;
                                }
                            }
                        }
                        else {
                            throw new Error('Updated value not passed or passed undefined/null');
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}







class MaxPriorityQueue {

    constructor() {
        this.values = [];
        this.comparatorHelperMaxQueue = null;
    }

    enqueue(val, priority) {
        try {
            if (arguments.length > 0) {
                if (val === 0 || val === false || val) {
                    if (typeof (priority) === 'number' && isFinite(priority)) {
                        const newNode = new PriorityQueueNode(val, priority);
                        this.values.push(newNode);
                        let newNodeIndex = (this.values.length) - 1;
                        let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
                        while (parentIndex >= 0 && this.values[parentIndex].priority < this.values[newNodeIndex].priority) {
                            let temp = this.values[parentIndex];
                            this.values[parentIndex] = this.values[newNodeIndex];
                            this.values[newNodeIndex] = temp;
                            newNodeIndex = parentIndex;
                            parentIndex = Math.floor((newNodeIndex - 1) / 2);
                        }
                        return val;
                    }
                    else {
                        throw new Error('Priority is not of type number or not passed');
                    }
                }
                else {
                    throw new Error('Passed value is undefined/null');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    dequeue() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    let myValue = this.values.pop();
                    return myValue.value;
                }
                else if (this.values.length === 2) {
                    let myValue;
                    if (this.values[0].priority > this.values[1].priority) {
                        myValue = this.values.shift();
                    }
                    else {
                        myValue = this.values.pop();
                    }
                    return myValue.value;
                }
                else if (this.values.length === 3) {
                    let myValue = this.values.shift();
                    if (this.values[0].priority < this.values[1].priority) {
                        let temp = this.values[0];
                        this.values[0] = this.values[1];
                        this.values[1] = temp;
                    }
                    return myValue.value;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const myValue = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    while (this.values[index].priority < left.priority || this.values[index].priority < right.priority) {
                        if (right.priority < left.priority) {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 1];
                            this.values[2 * index + 1] = temp2;
                            index = 2 * index + 1;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: -Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: -Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                        else {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 2];
                            this.values[2 * index + 2] = temp2;
                            index = 2 * index + 2;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: -Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: -Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                    }
                    this.values = this.values.filter(ele => ele.value !== undefined);
                    return myValue.value;
                }
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }

    toArray() {
        try {
            let toReturn = [];
            for (let i = 0; i < this.values.length; i++) {
                toReturn.push({ value: this.values[i].value, priority: this.values[i].priority });
            }
            return toReturn;
        }
        catch (e) {
            console.log(e);
        }
    }

    getNodeInfo(index) {
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if (this.values.length !== 0) {
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    return { value: this.values[index].value, priority: this.values[index].priority };
                                }
                            }
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    isEmpty() {
        try {
            if (this.values.length === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(index, updatedValue) {
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if (updatedValue === 0 || updatedValue === false || updatedValue) {
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    this.values[i].value = updatedValue;
                                    return true;
                                }
                            }
                        }
                        else {
                            throw new Error('Updated value not passed or passed undefined/null');
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}





// =================================================================== //


module.exports = {
    MinPriorityQueue : MinPriorityQueue,
    MaxPriorityQueue : MaxPriorityQueue
}
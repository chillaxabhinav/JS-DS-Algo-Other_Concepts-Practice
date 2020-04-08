// ======= Max Binary Heaps =========== //


/*

=>  Types of Max Binary Heap
    1. number
    2. string

=>  Comparison Methods of Min Binary Heap
    1. number
        1. Normal comparison (<,>,=)
    2. string
        1. Normal ASCII Comparing
        2. Based on Length

*/

// function maxHeapify(myindex) {

//     let valueIndex = myindex;
//     let parentIndex = Math.floor((valueIndex - 1) / 2);
//     if (this.type === 1 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 2) {
//         while (parentIndex >= 0 && this.values[parentIndex].length < this.values[valueIndex].length) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
// }



const maxHeaptypesMap = {
    1: 'number',
    2: 'string'
}


const maxHeaptypesAndMethods = {
    1: [1],
    2: [1, 2]
}





class MaxBinaryHeap {

    constructor(type, method) {
        this.values = [];
        this.type = type;
        this.method = method;
        this.comparatorHelperMaxHeap = null;
    }

    insert(val) {
        try {
            const myCurrentType = maxHeaptypesMap[this.type];
            if (arguments.length > 0) {
                if (typeof (val) === myCurrentType) {
                    const supportedMethods = maxHeaptypesAndMethods[parseInt(this.type)];
                    if (supportedMethods.find(ele => parseInt(ele) === parseInt(this.method))) {
                        this.values.push(val);
                        let valueIndex = this.values.length - 1;
                        let parentIndex = Math.floor((valueIndex - 1) / 2);
                        if (this.type === 1 && this.method === 1) {
                            while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if (this.type === 2 && this.method === 1) {
                            while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if (this.type === 2 && this.method === 2) {
                            while (parentIndex >= 0 && this.values[parentIndex].length < this.values[valueIndex].length) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                    }
                    else {
                        throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods');
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Max Binary Heap');
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

    extractMax() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    return this.values.pop();
                }
                else if (this.values.length === 2) {
                    return this.values.shift();
                }
                else if (this.values.length === 3) {
                    let max = this.values.shift();
                    if (this.type === 2 && this.method === 2) {
                        if (this.values[0].length < this.values[1].length) {
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    else {
                        if (this.values[0] < this.values[1]) {
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    return max;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const max = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    if (this.type === 1 && this.method === 1) {
                        while (this.values[index] < left || this.values[index] < right) {
                            if (right < left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return max;
                    }
                    else if (this.type === 2 && this.method === 1) {
                        while (this.values[index] < left || this.values[index] < right) {
                            if (right < left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return max;
                    }
                    else if (this.type === 2 && this.method === 2) {
                        while (this.values[index].length < left.length || this.values[index].length < right.length) {
                            if (right.length < left.length) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) > (this.values.length - 1)) {
                                    left = { length: -Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: -Infinity };
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
                                    left = { length: -Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: -Infinity };
                                }
                                else {
                                    right = this.values[2 * index + 2];
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return max;
                    }
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

    toArray() {
        try {
            return this.values;
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

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }
}









// =========================================== //







//========== Min Binary Heap ==================//






/*

=>  Types of Min Binary Heap
    1. number
    2. string

=>  Comparison Methods of Min Binary Heap
    1. number
        1. Normal comparison (<,>,=)
    2. string
        1. Normal ASCII Comparing
        2. Based on Length

*/



// function minHeapify(myindex){
//     let valueIndex = myindex;
//     let parentIndex = Math.floor((valueIndex - 1) / 2);
//     if (this.type === 1 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 2) {
//         while (parentIndex >= 0 && this.values[parentIndex].length > this.values[valueIndex].length) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
// }




const minHeaptypesMap = {
    1: 'number',
    2: 'string'
}


const minHeaptypesAndMethods = {
    1: [1],
    2: [1, 2]
}





class MinBinaryHeap {

    constructor(type, method) {
        this.values = [];
        this.type = type;
        this.method = method;
        this.comparatorHelperMinHeap = null;
    }

    insert(val) {
        try {
            const myCurrentType = minHeaptypesMap[this.type];
            if (arguments.length > 0) {
                if (typeof (val) === myCurrentType) {
                    const supportedMethods = minHeaptypesAndMethods[parseInt(this.type)];
                    if (supportedMethods.find(ele => parseInt(ele) === parseInt(this.method))) {
                        this.values.push(val);
                        let valueIndex = this.values.length - 1;
                        let parentIndex = Math.floor((valueIndex - 1) / 2);
                        if (this.type === 1 && this.method === 1) {
                            while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if (this.type === 2 && this.method === 1) {
                            while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if (this.type === 2 && this.method === 2) {
                            while (parentIndex >= 0 && this.values[parentIndex].length > this.values[valueIndex].length) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                    }
                    else {
                        throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods');
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Max Binary Heap');
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

    extractMin() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    return this.values.pop();
                }
                else if (this.values.length === 2) {
                    return this.values.shift();
                }
                else if (this.values.length === 3) {
                    let min = this.values.shift();
                    if (this.type === 2 && this.method === 2) {
                        if (this.values[0].length > this.values[1].length) {
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    else {
                        if (this.values[0] > this.values[1]) {
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    return min;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const min = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    if (this.type === 1 && this.method === 1) {
                        while (this.values[index] > left || this.values[index] > right) {
                            if (right > left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return min;
                    }
                    else if (this.type === 2 && this.method === 1) {
                        while (this.values[index] > left || this.values[index] > right) {
                            if (right > left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return min;
                    }
                    else if (this.type === 2 && this.method === 2) {
                        while (this.values[index].length > left.length || this.values[index].length > right.length) {
                            if (right.length > left.length) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) > (this.values.length - 1)) {
                                    left = { length: Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: Infinity };
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
                                    left = { length: Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: Infinity };
                                }
                                else {
                                    right = this.values[2 * index + 2];
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return min;
                    }
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

    toArray() {
        try {
            return this.values;
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

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }
}





// ===================================== //


module.exports = {
    MaxBinaryHeap : MaxBinaryHeap,
    MinBinaryHeap : MinBinaryHeap
}
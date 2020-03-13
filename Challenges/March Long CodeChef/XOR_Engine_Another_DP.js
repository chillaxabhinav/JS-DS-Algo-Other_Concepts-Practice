console.log('XOR_ENGINE DP SOLUTION Node.js');

process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

var arr = '';

process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let ncase = arr[0];
    let x = 1;
    let y = x;
    let memory = {};
    while (x <= ncase) {
        let firstLine = arr[y].split(' ');
        y = parseInt(y + 1);
        let sequenceA = arr[y].split(' ');
        let queries = parseInt(firstLine[1]);
        y = parseInt(y + 1);
        let so = queries + y;
        let z = y;
        while (z < so) {
            let even = 0;
            let odd = 0;
            let query = parseInt(arr[z]);
            let countQuery = 0, queryAns;
            let countSet = 0, sequenceAns;

            // For query

            if (memory.hasOwnProperty(query)) {
                queryAns = memory[query];
            }
            else {
                let BinaryQuery = query.toString(2);
                for (let i of BinaryQuery) {
                    if (i == '1') {
                        countQuery++;
                    }
                }
                if (countQuery % 2 == 0) {
                    memory[query] = true;
                    queryAns = true;
                    countQuery = 0;
                }
                else {
                    memory[query] = false;
                    queryAns = false;
                    countQuery = 0;
                }
            }

            // For sequence


            for (let i of sequenceA) {
                i = parseInt(i);
                if (memory.hasOwnProperty(i)) {
                    sequenceAns = memory[i];
                }
                else {
                    let BinarySequence = i.toString(2);
                    for (let k of BinarySequence) {
                        if (k == '1') {
                            countSet++;
                        }
                    }
                    if (countSet % 2 == 0) {
                        memory[i] = true;
                        sequenceAns = true;
                        countSet = 0;
                    }
                    else {
                        memory[i] = false;
                        sequenceAns = false;
                        countSet = 0;
                    }
                }
                if ((queryAns && sequenceAns) || (!queryAns && !sequenceAns)) {
                    even++;
                }
                else {
                    odd++;
                }
            }

            console.log(`${even} ${odd}`)
            z++;
        }
        y = so;
        x++;
    }
});


// HackerRank isBalanced

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    // Write your code here
    const MAX = 1_000;
    const stack = new MyStack(MAX);

    if (s.length % 2 !== 0) return 'NO';
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if ([')', '}', ']'].includes(current) && stack.myIsEmpty()) return 'NO';
        if (['(', '{', '['].includes(current)) {
            stack.myPush(current);
        } else {
            const popped = stack.myPop();
            if ('(' !== popped && current === ')') return 'NO';
            if ('{' !== popped && current === '}') return 'NO';
            if ('[' !== popped && current === ']') return 'NO';
        }
    }
    return 'YES'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}

class MyStack {
    constructor(size) {
        this.size = size;
        this.index = 0;
        this.area = Array(size).fill(null);
    }

    myPush(val) {
        if (this.size === this.index) {
            throw new Error('The stack is full!');
        }
        this.area[this.index] = val;
        this.index++;
    }

    myPop() {
        if (this.myIsEmpty()) {
            throw new Error('The stack is empty!');
        }
        const temp = this.area[--this.index];
        this.area[this.index] = null;

        return temp
    }

    myPeak() {
        return this.area[this.index - 1];
    }

    myIsEmpty() {
        return this.index === 0 && this.area[this.index] === null;
    }
}


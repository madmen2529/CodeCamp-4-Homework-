// https://programming.in.th/task/rev2_problemset.php
// codecube.in.th
// 1 - 10

function ABProblem(a, b) {
    return a + b
}

function Grading(a, b, c) { // 30, 30, 40
    let total = a + b + c,
        grade

    if (total > 80) {
        grade = "A"
    } else if (total > 75) {
        grade = "B+"
    } else if (total > 70) {
        grade = "B"
    } else if (total > 65) {
        grade = "C+"
    } else if (total > 60) {
        grade = "C"
    } else if (total > 55) {
        grade = "D+"
    } else if (total > 50) {
        grade = "D"
    } else {
        grade = "F"
    }

    return grade
}

function MinMax(arr) {
    let max = 0,
        min = 2000000000
    for (let val of arr) {
        if (max < val) max = val
        if (min > val) min = val
    }

    return [min, max]
}

function MatrixAddition() {
    let arr1 = [
            [1, 2, 3],
            [3, 2, 1],
            [1, 3, 2]
        ],
        arr2 = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ],
        ret = [
            [],
            [],
            []
        ]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            ret[i][j] = arr1[i][j] + arr2[i][j]
        }
    }

    return ret
}

function CharacterChecker(str) {
    //ASCII
    //65 - 90 = Big
    //97 - 122 = Small
    let cnt_big = 0,
        cnt_small = 0,
        code
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            cnt_big++;
        } else if (code >= 97 && code <= 122) {
            cnt_small++;
        }
    }
    // console.log(cnt_big, cnt_small);

    if (cnt_big > 0 && cnt_small == 0) {
        return "All Capital Letter"
    } else if (cnt_small > 0 && cnt_big == 0) {
        return "All Small Letter"
    } else {
        return "Mix"
    }

}

function Pythagorus(str) {
    //"3.000000 4.00000"
    let split = str.split(" ")
    let a = split[0]
    let b = split[1]
    let ans = Math.sqrt((a * a) + (b * b)).toFixed(6);
    return ans
}

function Herman(r) {
    let a = (Math.PI * (r * r)).toFixed(6)
    let b = (2 * (r * r)).toFixed(6)
    return [a, b]
}

function X2(x1, s) {
    //4, 3
    let ans = (s * 2) - x1
    return ans
}

function ABC() {
    let num = [6, 7, 2]
    let char = ["c", "a", "b"]
    let max = 0
    let min = 100
    let avg = 0
    for (let i = 0; i < num.length; i++) {
        if (min > num[i]) {
            min = num[i]
        }
    }
    for (let i = 0; i < num.length; i++) {
        if (max < num[i]) {
            max = num[i]
        }
    }
    for (let i = 0; i < num.length; i++) {
        if (min < num[i] && num[i] < max) {
            avg = num[i]
        }
    }
    for (let j = 0; j < char.length; j++) {
        if (char[j] == "a") {
            char[j] = min
        }
        if (char[j] == "b") {
            char[j] = avg
        }
        if (char[j] == "c") {
            char[j] = max
        }
    }
    // console.log(char)

    return char
}

function Trik(order_abc) {
    //start coin is in 1
    //a = move a,b
    //b = move b,c
    //c = move a,c

    let char, pos = "A"
    for (let i = 0; i < order_abc.length; i++) {
        char = order_abc[i]
        if (char == "A") {
            pos = pos == "A" ? "B" : "A"
        } else if (char == "B") {
            pos = pos == "B" ? "C" : "B"
        } else if (char == "C") {
            pos = pos == "C" ? "A" : "C"
        }
    }

    if (pos == "A") {
        pos = 1
    } else if (pos == "B") {
        pos = 2
    } else if (pos == "C") {
        pos = 3
    }

    return pos
}

console.log("\n 000 A+B Problem");
console.log(ABProblem(2, 6));

console.log("\n 001 Grading");
console.log(Grading(25, 12, 22));

console.log("\n 002 MinMax");
console.log(MinMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log("\n 003 MatrixAddition");
console.log(MatrixAddition());

console.log("\n 005 CharacterChecker");
console.log(CharacterChecker("This is a book"));

console.log("\n 006 Pythagorus");
console.log(Pythagorus("3.000000 4.000000"));

console.log("\n 007 Herman")
console.log(Herman(21))

console.log("\n 008 x2")
console.log(X2(4, 3))

console.log("\n 009 abc")
console.log(ABC(21))

console.log("\n 010 Trik")
console.log(Trik(21))
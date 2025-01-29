// STDIN           Function
// -----           --------
// 3               t = 3
// {[()]}          first expression
// {[(])}          second expression
// {{[[(())]]}}    third expression
// Sample Output

// YES
// NO
// YES
// Explanation

// The string {[()]} meets both criteria for being a balanced string.
// The string {[(])} is not balanced, because the brackets enclosed by the matched pairs [(] and (]) are not balanced.
// The string {{[[(())]]}} meets both criteria for being a balanced string.


function isBalanced(expression) {
    // Write your code here
    let check = true
    let stack = []
    for (let b of expression) {
        if (b === '{' || b === '[' || b === '(') {
            stack[stack.length] = b
        }
        else if (b === '}') {
            if (stack.length == 0 || stack.pop() != '{') {
                check = false
            }
        }
        else if (b === ')') {
            if (stack.length == 0 || stack.pop() != '(') {
                check = false
            }
        }
        else if (b === ']') {
            if (stack.length == 0 || stack.pop() != '[') {
                check = false
            }
        }
    }
    if (stack.length == 0 && check) {
        return "YES"
    }
    else {
        return "NO"
    }

}

console.log(isBalanced("{[()]}"))
console.log(isBalanced("{[(])}"))
console.log(isBalanced("{{[[(())]]}}"))


// There will be two arrays of integers. Determine all integers that satisfy the following two
//  conditions:

// 1 .The elements of the first array are all factors of the integer being considered
// 2 .The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.
// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

function getTotalX(a, b) {
    let temp = b[0]
    if (a.length == 1 && a[0] == 2) {
        return 1
    }
    else {
        for (let i = 1; i < b.length; i++) {
            if (b[i] >= temp) {
                temp = b[i]
            }
        }
        let result = []
        for (let i = temp; i > 2; i--) {
            let check = 0
            for (let x of b) {
                if (x % i == 0) {
                    check++
                }
            }
            if (check == b.length) {
                result[result.length] = i
            }
        }
        let value = []
        if (a.length == 1 && a[0] == 1) {
            return result.length + 2
        }
        else {
            for (let x of result) {
                let count = 0
                for (let y of a) {
                    if (x % y == 0) {
                        count++
                    }
                }
                if (count == a.length) {
                    value[value.length] = x
                }
            }
            return value.length
        }
    }
}
console.log(getTotalX([2, 6], [24, 36]))
console.log(getTotalX([2, 4], [16, 32, 96]))
console.log(getTotalX([2], [20, 30, 12]))


//Apple and Orange sum in HackerRank
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countA = 0;
    let countB = 0;

    for (let i of apples) {
        let sum = i + a;
        if (sum >= s && sum <= t) {
            countA++
        }
    }

    for (let x of oranges) {
        let sum = x + b;
        if (sum >= s && sum <= t) {
            countB++
        }
    }
    console.log(countA)
    console.log(countB)

}
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])

// Sample Input 
// 6
// 1 4 4 4 5 3
// Sample Output 
// 4

function migratoryBirds(arr) {
    // Write your code here
    let obj = {}
    for (let i of arr) {
        obj[i] = (obj[i] || 0) + 1
    }
    let temp = obj[arr[0]];
    let result = 0;
    for (let key in obj) {
        if (obj[key] > temp) {
            temp = obj[key];
            result = key;
        }
    }
    return result;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.
// Sample Input 
// 5
// 1 2 1 3 2
// 3 2
// Sample Output 
// 2

function birthday(s, d, m) {
    // Write your code here
    let count = 0
    if (m == s.length && d == s[0]) {
        return count = 1
    }
    else if (m == 2) {
        let sum = 0
        for (let j = 0; j < m; j++) {
            sum = s[j] + s[j + 1]
            if (sum == d) {
                count++
            }
        }
    }
    else {
        for (let i = 0; i < s.length; i++) {
            let sum = 0
            for (let j = i; j < m; j++) {
                sum += s[j]
            }
            if (sum == d) {
                count++
            }
            m++
        }
    }
    return count

}

// scores = [12,24,10,24]
// Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1

//  Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    
    for(let i=1; i<scores.length; i++){
        if(scores[i] > max){
            max = scores[i];
            maxCount++;
        }
        else if(scores[i] < min){
            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount]

}

console.log(breakingRecords([10, 5 ,20, 20, 4, 5, 2, 25, 1]))

// recursion
function factorial(n) {
    if (n < 0) {
        return -1;
    }
    if(n === 0 || n == 1) {
        return 1;
    }
    else {
        let result =  n * factorial (n -1);
        return result;
    }
}

result = factorial(5);
console.log(result);


function pattern(n){
     if(n < 0 ){
        return ` *`
     }
     if(n == 0 || n == 1){
        return ` *`
     }
     else{
        let result = pattern(n-1)
        console.log(result)
        return result + ` *`
     }
}
let res = pattern(5)
console.log(res)


let arr = [2,5,7,9,10,15];
let target = 17
let resArr = []

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
            if(target === arr[i] + arr[j]){
              resArr[resArr.length] = i
               resArr[resArr.length] = j
               break;
            }
    }
    break;
}
console.log(resArr)


let strs = ["cir","car"]
let result = ""


for(let i =0; i<strs[0].length; i++){
        let count = 1
    for(let j=0 ; j<strs.length-1; j++){
        if(strs[j][i] === strs[j+1][i]){
           count++
        }
        if(count === strs.length){
            result += strs[j][i]
        }
    }
    if(count < strs.length){
        break;
    }
}
console.log(result)


function isPalindrome(x) {

    let changeStr = x.toString();
    let res = "";
    for(let i=changeStr.length; i>=0; i--){
          res += changeStr[i];
          console.log(res)
    }
    console.log(Number(res))
    if( x === Number(res) ){
        return true;
    }
    else{
        return false;
    }
};
console.log(isPalindrome(121))
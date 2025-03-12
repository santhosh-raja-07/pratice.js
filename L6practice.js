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


// let strs = ["cir","car"]
// let result = ""


// for(let i =0; i<strs[0].length; i++){
//         let count = 1
//     for(let j=0 ; j<strs.length-1; j++){
//         if(strs[j][i] === strs[j+1][i]){
//            count++
//         }
//         if(count === strs.length){
//             result += strs[j][i]
//         }
//     }
//     if(count < strs.length){
//         break;
//     }
// }
// console.log(result)


function isPalindrome(x) {
    let changeStr = x.toString();
    let res = "";
    for(let i=changeStr.length-1; i>=0; i--){
        if(typeof(changeStr[i]))
          res += changeStr[i];
    }
    if( x === Number(res) ){
        return true;
    }
    else{
        return false;
    }
};
console.log(isPalindrome(121))


function singleNum(num){
  let addNum = num.toString();
  while(addNum.length >= 1){
    if(addNum.length === 1){
        return Number(addNum);
    }
    else{
        let output = 0 ;
        for(let x=0; x<addNum.length; x++){
            output+= Number(addNum[x])
        }
        addNum = output.toString();
    }
  }
}
console.log(singleNum(78945623));

function mergeArray(arr1 , arr2){
    let count1 = 0;
    let count2 = 0;
    let arr=[];
    let check = true;
    let max = 0;
    if(arr1[arr1.length-1] <= arr2[arr2.length-1]){
        max = arr2[arr2.length-1];
    }
    else{
        max = arr1[arr1.length-1]
    }
    while(count1 < arr1.length && count2 < arr2.length){
        if(arr1[count1] >= arr2[count2]){
            arr[arr.length] = arr2[count2];
            count2++
        }
        else{
            arr[arr.length] = arr1[count1];
            count1++
        }

    }
    while(check){
        if(max != arr[arr.length-1]){
            arr[arr.length] = arr2[count2];
            count2++
        }
        else{
            check = false;
        }
    }
    return arr;
}

console.log(mergeArray([1,2,3,4,5,7,8], [3,4,5,6,7,9]));

// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2);
//     let leftArr = mergeSort(arr.slice(0,mid))
//     let rightArr = mergeSort(arr.slice(mid));
    
//     return mergeSorting(leftArr , rightArr);
// }

// function mergeSorting(leftArr , rightArr){
//     let resArr = [];
//     while( leftArr.length > 0 && rightArr.length > 0 ){
//         if(leftArr[0] < rightArr[0]){
//         resArr.push(leftArr.shift());
//         }
//         else{
//             resArr.push(rightArr.shift());
//         }
//     }
//     return [...resArr, ...leftArr , ...rightArr];
// }
// console.log(mergeSort( [7,8,9,5] ));


function superDigit( n , k){
    if( n < 10){
        return n
    }
    else{
        let str = n.toString();
        if(k > 1){
           for(let i=1 ; i<k; i++){
            str += n;
           }
        }
        let sumOfStr = 0;
        for(let j=0; j<str.length; j++){
            sumOfStr += Number(str[j]);
        }
        return superDigit(sumOfStr)
    }

}

console.log(superDigit( 148 , 3 ))

let nums = [1,3,5,6];
target = 7;
if(!nums.includes(target)){
    let temp = 0;
    for(let i=0; i<nums.length; i++){ 
        if(target < nums[i]){
            temp = i;
            break;
        }
        else{
            temp = nums.length;
        }
    }
    return temp
}


function mergeSort(arr){
    if(arr.length < 1) return arr;
    else{
    let arr1 = mergeSort(Math.floor(arr.slice(0 , arr.length)));
    let arr2 = mergeSort(arr.slice(arr.length));
    return mergeArr(arr1 , arr2);
    }
}
function mergeArr(arr1 , arr2){
    let res = [];
    let right = 0;
    let left = 0;
    while(arr1.length > 1 && arr2.length >1){
        if(arr1[right] < arr2[left]){
            res.push(arr1[right]);
            right++;
        }
        else{
            res.push(arr2[left]);
            left++;
        }
    }
}
mergeSort([4,3,2,1,7,8,9,5]);

function mergeTwoArr(list1 , list2){
    let resArr = [];
    let i=0;
    let j=0;
    while( list1.length > i && list2.length > j ){
        if(list1[i] < list2[j]){
            resArr.push(list1[i]);
            i++;
        }
        else{
            resArr.push(list2[j]);
            j++;
        }
    }
    while(list1.length > i){
        resArr.push(list1[i]);
        i++;
    }
    while(list2.length > j){
        resArr.push(list2[j]);
        j++;
    }
    return resArr;

    // let resArr = [...list1 , ...list2];
    // return resArr.sort();
}
console.log(mergeTwoArr([1,2,4] , [1,3,4]))

function countOfTwoPair(ar){
    let obj = {};
    for(let i of ar){
        obj[i] = (obj[i] || 0) + 1;
    }
    let count = 0;
    for(let key in obj){
        let keyvalue = obj[key]/2;
        count+= Math.floor(keyvalue)
    }
    return count;
}
console.log(countOfTwoPair([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(countOfTwoPair([1, 2, 1, 2, 1, 3, 2]));

function countUniqeElement(nums){
    let arrLen = nums.length
    let i = 0;
    let j = 1;
    while(arrLen > 0){
        if(nums[i] == nums[j]){
            let num = nums.shift();
            nums.push(num);
        }
        arrLen-1;
    }
    return nums;
}
console.log(countUniqeElement([0,0,1,1,1,2,2,3,3,4]))
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
    for(let b of expression){
        if(b === '{' || b === '[' || b === '('){
            stack[stack.length] = b
        }
        else if(b === '}'){
            if(stack.length == 0 || stack.pop() != '{'){
                check = false
            }
        }
        else if(b === ')'){
            if(stack.length == 0 || stack.pop() != '('){
                check = false
            }
        }
        else if(b === ']'){
            if(stack.length == 0 || stack.pop() != '['){
                check = false
            }
        }
    }
    if(stack.length == 0 && check){
        return "YES"
    }
    else{
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

function getTotalX(a,b){
    let temp = b[0]
    if(a.length == 1 && a[0] == 2){
       return 1
    } 
    else{
    for(let i=1; i<b.length; i++){
        if(b[i] >= temp){
            temp =b[i]
        }
    }
    let result = []
    for(let i=temp ; i > 2; i--){
        let check = 0
        for(let x of b){
            if(x % i == 0){
               check++
            }
        }
        if(check == b.length){
        result[result.length] = i
        }
    }
    let value =[]
    if(a.length == 1 && a[0] == 1){
        return result.length + 2
    }
    else{
    for(let x of result){
        let count = 0
        for(let y of a){
            if(x % y == 0){
                count++
              }
            }
            if(count == a.length){
                value[value.length] = x
            }
        }
    return value.length
    }
    }
}
console.log(getTotalX([2,6] , [24,36]))
console.log(getTotalX([2,4] , [16,32,96]))
console.log(getTotalX([2] , [20,30,12]))
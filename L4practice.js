let arr = ["ram", "abilosh", "kottai", "Santhosh"];
let str1 = "";
for (let i=0; i<arr.length; i++) {
        if(arr[i].length>str1.length){
            str1=arr[i];
        }
    }
console.log(str1);


let sentence="How are You";
let str=sentence.split(' ');
for(let i=0; i<str.length; i++){
    if(str[i][0]===str[i][0].toUpperCase()){
        console.log(str[i]);
    }
}

// You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece


// input: arr = ["M 3", "J 1", "T 2"]

// Output
// 7500
function calculateTotal(cart) {
    let sum=0;
    for(let carts of cart){
        let temp=carts.split(' ');
        if(temp[0]==='M'){
            sum+=500*temp[1];
        }
        else if(temp[0]==='J'){
            sum+=3000*temp[1]
        }
        else if(temp[0]==='T'){
            sum+=1500*temp[1]
        }
        else if(temp[0]==='P'){
            sum+=10*temp[1]
        }
    }
    console.log(sum);
}
calculateTotal(["M 3", "J 1", "T 2"]);


let array=["apple","banish","appeal","after"];
let result=0;
let maxValue=0;
for(let i=0; i<array.length; i++){
    let arr=array[i];
    let count=0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]==='a'){
            count++
        }
    }
    if(count>maxValue){
        maxValue=count;
        result=arr;
    }
}
console.log(result);

// 3.Given array two arrays student names and scores, return the student name who has the maximum score eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana
let names=["sanjay", "priya", "ramesh", "sanjana"];
let scores = [88, 45, 71, 91];
console.log(names[scores.indexOf(Math.max(...scores))]);

// 12. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
let Input="? you are How";
let reverseStr=Input.split(" ");
result='';
for(let i=reverseStr.length-1; i>=0; i--){
    result+=reverseStr[i]+" ";
}
console.log(result);
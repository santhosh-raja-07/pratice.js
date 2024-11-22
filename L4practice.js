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


// For the first 100 kWh, the rate is ₹8 per kWh.
// For the next 200 kWh (from 101 to 300 kWh), the rate is ₹12 per kWh.
// For any usage above 300 kWh, the rate is ₹15 per kWh.
// For usage = 350 kWh:

// First 100 kWh = 100 × ₹8 = ₹800
// Next 200 kWh = 200 × ₹12 = ₹2400
// Remaining 50 kWh = 50 × ₹15 = ₹750
// Total Bill = ₹800 + ₹2400 + ₹750 = 3950

// The program takes an array of usages, the program prints the sum

// example usages = [350, 150, 100]

let usages = [350, 150, 100];
let sum=0;
for(let arr of usages){
    if(arr <= 100){
       sum+=arr*8;
    }
    else if(arr >100 && arr <=300){
        sum+=100*8 + (arr-100)*12;
    }
    else if(arr >300 ){
        sum+=100*8 + 200*12 + (arr-300)*15;
    }
}
console.log(sum);

let numberArr=[45, 21, 15, 19]
if(numberArr.length===0){
    console.log("");
}
else{
let lastArrValue="";
let i=numberArr.length-1;
    lastArrValue=numberArr[i];
for(let i=1; i<numberArr.length; i++){
    lastArrValue+=" "+numberArr[i-1];
}
console.log(lastArrValue);
}

// result= "";
// let lastElement = numberArr.pop();
// numberArr.unshift(lastElement);
// for(let x of numberArr){
//     result+=x+" ";
// }
// console.log(result.trim())


function printEvenLengthStrs(inputStr) {
    let str=inputStr.split(" ");
    let result="";
    for(let i=0; i<str.length; i++){
        let strLen=str[i].length;
        if(strLen%2==0){
            result+=str[i]+",";
        }
    }
    console.log(result.slice(0,-1))
}
printEvenLengthStrs("hi iam vidya studying twelfth")



function password(n){
let specialChar = "@#*)-";
let lowercase = "qwertyuiopasdfghjklzxcvbnm";
let uppercase = "QWERTYOPASDFGHJKLZXCVBNM";
let num = "1234567890";
let len = 8;
let result=false;


// for(let i=0; i<specialChar.length; i++){
//     for(let j=0; j<n.length; j++){
//         if(specialChar[i]==n[j]){
//             result=true;
//             break;
//         }
//     }
// }
// for(let i=0; i<lowercase.length; i++){
//     for(let j=0; j<n.length; j++){
//         if(lowercase[i]==n[j]){
//             result=true;
//             break;
//         }
//     }
// }
// for(let i=0; i<uppercase.length; i++){
//     for(let j=0; j<n.length; j++){
//         if(uppercase[i]==n[j]){
//             result=true;
//             break;
//         }
//     }
// }
// for(let i=0; i<num.length; i++){
//     for(let j=0; j<n.length; j++){
//         if(num[i]==n[j]){
//             result=true;
//             break;
//         }
//     }
// }
    
    if(result){
        console.log("strong");
    }
    else{
        console.log("weak");
    }
    if(specialChar.includes(n)){
        result=true;
    }
    if(lowercase.includes(n)){
        result=true;
   }
   if(uppercase.includes(n)){
    result=true;
   }
   if(num.includes(n)){
    result=true;
   }
   if(n.length >= len){
    result=true;
   }

   if(result){
    console.log("strong");
   }
   else{
    console.log("weak");
   }

}
password("aA21");


// let data=([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])
// let maxsalary="";
// let employeeName="";
//     for(let i=0; i<data.length; i++){
//        let employee =data[i].split(",");
//        console.log(employee)
//        let salary= employee[2];
//        let name= employee[0]
//        if(salary>maxsalary){
//             maxsalary = salary
//             employeeName = name
//        }
//    }
//    console.log(employeeName)

let data = ["Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000"];

let maxSalary = 0; 
let employeeName = "";

for (let i = 0; i < data.length; i++) {
    let employee = data[i].split(",");
    // console.log(employee);
    let salary = Number(employee[2]);
    console.log(salary)
    let name = employee[0];
    // console.log(name)
    if (salary > maxSalary) {
        maxSalary = salary;
        employeeName = name;
    }
}
console.log(employeeName);


let rotatearr=[1,2,3,4,5];
let firstValue=rotatearr[0];
result="";
for(let i=1; i<rotatearr.length; i++){
     result+=rotatearr[i]+" "
}
result+=firstValue;
console.log(result);

// 1.  Given two dates as strings "JAN-12-2024", "FEB-12-1900" return the date that comes chronologically first i.e. FEB-12-1900

let strDate1 = "JAN-01-2024";
let strDate2 = "FEB-10-2020";
let date1=strDate1.split('-');
let date2=strDate2.split('-');
if( (Number(date1[2])) > (Number(date2[2])) ){
    console.log(strDate2)
}
else{
    console.log(strDate1)
}


// Given an array of string as ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"]
// Find the oldest date. In the given example the oldest date is OCT-10-1987.
// Need to do this without using any library functions other than
// converting String to Integers

let arrayOfDate = ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"];
let year="";
let temp=arrayOfDate[0].split('-')
let oldestDate=+(temp[2]);
// console.log(oldestDate)

for(let x=1; x<arrayOfDate.length; x++){
    let year2 = arrayOfDate[x].split('-');
    // console.log(year2)
    let oldestDate2 = arrayOfDate[x]
    // console.log(oldestDate2)
    if(+(year2[2]) < oldestDate ){
        oldestDate = +(year2[2]);
        year = oldestDate2; 
    }
}

console.log(year);



function calculateTotal(cart) {
    // Enter your code here

    let result= 0;
    for(let x of cart){
       let carts = x.split(' ');
       if(carts[0]=== 'M'){
             result += carts[1]*500;
        }
               else if(carts[0]=== 'J'){
             result += carts[1]*3000;
        }
               else if(carts[0]=== 'T'){
             result += carts[1]*1500;
        }
               else if(carts[0]=== 'P'){
             result += carts[1]*10;
        }
     }
   console.log(result);
}

calculateTotal(["M 6","J 1", "T 2"]) 
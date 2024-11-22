// 1. Generate the first n Fibonacci numbers and print the sum of  prime numbers, even numbers and odd numbers

let n=10;
let f1=0;
let f2=1;
let f3=0;
let sum=0;  
let sum1=0; 
let sum2=1; 
if(n===1){
    sum=f1;
}
else if(n===2){
    sum=f2;
}
for(let i=3; i<=n; i++){
    f3=f1+f2; 
    f1=f2;
    f2=f3; 
    if(f3>1){
        let prime=true;
        for(let j=2; j<f3; j++){ 
            if(f3%j==0){
                prime=false;
            }
        }
            
        if(prime){
                sum+=f3;  
            }
    }
    if(f3%2==0){ 
        sum1+=f3; 
    }
    else{
        sum2+=f3; 
    }
}
console.log(`sum of prime numbers : ${sum}`)
console.log(`sum of even numbers : ${sum1}`)
console.log(`sum of odd numbers : ${sum2}`)

// 2. create a function that generates an array of all prime numbers between two given integers, start and end.

function arrayOfPrimeNumbers(a,b){
    let prime=true;
    let arr=[];
    for(let i=a; i<=b; i++){
        prime=true;
    for(let j=2; j<Math.sqrt(b); j++){
        if(i%j==0 && i!==j){
           prime=false;
        }
    }
    if(prime){
        arr.push(i);
    }
    }
    console.log(arr);
}
arrayOfPrimeNumbers(2,10);

// 3. A farmer has a rectangular field of length L and width W. They want to divide this field into the maximum 
// number of equal square plots without any leftover land. Write an algorithm to find the side length of the largest possible square plot

// let arr=[1,4,6,10,12];
// let maxGap=[];
// let max=0;
// let gap=0;
// let houseNum1=0;
// let houseNum2=0;
// for(let i=0; i<arr.length-1; i++){
//     maxGap.push(Math.abs(arr[i]-arr[i+1]));
// }
// max=Math.max(...maxGap);
// for(let j=0; j<arr.length-1; j++){
//     gap=Math.abs(arr[j]-arr[j+1]);
//     if(gap==max){
//        houseNum1=arr.indexOf(arr[j])+1;
//        houseNum2=arr.indexOf(arr[j+1])+1;
//     }
// }
// console.log(max)
// console.log(`${houseNum1} , ${houseNum2}`)


let arr=[1,4,6,10,12];
let max=0
let house=""
for(let i=0;i<arr.length;i++){
    let start=arr[i]
    let end=arr[i-1]
    let output=start-end
    if(output>max){
        max=output
       house= i+" "+(i+1)
    }

}
console.log(max);
console.log(house);



// Given a two positive integers m and n, where m < n, print the sum of all prime numbers between them. 
// For m = 5 and n = 10, 5 and 7 are prime numbers between 5 and 10 so the answer is 12

let m=8;
 n=10;
let prime=true;
 sum="";
for(let i=m ; i<=n; i++){
    prime=true;
    for(let j=2; j<n; j++){
        if(i%j==0 && i!==j){
           prime=false;
        }
    }
    if(prime){
        sum+=i+",";
    }
}
if(sum===""){
    console.log(`no prime number between ${m} and ${n}`)
}
else{
console.log(sum.slice(0,-1));
}

// Given the value of n print the below pattern n = 3 
// 3 2 1

//     2 1

//         1

n=3;
for(let i=n; i>0; i--){
    let gap="";
    let result="";
    for(let j=i; j>0; j--){
        result+="*"+" ";
    }
    for(let k=n; k>i; k--){
        gap+="  ";
    }
    console.log(gap+result);
}

// Professor Kishore wanted the kids to learn about Special numbers. (A two- digit number is said to be a special 
// number if the sum of its digits and the product of its digits is equal to the number itself. For example, 
// 19 is a special number. The digits in 19 are 1 and 9. The sum of the digits is 10 and the product of the digits is 9. 10+9=19)

n=10;
m=30;
for(let i=n; i<=m; i++){
    let sum=0;
    let result=0;
    let index1=0;
    let index2=0;
    result=i.toString();
    index1=result[0];
    index2=result[1];
    sum=Number(index1)+Number(index2);
    result=Number(index1)*Number(index2);
    sum+=result;
    if(sum==i){
       console.log(i);
    }
}



n=7;
for(let i=1; i<=n; i++){
    let result="";
    if(i===1 || i===n){
        for(let j=1; j<=n; j++){
            result+='* ';
        }
    }
    else{
        for(let k=1; k<=n; k++){
            if(k===1){
                result+='*';
            }
            else if(k===n){
                result+=' *';
            }
            else{
                result+="  ";
            }
        }
    }
    console.log(result);
}


n=3;
for(let i=1; i<=n; i++){
    let gap="";
    let result="";
    for(let j=1; j<=i; j++){
        result+=j+" ";
    }
    for(let k=n; k>=i; k--){
        gap+=" ";
    }
    console.log(gap+result);
}
for(let i=n; i>0; i--){
    let gap="";
    let result="";
    for(let j=1; j<i; j++){
        result+=j+" ";
    }
    for(let k=i; k<=n+1; k++){
        gap+=" ";
    }
    console.log(gap+result);
}

n=6
for(let i=1; i<=n; i++){
    let result="";
    for(let j=1; j<=n; j++){
        if(i===1 || i===n || j===1 || j===n){
            result+="* ";
        }
        else{
            result+="  ";
        }
    }
    console.log(result);
}

// function areCoPrime(a, b) {
//     // Enter your code here  
//    let temp=0;
//    let c=0;
//    if(a>b || a==b){
//        c=a;
//    }
//    else{
//        c=b
//    }
//    for(let i=2; i<c; i++){
//        if(a%i===0 && b%i===0){
//         console.log("Not a co-prime");
//         break;
//        }
//    }
//    if(temp===1){
//        console.log("co-prime");
//    }
// }

// areCoPrime(8,15)


n=5
 arr=[0,1];
for(let i=0; i<n; i++){
    let temp=0
    temp=arr[arr.length-1]+arr[arr.length-2];
    arr.push(temp);
}
console.log(arr[n-1]);


// Given a number find the LCM of a number
let a=10;
let b=20;
let c=a*b;
for(let i=2; i<=c; i++){
    if(i%a==0 && i%b==0){
        console.log(i);
        break;
    }
}

// Write code to implement the fibonacci sequence.
function fibonacci(m){
let f1=0;
let f2=1;
let f3=0;
if(m===1){
    console.log(f1);
}
else if(m===2){
    console.log(f2);
}
for(let i=3; i<=m; i++){
    f3=f1+f2;
    f1=f2;
    f2=f3;
}
console.log(f3);
}
fibonacci(5);

//  Print the following pattern if n = 4
//      1

//   *    *

//  3  3  3

// *  *   *  *  

function pattern(n){
    for(let i=1; i<=n; i++){
        let gap="";
        let result="";
        for(let j=1; j<=i; j++){
            if(i%2==0){
                result+="* ";
            }
            else{
                result+=i+" ";
            }
        }
        for(let k=n; k>=i; k--){
            gap+=" ";
        }
            console.log(gap+result);
    }
}
pattern(6)


function factorial(n){
    let num=1;
    let sum=0;
    for(let i=1; i<=n; i++){
        num=num*i;
        sum+=num
    }
    console.log(sum);
}
factorial(4)

// Given a value n=5 print the below pattern   1 # 3 # 5  
 function oneLinePattern(n){
     let result="";
     for(let i=1; i<=n; i++){
         if(i%2==0){
             result+="# ";
         }
         else{
             result+=i+" "; 
         }
     }
     console.log(result)
 }
oneLinePattern(5)


// 1. You have a number n, write a program which tells if it is a power of 3 or not. 
// Hint: 9 is a power of 3, we arrive at 9 as 3x3 (3 multiplied with itself twice)

function findThePowerOf3(n){
    let power=3;
    for(let i=0; i<n; i++){
        power*=3;
        if(power===n){
            console.log("yes");
            break;
        }
        else if(power>n){
            console.log("no");
            break;
        }
    }
}
findThePowerOf3(2);

// n = 3
// * * *
// # # #
// * * *
n=4;
for(let i=1; i<=n; i++){
    let result="";
    for(let j=1; j<=n; j++){
        if(i%2==0){
            result+="# ";
        }
        else{
            result+="* ";
        }
    }
    console.log(result);
}

// Write an algorithm to find the square root of a number without using a library function with accuracy upto 2 decimal places. 

n=64;
for(let i=2; i<=n; i++){
    if(i*i===n){
        console.log(i);
        break;
    }
}

// 1. Given an array check if its sum of all of its numbers is divisble by 11 or not

let array=[1,2,3,5,9];
 sum=0;
 for(let arr of array){
    sum+=arr
 }
 if(sum%11==0){
    console.log("yes");
 }
 else{
    console.log("no");
 }

 
//  1

//  $ $

// 3 3 3

//   $ $

//     1

function dollarPattern(n){
   for(let i=1; i<n; i++){
    let gap="";
    let result="";
    for(let j=1 ; j<=i ; j++){
        if(i%2==0){result+="$ "}
    else{result+=i+" "}
    }
    for(let k=n; k>=i ; k--){
        gap+=" "
    }
    console.log(gap+result);
   }

   for(let i=n; i>0; i--){
       let gap="";
       let result="";
       for(let j=i; j>0; j--){
        if(i%2==0){
            result+="$ ";
        }
        else{
            result+=i+" ";
        }
       }
       for(let k=i; k<=n; k++){
        gap+=" ";
       }
       console.log(gap+result);
   }
}
dollarPattern(3);


// 3. Find the LCM for given 3 numbers a, b, c

function findLCM(a,b,c){
    let sum=(a*b)*c;
    for(let i=2; i<sum; i++){
        if(i%a==0 && i%b==0 && i%c==0){
            console.log(i)
            break;
        }
    }
}
findLCM(5,25,125);


function GCD(a,b){
    let c=Math.min(a,b);
    let temp=0;
    for(let i=2; i<c; i++){
        if(a%i==0 && b%i==0){
            temp=i;
        }
    }
    console.log(temp);
}
GCD(48,18);



function integerToBinary(n) {
    if (n === 0) return "0";
    let binary = "";
    let number = n;

    while (number > 0) {
        let remainder = number % 2;
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }
    
    return binary;
}

console.log(integerToBinary(2));

function fibonacci02(n){
    let arr=[];
    let f1=0;
    let f2=1;
    let f3=0;
    for(let i=f1; i<n; i++){
        f3+=f1;
        f1=f2;
        f2=f3;
        arr.push(f3);
    }
    console.log(arr);
}
fibonacci02(2)


function sumOFPrimeno(n){
    let sum=0;
    for(let i=2; i<=n; i++){
        let prime=true
        for(let j=2; j<=Math.sqrt(i); j++){
            if(i%j==0){
                prime=false;
                break;
            }
        }
        if(prime){
            sum+=i;
        }
    }
    console.log(sum)
}
sumOFPrimeno(5)

// *
// ***
// *****
// ***
//  *

let x=5;
for(let i=1; i<x; i++){
    let gap="";
    let result="";
    for(let j=1; j<=i; j++){
        if(i%2!==0){
            result+="* ";
        }
    }
    for(let k=x; k>i ; k--){
        gap+=" "
    }
    console.log(gap+result);
}
for(let i=x; i>0; i--){
    let gap="";
    let result="";
    for(let j=i; j>0; j--){
        if(i%2!==0){
            result+="* ";
        }
    }
    for(let k=i; k<x; k++){
        gap+=" "
    }
    console.log(gap+result);
}


function digitSumFact(n){
    let sum=0;
    let fact1=0;
    let strValue=n.toString();
    for(let i=0; i<strValue.length; i++){
        let fact2=1; 
        let index=strValue[i];
        fact1=Number(index);
        for(let j=1; j<=fact1; j++){
            fact2=fact2*j;
        }
        sum+=fact2;   
    }
    if(sum===n){
        console.log("Strong");
    }
    else{
        console.log("Not Strong")
    }
} 
digitSumFact(145)


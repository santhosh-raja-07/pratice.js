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
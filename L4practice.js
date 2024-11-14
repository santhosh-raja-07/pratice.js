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
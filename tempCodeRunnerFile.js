function missingNumbers(arr , brr){
    let ar = {};
let br = {};
let res =[];

for(let i of arr){
    ar[i] = (ar[i] || 0) + 1;
}
for(let j of brr){
    br[j] = (br[j] || 0) + 1;
}
for(let key in br){
    if(!ar[key]){
        res.push(key)
    }
    else if(ar[key] !== br[key]){
         res.push(key)
    }
}
return res;
}
console.log(missingNumbers([7,2,5,3,5,3] , [7,2,5,4,6,3,5,3]))
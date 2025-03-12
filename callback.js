function mergeSort(arr){
    if(arr.length == 1) return arr;
    let rightarr = mergeSort(arr.slice(0 ,  Math.floor(arr.length/2)));
    let leftarr = mergeSort(arr.slice( Math.floor(arr.length/2)));
    return mergeArr(rightarr , leftarr);
}
function mergeArr(rightarr , leftarr){
    let res = [];
    let right = 0;
    let left = 0;
    while( right < rightarr.length  &&  left < leftarr.length ){
        if(rightarr[right] < leftarr[left]){
            res.push(rightarr[right]);
            right++;
        }
        else {
            res.push(leftarr[left]);
            left++;
        }
    }
    while(right < rightarr.length){
        res.push(rightarr[right]);
        right++
    }
    while(left < leftarr.length){
        res.push(leftarr[left])
        left++
    }
    return res;
}
console.log(mergeSort([4,3,2,1,7,8,9,5]));

function splitArr(array){
    let midvalue = 0;
    let arr = []
    let fst = array[0];
    let lst = array[array.length-1];
    let mid = array[Math.floor(array.length / 2)];
    if(lst > fst > mid || lst < fst < mid){
        arr[arr.length] = fst;
        midvalue = fst;
    }
    else if(fst > mid > lst || fst < mid < lst){
        arr[arr.length] = mid;
        midvalue = mid;
    }
    else{
        arr[arr.length] = lst;
        midvalue = lst;
    }
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] > midvalue && midvalue != array[i]) arr.push(array[i]); 
        else if (array[i] < midvalue && midvalue != array[i]) arr.unshift(array[i]);
    }
    return arr;
}

console.log(splitArr([5,7,3,4,2,9]));

function KnightL(n){
    let arr=[];
    for(let i=1; i<n; i++){
        for(let j=1; j<n; j++){
            let newArr=[i,j];
            arr.push(newArr);
        }
    }
    console.log(arr);
}
KnightL(5)
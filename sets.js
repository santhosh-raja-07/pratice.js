function removedup(arr){
    let array = []
for(let i=0; i<arr.length; i++){
    let check = true
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
            check = false
        }
    }
    if(check){
        array[array.length] = arr[i]
    }
}
console.log(array)
}
removedup([3, 4, 1, 5, 1, 9, 3])


function addNewElement(arr, num){
let check= true
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        check = false
    }
}
if(check){
    arr[arr.length] = num
}
console.log(arr)
}
addNewElement([3, 4, 1, 5, 9] , 3)


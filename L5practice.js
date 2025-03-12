
//bubble sort
function bubbleSort(arr){
    let count = 1
while(count>0){
    count = 0
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
            count++
        }
    }
}
    console.log("sorted array")
    console.log(arr)

}


bubbleSort([4,3,2,1])
bubbleSort(["apple" , "alpha" , "amaran" , "actor"]);

//selection sort 

// function selectionSort( array ){
// for(let i=0; i<array.length-1; i++){
//     let minInd =i;
//     let min = array[]
//     for(let j=i+1; j<array.length; j++){
//         if(array[minInd] > array[j]){
//            minInd = j
//         }
//         console.log(array.join(" "))
//         if(i != minInd){
//         let temp = array[minInd]
//         array[minInd] = array[i]
//         array[i] = temp
//         } 
//     }
// }
// console.log(array)
// }

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minInd = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minInd]){
                minInd = j;
            }
        }
        let temp = arr[minInd]
        arr[minInd] = arr[i]
        arr[i] = temp;
        
    }
    console.log(arr) ;
}

selectionSort([4,3,2,1]);
selectionSort(["apple" , "alpha" , "amaran" , "actor"])


// Insertion sort
function insertionSort(array) {
     for(let i=1; i<array.length; i++){
        let temp = array[i];
        let j = i-1
        while(j >= 0 && array[j] > temp){
                array[j+1] = array[j]
                j--
        }
        array[j+1] = temp
     }
     console.log(array)
}

insertionSort([1, 5, 3, 2, 10]);



function bubbleSortObj(StudentObj , key){
    swapped();
function swapped(){
    let swap = false;
    for(let i=0; i<StudentObj.length-1; i++){
        if(StudentObj[i][key].toLowerCase() > StudentObj[i+1][key].toLowerCase()){
            let temp = StudentObj[i];
            StudentObj[i]= StudentObj[i+1];
            StudentObj[i+1] = temp
            swap = true;
        }
       
    }
    if(swap){
        swapped();
    }
    else{
        console2.log("sorted array")
       console.log(StudentObj)

    }

}

}
let student = [
    {
        name: "jeeva",
        age: 21,
        mark: 85,
        city: "Coimbatore"
      },
      {
        name: "Sathish",
        age: 20,
        mark: 92,
        city: "Thiruvanamalai"
      },
      {
        name: "sham",
        age: 21,
        mark: 78,
        city: "Chennai"
      },
      {
        name: "Hussian",
        age: 20,
        mark: 88,
        city: "Chennai"
      }
];
bubbleSortObj(student, ["name"])



function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1;
        }
        
    }
    return -1;
}

console.log(binarySearch([3, 5, 4, 7, 6, 2, 8], 8));


function insertionSort(array) {
    for(let i=1; i<array.length; i++){
        let currentvalue = array[i];
        let j = i-1;
        while(j >= 0 && array[j] > currentvalue){
            console.log(array.join(" "))
            array[j+1] = array[j]
            j--
        }
        array[j+1] = currentvalue
    }
    console.log(array)
}
insertionSort([6,5,4,3,2,1])


function shellSort(arr){
    let j = arr.length / 2
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[j]){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
        j++
    }
    console.log(arr)
}
shellSort([6,5,4,3,2,1])


function select(arr){
    // for(let i=0; i<arr.length; i++){
    //     let minindex = i
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[minindex] > arr[j]){
    //             minindex = j
    //         }
    //     }
    //     let temp = arr[minindex]
    //     arr[minindex] = arr[i]
    //     arr[i] = temp
    // }
    // console.log(arr)

    for(let i=1; i<arr.length; i++){
        let temp = arr[i]
        let j=i-1
        while(j >=0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
        console.log(arr)
    }
    console.log(arr)
}
select([2,1,4,5,6])

function jumpingOnClouds(c, k) {
    let e = 100;
    let i = 0;
    let check = true;
    while(check){
        if(c[i] == 0){
            e = e-1;
        }
        else if(c[i] == 1){
            e = e - 3;
        }
        i+=k
        i=i%c.length;
        if(i == 0){
            check = false;
        }
    }
    return e;

}
// n = 8, k = 2
// c = [0, 0, 1, 0, 0, 1, 1, 0]

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0] , 2));

//Missing Numbers

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
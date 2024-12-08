
//bubble sort
function bubbleSort(arr){

swap();
function swap(){
    let swapped = false;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
            swapped = true;
        }
       
    }
    if(swapped){
        swap();
    }
    else{
        console.log("sorted array")
       console.log(arr)

    }

}
}

bubbleSort([4,3,2,1])
bubbleSort(["apple" , "alpha" , "amaran" , "actor"]);

//selection sort 

function selectionSort( array ){
for(let i=0; i<array.length-1; i++){
    for(let j=i+1; j<array.length; j++){
        if(array[i] > array[j]){
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp 
        }
           
    }
}
console.log(array)
}

selectionSort([4,3,2,1]);
selectionSort(["apple" , "alpha" , "amaran" , "actor"])


// Insertion sort

function insertionSort(array){
    inserted()
    function inserted(){
        let check = false
        for(let i=1; i<array.length; i++){
            if(array[i-1] > array[i]){
                let temp = array[i]
                array[i] = array[i-1]
                array[i-1] = temp
                check = true
            }
        }
        if(check){
            inserted()
        }
        else{
            console.log(array)
        }
    }
}
console.log(insertionSort([12,5,3,2,10]))


// function bubbleSortObj(StudentObj){
//     swapped();
// function swapped(){
//     let swap = false;
//     for(let i=0; i<StudentObj.length-1; i++){
//         if(StudentObj[i].city > StudentObj[i+1].city){
//             let temp = StudentObj[i];
//             StudentObj[i]= StudentObj[i+1];
//             StudentObj[i+1] = temp
//             swap = true;
//         }
       
//     }
//     if(swap){
//         swapped();
//     }
//     else{
//         console.log("sorted array")
//        console.log(StudentObj)

//     }

// }

// }
// bubbleSortObj([
//     {
//         name: "Jeeva",
//         age: 21,
//         mark: 85,
//         city: "Coimbatore"
//       },
//       {
//         name: "Sathish",
//         age: 20,
//         mark: 92,
//         city: "Thiruvanamalai"
//       },
//       {
//         name: "Sham",
//         age: 21,
//         mark: 78,
//         city: "Chennai"
//       },
//       {
//         name: "Hussian",
//         age: 20,
//         mark: 88,
//         city: "Chennai"
//       }
// ])
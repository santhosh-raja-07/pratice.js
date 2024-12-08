function bubbleSortObj(StudentObj){
    swapped();
function swapped(){
    let swap = false;
    for(let i=0; i<StudentObj.length-1; i++){
        if(StudentObj[i].city > StudentObj[i+1].city){
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
        console.log("sorted array")
       console.log(StudentObj)

    }

}

}
bubbleSortObj([
    {
        name: "Jeeva",
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
        name: "Sham",
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
])
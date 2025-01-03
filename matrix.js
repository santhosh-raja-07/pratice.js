let mat1 = [[1,2,3] ,
            [4,5,6] ,
            [7,8,9]]

let mat2 = [[1,2,3] ,
            [4,5,6] , 
            [7,8,9]]

if(mat1.length == mat2.length){
    let outArr = []
    for(let i = 0; i < mat1.length; i++){
        let inArr = []
        for(let j = 0; j < mat1[i].length; j++){
               inArr[inArr.length] = mat1[i][j] + mat2[i][j]
        }
        outArr[outArr.length] = inArr
    }
    console.log(outArr)
}
else{
    console.log("invalid matrix")
}



if(mat1.length == mat2.length){
    let outArr = []
    for(let i = 0; i < mat1.length; i++){
        let inArr = []
        for(let j = 0; j < mat2[i].length; j++){
            let num = 0
            for(let k=0; k < mat1[j].length; k++){
                num += mat1[i][k] * mat2[k][j]
            }
            inArr[inArr.length] = num
        }
        outArr[outArr.length] = inArr
    }
    console.log(outArr)
}
else{
    console.log("invalid matrix")
}

//     [30, 36, 42],[66, 81, 96],[102, 126, 150]
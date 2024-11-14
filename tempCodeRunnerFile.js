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
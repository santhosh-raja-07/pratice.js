a = 3;
b = 7;
if(a > b){
  c = a
}
else{
    c = b
}
for(let i=2; i<a+1 ; i++){
     if ((i*c) % a == 0){
        console.log(i*c)
        break;
     }
}
function isPalindrome(x) {

    let changeStr = x.toString();
    let res = "";
    for(let i=changeStr.length; i>=0; i--){
          res += changeStr[i];
          console.log(res)
    }
    console.log(Number(res))
    if( x === Number(res) ){
        return true;
    }
    else{
        return false;
    }
};
console.log(isPalindrome(121))
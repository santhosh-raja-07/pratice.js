let arrayOfDate = ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"];
let year="";
let temp=arrayOfDate[0].split('-')
let oldestDate=+(temp[2]);
console.log(oldestDate)

for(let x=1; x<arrayOfDate.length; x++){
    let year2 = arrayOfDate[x].split('-');
    console.log(year2)
    let oldestDate2 = arrayOfDate[x]
    console.log(oldestDate2)
    if(+(year2[2]) < oldestDate ){
        oldestDate = +(year2[2]);
        year = oldestDate2; 
    }
}

console.log(year);
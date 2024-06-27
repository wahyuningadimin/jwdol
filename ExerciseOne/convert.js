// Convert days to years, months and days
// function convert(numberOfDays) {
//     var year= Math.floor(numberOfDays/365);
//     var month= Math.floor((numberOfDays-365)/30);
//     var day= (numberOfDays-365)%30;
//     console.log(year + " year, " + month + " month, " + day + " days");
// }
// convert(400);

// OR
function convert(numberOfDays) {
    var year= Math.floor(numberOfDays/365);
    var month= Math.floor((numberOfDays-365)/30);
    var day= (numberOfDays-365)%30;
        if (year >1, month >1, day >1){
        console.log(year + " year, " + month + " months, " + day + " days");
    } else if (year === 1, month > 1, day > 1){
        console.log(year + " years, " + month + " months, " + day + " days");
        }
}
convert(600);
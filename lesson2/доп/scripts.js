'use strict';

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'.bold(), 'Sunday'.bold().italics()];

for(let i = 0; i < week.length; i++) {
   document.writeln(week[i] + "<br/>");
}

let arr = ['32345', '12345', '33333', '77777', '76545123', '0989787', '8654210'];


for(let i = 0; i < arr.length; i++) {
    let numArr = arr[i],
        firstNum3 = numArr.indexOf("3", 0),
        firstNum7 = numArr.indexOf("7", 0);
    if (firstNum3 == 0 || firstNum7 == 0) {
        console.log(arr[i]);
    }
 }
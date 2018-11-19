//1 additional
let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substring(1);
console.log(str);

//2 additional
let re = /-/g;
str = str.replace(re, " ");
console.log(str);

//3 additional
str = str.split(" ");
let strPop = str.pop();
str = str.join(" ");
let strPopRe = /им/g;
strPop = strPop.replace(strPopRe, "о");
console.log(str);
console.log(strPop);

//4 additional
let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let qube = arr[i];
    
    if (typeof(arr[i]) === 'string'){
        continue;        
    }
    qube = qube ** 3;
    sum = sum + qube;    
}
sum = Math.sqrt(sum);
console.log(sum);

//5 additional
function short(text) {    
    if(typeof(text) != 'string'){
        alert("Введено не строковое значение");        
    } else {
        text = text.trim();
    }
    alert ((text.length > 50) ? text.slice(0, 50) + '...' : text);
}
var text = prompt("Введите текст");
short(text);
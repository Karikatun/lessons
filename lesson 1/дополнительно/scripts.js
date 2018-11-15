'use srtict';

var num = 33721;
num *= num;
console.log(num);

num = num ** 3;

while (num>100){
    num /= 10;
}

num = Math.floor(num);
console.log(num);
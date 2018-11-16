'use srtict';

var num = 33721;
let arr = [];
let j = 0;
let mult = 1;
for(let i = 0; i < 5; i++){
    arr[j] = num % 10;
    num = Math.floor(num / 10);
    mult = mult * arr[j];
    j++;
}
console.log(mult);

mult = mult ** 3;

while (mult > 100){
    mult /= 10;
}

mult = Math.floor(mult);
console.log(mult);

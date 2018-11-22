'use strict';

//изменение фоновой картинки
function changeBgImage() {
    document.body.style.background = "url('img/apple_true.jpg') center no-repeat";
}
changeBgImage();

//добавление пятого элемента
function addPointFive() {
    let fifthElement = document.createElement('li');
    fifthElement.className = 'menu-item';
    fifthElement.textContent = 'Пятый пункт';   
    let menu = document.querySelector('.menu');
    menu.appendChild(fifthElement);
}
addPointFive();

// Восстановление порядка пунктов
function sortItems() {
    let ul = document.getElementsByTagName('ul'),
        li = document.getElementsByTagName('li'),
        sortArr = [];

    for(var i = 0, l = li.length; i < l; i++){
        sortArr.push(li[i].innerHTML);
    }

    let temp = sortArr[1];
    sortArr[1] = sortArr[2];
    sortArr[2] = temp;

    for(let i = 0, l = li.length; i < l; i++){
    li[i].innerHTML = sortArr[i];
    }
}
sortItems();

//изменение заголовка
function changeHeadline(){
    let text = document.querySelector('#title'),
        textArr = [],
        textString;
    
    textArr.push(text.innerHTML);
    textString = textArr[0].split(' ');
    textString.splice(12,0,'подлинную');
    textArr = textString.join(" ");
    text.innerHTML = textArr;    
}
changeHeadline();


// удаление рекламы
function deleteAdv(){
    let column = document.querySelectorAll('.column'),
        adv = document.querySelector('.adv');
    column[1].removeChild(adv);       
}
deleteAdv();

// отношение к технике эпл
function aboutApple(){
    let promptIn = document.querySelector('#prompt');
    promptIn.innerHTML = prompt('Каково ваше отношение к продукции компании Apple?','');
}
aboutApple();
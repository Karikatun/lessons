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
    let menu = document.querySelectorAll('.menu')[0],
        menuItem = document.querySelectorAll('.menu-item');
    menu.insertBefore(menuItem[2], menuItem[1]);
}
sortItems();

//изменение заголовка
function changeHeadline(){
    let title = document.querySelector('#title');
    title.textContent = 'Мы продаем только подлинную технику Apple';
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
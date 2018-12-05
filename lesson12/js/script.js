window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelectorAll('.info-header')[0],
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideContent(1);

    function showContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });


    let deadLine = '2019-01-05';

    function getTimeRemaning(endTime) {
        let diff = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((diff / 1000) % 60),
            minutes = Math.floor((diff / 1000 / 60) % 60),
            hours = Math.floor((diff / (1000 * 60 * 60)));

        function addZero(num) {
            if (num < 10) {
                return (`0${num}`);
            } else {
                return num;
            }
        }

        return {
            'total': diff,
            'hours': addZero(hours),
            'minutes': addZero(minutes),
            'seconds': addZero(seconds)
        };
    }


    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let diff = getTimeRemaning(endTime);
            hours.textContent = diff.hours;
            minutes.textContent = diff.minutes;
            seconds.textContent = diff.seconds;



            if (diff.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);


    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showTab() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', showTab);

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    let descrBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descrBtn.length; i++) {
        descrBtn[i].addEventListener('click', showTab);
    }

    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let hashval = item.getAttribute('href');
            let target = document.querySelector(hashval);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    let form = document.querySelectorAll('.main-form, #form');

    form.forEach(function (item) {
        let message = {
            loading: 'Загрузка...',
            succsess: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...'
        };

        let input = item.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        statusMessage.classList.add('status', 'fade');

        item.addEventListener('submit', function (e) {
            e.preventDefault();
            item.appendChild(statusMessage);
            let formData = new FormData(item);

            function postData(data) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            }else {
                                reject();
                            }
                        } 
                    };
                    request.send(data);
                });
            }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.textContent = message.loading)
            .then(() => statusMessage.textContent = message.succsess)
            .catch(() => statusMessage.textContent = message.failure)
            .then(clearInput);

        });        
    });



    let validate = (input, regex) => {
        let value = input.value;
        input.addEventListener('input', function (e) {
            let newValue = e.target.value;
            if (newValue.match(regex)) {
                input.value = value;
                return;
            }
            value = newValue;
        });
    };

    let telInput = document.querySelectorAll('input[type="tel"]');
    telInput.forEach(function (input) {
        let len = 0;

        validate(input, /[^+()\d-]/);

        input.addEventListener('click', () => {
            input.value = "+";
        });

        input.addEventListener('blur', () => {
            if (input.value.length < 3) {
                input.value = "";
            }
        });

        input.addEventListener('keydown', () => {
            let curLen = input.value.length;

            if (curLen < len) {
                len--;
                return;
            }

            if (curLen == 2) input.value = input.value + "(";
            if (curLen == 6) input.value = input.value + ")-";
            if (curLen == 11) input.value = input.value + "-";
            if (curLen == 14) input.value = input.value + "-";
            if (curLen > 16) input.value = input.value.substring(0, input.value.length - 1);
            len++;
        });
    });

});
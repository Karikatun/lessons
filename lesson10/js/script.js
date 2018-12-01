window.addEventListener('DOMContentLoaded', function () {

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

    info.addEventListener('click', function (event) {
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


    let deadLine = '2018-12-05';

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

    close.addEventListener('click', function () {
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
});
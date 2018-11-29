window.addEventListener('DOMContentLoaded', function(){

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelectorAll('.info-header')[0],
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideContent(1);

    function showContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });


    let deadLine = '2018-12-01';

    function getTimeRemaning(endTime){
        let diff = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((diff/1000) % 60),
            minutes = Math.floor((diff/1000/60) % 60),
            hours = Math.floor((diff/(1000*60*60)));

            if (hours < 10){
                hours = '0' + hours;
            }

            if (minutes < 10){
                minutes = '0' + minutes;
            }

            if (seconds < 10){
                seconds = '0' + seconds;
            }

        return {
            'total' : diff,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
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

            

            if (diff.total <= 0){
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

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    let descrBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descrBtn.length; i++) {
        descrBtn[i].addEventListener('click', function () {
            
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

        });
    }        
});
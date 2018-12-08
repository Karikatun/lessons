function reverseTimer() {
    
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
}

module.exports = reverseTimer;
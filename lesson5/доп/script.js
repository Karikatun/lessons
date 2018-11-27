function dateNow() {
    let Data = new Date(),
        Year = Data.getFullYear(),
        Month = Data.getMonth(),
        Day = Data.getDate(),
        Hour = Data.getHours(),
        Minutes = Data.getMinutes(),
        Seconds = Data.getSeconds();
    if (Hour < 10) {
        Hour = '0' + Hour;
    }
    if (Minutes < 10) {
        Minutes = '0' + Minutes;
    }
    if (Seconds < 10) {
        Seconds = '0' + Seconds;
    }
    if (Day < 10) {
        Day = '0' + Day;
    }
    if (Month < 10) {
        Month = '0' + Month;
    }

    function getWeekDay(Data) {
        let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

        return days[Data.getDay()];
    }

    document.writeln(`${Hour}:${Minutes}:${Seconds} ${Day}.${Month + 1}.${Year} ${getWeekDay(Data)}`);
}
dateNow();

function dateDif() {
    let date1 = document.querySelector('.date1'),
        date2 = document.querySelector('.date2'),
        inputDate1 = date1.querySelectorAll('.input'),
        inputDate2 = date2.querySelectorAll('.input'),
        btn = document.querySelectorAll('button')[0],
        result = document.querySelectorAll('.result-value')[0];

    btn.addEventListener('click', function () {
        let item1 = [],
            item2 = [],
            time1 = 0,
            time2 = 0;
        for (let i = 0; i < inputDate1.length; i++) {
            item1[i] = inputDate1[i].value;
        }
        for (let i = 0; i < inputDate2.length; i++) {
            item2[i] = inputDate2[i].value;
        }
        item1 = item1.join('-');
        item2 = item2.join('-');

        time1 = new Date(Date.parse(item1)).getTime();
        time2 = new Date(Date.parse(item2)).getTime();

        let timeDiff = Math.abs(time1 - time2);
        result.textContent = Math.ceil(timeDiff / (1000 * 3600 * 24));
    });

}
dateDif();
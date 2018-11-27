setTimeout(function dateNow() {
    let Data = new Date(),
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


    document.body.textContent = `${Hour}:${Minutes}:${Seconds}`;
    setTimeout(function(){
        document.body.textContent = '';
    }, 999);

    setTimeout(dateNow, 1000);
});

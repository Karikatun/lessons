function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        placeVal = document.querySelector('#select').options[0].value,
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function checkNum(input) {
        input.onkeyup = function (input) {
            return this.value = this.value.replace(/\D/g, '');
        };
    }
    checkNum(persons);
    checkNum(restDays);

    function sum() {
        if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            total = (daysSum + personsSum) * 4000 * placeVal;
            totalValue.innerHTML = total;
        }
    }

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        sum();

    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        sum();
    });

    place.addEventListener('change', function () {
        placeVal = this.options[this.selectedIndex].value;
        sum();
    });
}

module.exports = calc;
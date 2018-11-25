'use strict';


let getStart = document.querySelectorAll('.start')[0],
    elementsValue = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),

    expensesInput = document.querySelectorAll('.expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesInput = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

getStart.addEventListener('click', function(){    
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    elementsValue[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    if (typeof(appData.budget) == 'undefined'){
        expensesBtn.disabled = true;
    } else {
        expensesBtn.disabled = false;

        for (let i = 0; i < expensesInput.length; i++) {
            let necessarily = expensesInput[i].value,
                cost = expensesInput[++i].value;
            if ((typeof (necessarily) == "string") && typeof (+cost) == "number" && necessarily != '' && cost != '') {
                appData.expenses[necessarily] = cost;
                sum += +cost;
                elementsValue[3].textContent = sum;
            } else {
                expensesBtn.disabled = true;
            }
        }
    }
});

optionalExpensesBtn.addEventListener('click', function(){
    elementsValue[4].textContent = '';
    if(typeof(appData.budget) == 'undefined'){
        expensesBtn.disabled = true;         
    } else {
        expensesBtn.disabled = false;

        for (let i = 0; i < optionalExpensesInput.length; i++) {
            let optional = optionalExpensesInput[i].value;

            if ((typeof(optional)) === 'string' && (typeof(optional) != null) && optional != '' && optional.length < 50 && optional != 'undefined' && !(optional.match(/[^а-яА-ЯёЁ]/g))) {
                appData.optionalExpenses[i] = optional;   
                elementsValue[4].textContent += appData.optionalExpenses[i] + ' ';             
            } else {
                expensesBtn.disabled = true;
            }
        }       
    }
});

countBudgetBtn.addEventListener('click', function(){
    if(appData.budget != "undefined") {
        countBudgetBtn.disabled = false;
        appData.moneyPerDay = ((appData.budget - +elementsValue[3].textContent) / 30).toFixed();
        elementsValue[1].textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            elementsValue[2].textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            elementsValue[2].textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            elementsValue[2].textContent = "Высокий уровень достатка";
        } else {
            elementsValue[2].textContent = "Произошла ошибка";
        }
    } else {
        countBudgetBtn.disabled = true;
    }
    
    
});

chooseIncome.addEventListener('input', function(){    
    let items = chooseIncome.value;

    appData.income = items.split(', ');
    elementsValue[5].textContent = appData.income;        
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        elementsValue[6].textContent = appData.monthIncome.toFixed(1);
        elementsValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        elementsValue[6].textContent = appData.monthIncome.toFixed(1);
        elementsValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

//Объект, содержащий данные
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
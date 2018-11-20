'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

//Объект, содержащий данные
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let necessarily = prompt("Введите обязательную статью расходов в этом месяце"),
                cost = prompt("Во сколько обойдется?");
        
            if ((typeof(necessarily)) === 'string' && (typeof(necessarily) != null) && (typeof(cost)) != null && necessarily != '' && cost != '' && necessarily.length < 50) {
                console.log("done");
                appData.expenses[necessarily] = cost;
            } else{
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget /30).toFixed();
        alert("Ваш бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++){
            let optional = prompt("Введите необязательную статью расходов в этом месяце");
                    
            if ((typeof(optional)) === 'string' && (typeof(optional) != null) && optional != '' && optional.length < 50) {
                appData.optionalExpenses[i+1] = optional;
            } else{
                i--;
            }
        }
    },
    chooseIncome: function(){
        for (let i = 0; i < 1; i++){
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != ''){
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();                              
            } else {
                i--;
            }            
        } 
        appData.income.forEach(function(item, i){
            item = item[0].toUpperCase() + item.substring(1);
            alert("Способы доп. заработка: " + (i + 1) + ". " + item);
        });        
    }    
};

function output(){
    console.log("Наша программа включает в себя данные: ");

    for (let key in appData){
        console.log(key + ": " + appData[key]);
    }
}
output();


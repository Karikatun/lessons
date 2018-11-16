'use strict';


let budget = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

//Объект, содержащий данные
let appData = {
    appBudget: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: "",
    savings: false
};

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

//for через while
/*
let i = 0;
while (i < 2){
    let necessarily = prompt("Введите обязательную статью расходов в этом месяце"),
        cost = prompt("Во сколько обойдется?");

    if ((typeof(necessarily))=== 'string' && (typeof(necessarily) != null) && (typeof(cost)) != null && necessarily != '' && cost != '' && necessarily.length < 50) {
        console.log("done");
        appData.expenses[necessarily] = cost;
    } else{

    }
    i++;
}
*/

//for через do-while
/*
let i = 0;
do {
    let necessarily = prompt("Введите обязательную статью расходов в этом месяце"),
    cost = prompt("Во сколько обойдется?");

    if ((typeof(necessarily))=== 'string' && (typeof(necessarily) != null) && (typeof(cost)) != null && necessarily != '' && cost != '' && necessarily.length < 50) {
        console.log("done");
        appData.expenses[necessarily] = cost;
    } else{

    }
    i++;
}
while(i < 2);
*/
appData.moneyPerDay = appData.appBudget /30;

alert("Ваш бюджет на день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
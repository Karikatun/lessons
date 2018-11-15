'use strict';


let budget = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

// Вывод на бюджет и дату
console.log(budget);
console.log(time);

//Данные на обязательные траты
let necessarily1 = prompt("Введите обязательную статью расходов в этом месяце");
let cost1 = prompt("Во сколько обойдется?");

let necessarily2 = prompt("Введите обязательную статью расходов в этом месяце");
let cost2 = prompt("Во сколько обойдется?");

let expenses = {
    answers1: (necessarily1 + " : " + cost1),
    answers2: (necessarily2 + " : " + cost2)
};

//Объект, содержащий данные
let appData = {
    appBudget: budget,
    timeData: time,
    appExpenses: expenses,
    optionalExpenses: "",
    income: "",
    savings: false
};

// console.log(expenses.answers1);
// console.log(expenses.answers2);
alert("Ваш бюджет на день: " + budget/30);
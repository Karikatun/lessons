'use strict';


let getStart = document.querySelector('.start'),
    elemantsValue = document.querySelector('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),

    expensesInput = document.querySelectorAll('.expenses-item'),

    button1 = document.getElementsByTagName('button')[0],
    button2 = document.getElementsByTagName('button')[1],
    button3 = document.getElementsByTagName('button')[2],

    optionalexpensesInput = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue= document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
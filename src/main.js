'use strict'

let input = document.getElementById('user-input');

document.querySelectorAll('.key-others').forEach((othersKey) => {
    othersKey.addEventListener('click', (e) => {
        const keyText = e.target.textContent.trim();

        if (keyText === 'Ac') {
            input.value = '0';
        } else if (keyText === 'C') {
            input.value = input.value.slice(0, - 1);
        } else if (keyText === '%') {

            if (input.value !== '') {
                try {
                    input.value = eval(input.value) / 100;
                } catch (error) {
                    input.value = 'Error'
                }
            }
        } else if (keyText == '=') {

            if (input.value !== '') {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
            }
        }
    })
})

document.querySelectorAll('.number').forEach((numKey) => {
    numKey.addEventListener('click', (evt) => {
        const number = evt.target.textContent.trim();
        if (input.value === '0') {
            input.value = number;
        } else {
            input.value += number;
        }
    })
})

document.querySelectorAll('.key-operate').forEach((operatorKey) => {
    operatorKey.addEventListener('click', (event) => {
        const operator = event.target.textContent.trim();
        const lastChar = input.value.slice(-1)
        const validOperator = ['-', '+', '/', '*'];

        if (input.value === '') {
            if (operator === '-') {
                input.value += operator;
            }
        } else if (!validOperator.includes(lastChar)) {
            input.value += operator;
        } else {
            input.value = input.value.slice(0, -1) + operator;
        }
    })
})

document.querySelector('.decimal').addEventListener('click', () => {
    const lastNum = input.value.split(/[\+\-\*\/]/).pop();
    if (!lastNum.includes('.')) {
        input.value += '.';
    }
});
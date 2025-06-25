'use strict';

const input = document.getElementById('user-input');
const btn = document.querySelectorAll('button');



btn.forEach((btnKey) => {
    btnKey.addEventListener('click', (e) => {
        const value = e.target.textContent.trim();
        if (value == 'Ac') {
            input.value = '';
        } else if (value == 'C') {
            input.value = input.value.slice(0, -1);
        } else if (value == '=') {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = 'Error';
            }
        }
    })
})
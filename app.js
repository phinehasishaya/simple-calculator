function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

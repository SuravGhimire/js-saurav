function changeNumber(value) {
    let numberBox = document.getElementById('numberBox');
    let currentNumber = parseInt(numberBox.value);
    numberBox.value = currentNumber + value;
}
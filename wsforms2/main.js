function calculate() {
    var deposit = document.getElementById('deposit').value;
    var rate = document.getElementById('rate').value / 100;
    var years = document.getElementById('years').value;

    var total = deposit * Math.pow(1 + rate, years);

    document.getElementById('result').textContent = 'Итоговая сумма: ' + total.toFixed(2);
}

function toggleDetails() {
    var details = document.getElementById('details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
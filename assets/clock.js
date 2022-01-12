var toDoubleDigits = function (num) {
    num += "";
    if (num.length === 1) {
        num = "0" + num;
    }
    return num;
};

setInterval(() => {
    var date = new Date();
    document.getElementById('yyyy').innerHTML = date.getFullYear();
    document.getElementById('mm').innerHTML = String(toDoubleDigits(date.getMonth() + 1));
    document.getElementById('dd').innerHTML = String(toDoubleDigits(date.getDate()));
    document.getElementById('hh').innerHTML = String(toDoubleDigits(date.getHours()));
    document.getElementById('mi').innerHTML = String(toDoubleDigits(date.getMinutes()));
    document.getElementById('ss').innerHTML = String(toDoubleDigits(date.getSeconds()));
}, 500);


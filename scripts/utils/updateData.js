export function updateData(value) {
    const textElement = document.getElementById('qualtricsString');
    textElement.textContent += value;
}
/*
export function updateData(s) {
    var fs = require('fs');
    fs.appendFile('../data.txt', s, function (err) {
        if (err) throw err;
    });
}
*/
let count = 0;
const button = document.getElementById("increment");
const button2 = document.getElementById("decrement");
const button3 = document.getElementById("reset");
const textHolder = document.getElementById("count");
textHolder.innerHTML = count;

button.addEventListener("click", function() {
    textHolder.innerHTML = ++count;
});

button2.addEventListener("click", function() {
    textHolder.innerHTML = --count;
});

button3.addEventListener("click", function() {
    count === 0;
    textHolder.innerHTML = count;
});

function startTime() {
    let today = new Date();
    document.getElementById('txt').innerHTML =
        today.getHours() + ":" +
        today.getMinutes() + ":" +
        today.getSeconds();
        setTimeout(startTime, 500);
}

function addNumber() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;

    document.getElementById("sum").value = result;
}
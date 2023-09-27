let counter = 0;

function updateCounter(value) {
    counter += value;
    document.getElementById("count").innerText = counter;
}
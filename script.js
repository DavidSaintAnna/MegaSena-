let intervalId = null;
const container = document.getElementById("results");
let count = 0;
let arrayNumber = [];

function generateNumber() {
    let add = true;
    count++;
    let randomNumber = Math.floor(Math.random() * (61 - 1) + 1);

    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] === randomNumber) {
            add = false;
        }
    }

    if (add) {
        arrayNumber.push(randomNumber);
    } else {
        count--
        return
    }

    let div = document.createElement("div");
    div.setAttribute("class", "numbers");
    const text = document.createTextNode(randomNumber);
    div.appendChild(text);
    container.append(div);

    if (count === 6) {
        clearInterval(intervalId);
        intervalId = null;
        arrayNumber = [];
        return
    }
}

function displayNumbers() {
    if (!intervalId) {
        count = 0;
        container.innerHTML = "";
        intervalId = setInterval(() => generateNumber(), 1000);
    }
}

function main() {
    document.getElementById("btn").addEventListener("click", displayNumbers);
}

main();
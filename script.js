let intervalId = null;
const container = document.getElementById("results");
let count = 0;

function generateNumber() {
    if (count >= 5) {
        clearInterval(intervalId);
        intervalId = null;
    }
    console.log("number")
    let randomNumber = Math.floor(Math.random() * 60)
    let div = document.createElement("div")
    div.setAttribute("class", "numbers")
    const text = document.createTextNode(randomNumber)
    div.appendChild(text)
    container.append(div)
    count++;
    console.log(count)
}

function displayNumbers() {

    if (!intervalId) {
        count = 0;
        container.innerHTML = "";
        intervalId = setInterval(() => generateNumber(), 1000)
    }

}

function main() {
    document.getElementById("btn").addEventListener("click", displayNumbers)
}

main();
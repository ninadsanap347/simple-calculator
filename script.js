function appendValue(value) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);

    // Prevent consecutive operators
    if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result = new Function('return ' + expression)(); // Safer than eval()
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Invalid Input");
        clearDisplay();
    }
}

// Allow keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        let display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }
});

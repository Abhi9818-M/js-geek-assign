const root = document.getElementById("root")

const inputField = document.getElementById("inputText")

function showValue(){
    const inputFieldValue = inputField.value;
    const p = document.createElement("p")
    p.innerText = inputFieldValue;
    root.append(p);
}

const input = document.querySelectorAll(".calculator .btn");
const result = document.querySelector(".result");
let expression = "";

function registerInput(event) {
    const value = event.target.innerText;

if (value === "C") {
    expression = "";
    result.innerText = "0";
} 

else if (value === "=") {
    try {
        let answer = eval(expression);
        result.innerText = answer;
        expression = answer;
    } catch {
        result.innerText = "Expression Error";
        expression = "";
    }
}

else if (value !== "=") {

    if(value === "Back") {
        expression = expression.slice(0, -1);
        result.innerText = expression || "0";
    }

    else {
   expression += value;
    result.innerText = expression;
}
}
}

input.forEach((btn)=>{
    btn.addEventListener("click",registerInput);
});

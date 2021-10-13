const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calc__buttons");
const display = calculator.querySelector(".calc__display");
const operationButtons = buttons.querySelectorAll("[data-type='operator']");

buttons.addEventListener ("click", event => {

   const btn = event.target;
   const btn_value = btn.textContent;
   const display_value = display.textContent;
   const {type} = btn.dataset;
   const {previous_btn_type} = calculator.dataset;
   
   if (type === "number") {
       if (display_value === "0" || previous_btn_type === "operator") {
           display.textContent = btn_value;
       }
       else {
           display.textContent = display_value + btn_value;
       }
       if (previous_btn_type === "operator"){
           console.log(display_value);
       }
       
   }

   if (type === "operator") {
       operationButtons.forEach (button => {
           button.dataset.state = "";
       });
       btn.dataset.state = "selected";
       calculator.dataset.firstNumber = display_value;
       calculator.dataset.operator = btn.dataset.key;
   }

   if (type === "signChange") {
       console.log("signChange");
       num = (-1) * parseInt(display_value);
       display.textContent = num;
   }

   if (type === "equal") {
       const firstNumber = calculator.dataset.firstNumber;
       const operator = calculator.dataset.operator;
       const secondNumber = display_value;
       display.textContent = result(firstNumber, operator, secondNumber);
       console.log (secondNumber);
       console.log ("=" + display.textContent);
    }

   if (type === "clear") {
       display.textContent = "";
       delete calculator.dataset.firstNumber;
       delete calculator.dataset.operator;
       console.log ("clear");
   }

   calculator.dataset.previous_btn_type = type;
});

function result (firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    if (operator === "plus") {
        console.log("plus")
        return firstNumber + secondNumber;
    }
    if (operator === "minus") {
        console.log("minus")
        return firstNumber - secondNumber;
    }
    if (operator === "times") {
        console.log("times")
        return firstNumber * secondNumber;
    }
    if (operator === "divide") {
        console.log("divide")
        return firstNumber / secondNumber;
    }
}
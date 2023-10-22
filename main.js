let btnNumber = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let deleteButton = document.querySelector(".delete");
let operator = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal"); 
let currentOperator;
let operand1 = 0;
let operand2 = 0;



btnNumber.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.innerHTML == 0) {
      display.innerHTML = button.innerHTML;
    } else {
      display.innerHTML += button.innerHTML;
    }
  });
});

deleteButton.addEventListener("click", () => {
  display.innerHTML = 0;
});

operator.forEach((item)=> {
    item.addEventListener("click" , () => {
        operand1 = parseInt(display.innerHTML) ; 
        currentOperator = item.innerHTML ;
        display.innerHTML = 0;  
    })
})

equal.addEventListener("click" , () => {
    if(currentOperator == "+") {
        operand2 = parseInt(display.innerHTML);
        display.innerHTML = operand1 + operand2; 
        operand1 = parseInt(display.innerHTML);
        console.log(operand1); 
        console.log(operand2); 
        
    }
    if(currentOperator == "-") {
        operand2 = parseInt(display.innerHTML);
        display.innerHTML = operand1 - operand2;
        operand1 = parseInt(display.innerHTML); 
        
    }
    if(currentOperator == "*") {
        operand2 = parseInt(display.innerHTML);
        display.innerHTML = operand1 * operand2;
        operand1 = parseInt(display.innerHTML); 
        
    }
    if(currentOperator == "/") {
        operand2 = parseInt(display.innerHTML);
        display.innerHTML = operand1 / operand2;
        operand1 = parseInt(display.innerHTML);
          
    }
})



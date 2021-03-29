function calculator() {
     var num1 = parseInt(prompt("Enter the first number: "));
         var operation = prompt("Enter the operation to perform e.g (*,+,-,/): ");
     var num2 = parseInt(prompt("Enter the second number: "));
     switch (operation) {
         case "+":
               var result = num1 + num2;
               break;
         case "*":
               var result = num1 + num2;
               break;
         case "-":
               var result = num1 + num2;
               break;
         case "/":
               var result = num1 + num2;
               break;
      default:
       alert("Invalid operations")
       break;
              
     }
 return result;
}
var result = calculator();
alert("The result is :" + result)
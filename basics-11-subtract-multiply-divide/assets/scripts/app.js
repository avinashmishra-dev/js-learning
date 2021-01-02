const currentValue = 0;
let currentNumber = currentValue;
let logEntries = [];                                              //unassigned array


// gets input from input field
function getuserNumber() {
  return parseInt(userInput.value);                              //parseInt is used to convert the string value in integer value
}

//Generates and writes calculation log
function createandWriteOutput(operator, resultbeforeCals, calsNumber) {
  const calsDescription = `${resultbeforeCals} ${operator} ${calsNumber}`;
  outputResult(currentNumber, calsDescription);                     //outputResult is from vendor file
}

function writelog(operation, previousresult, currentnum, result) {
  const logEntry = {                                                //creating object
    operation: operation,                                           //properties of object
    previousresult: previousresult,
    currentnum: currentnum,
    result: result,
  };

  logEntries.push(logEntry);                                          //pushes new element in an array
  console.log(logEntry.currentnum);
  console.log(logEntry.operation);
  console.log(logEntries);
}

//logic of add function
function add() {
  const userNumber = getuserNumber();
  const initialNumber = currentNumber;
  currentNumber += userNumber;                  //shortcut operator to avoid wasting time for currentNumber = currentNumber + userNumber
  createandWriteOutput("+", initialNumber, userNumber);

  /* const logEntry = {                           //creating object
    operation: "Add",                             //properties of object
    previousresult: initialNumber,
    number: userNumber,
    result: currentNumber,
  };    

  logEntries.push(logEntry); //pushes new element in an array
  console.log(logEntry.operation);
  console.log(logEntry.number);
  console.log(logEntries); //prints the array

  // console.log(logEntries[1]);   //accessing specific element in an array */

  writelog("Add", initialNumber, userNumber, currentNumber);                         //calling the fuction
}

//logic of subtract function
function subtract() {
  const userNumber = getuserNumber();
  const initialNumber = currentNumber;
  currentNumber -= userNumber;                      //shortcut operator to avoid wasting time currentNumber = currentNumber - userNumber
  createandWriteOutput("-", initialNumber, userNumber);
  writelog("subtract", initialNumber, userNumber, currentNumber);
}

//logic of multiply function
function multiply() {
  const userNumber = getuserNumber();
  const initialNumber = currentNumber;
  currentNumber *= userNumber;                     //shortcut operator to avoid wasting time currentNumber = currentNumber * userNumber
  createandWriteOutput("*", initialNumber, userNumber);
  writelog("multiply", initialNumber, userNumber, currentNumber);
}

//logic of divide function
function divide() {
  const userNumber = getuserNumber();
  const initialNumber = currentNumber;
  currentNumber /= userNumber;                      //shortcut operator to avoid wasting time currentNumber = currentNumber / userNumber
  createandWriteOutput("/", initialNumber, userNumber);
  writelog("divide", initialNumber, userNumber, currentNumber);
}

addBtn.addEventListener("click", add);                          //from vendor file
subtractBtn.addEventListener("click", subtract);                //from vendor file
multiplyBtn.addEventListener("click", multiply);                //from vendor file
divideBtn.addEventListener("click", divide);                    //from vendor file

function hello(name){
  alert("Hello their myself " + name);
}

hello("Avinash Mishra");

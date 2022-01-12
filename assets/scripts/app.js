let currentResult = 0;
let logEntries =[]; //Array

//Gets input form input field
function getUserNumberInput(){
  return parseInt(userInput.value);
}
//Generates and Writes calculation log
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; 
  outputResult(currentResult,calDescription); //From vendor file
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){   //Re-usable function that uses Object
  const logEntry = {          //Object
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add(){
  const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
      createAndWriteOutput('+',initialResult,enteredNumber);
      writeToLog('ADD',initialResult,enteredNumber,currentResult);
  }
  function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
      createAndWriteOutput('-',initialResult,enteredNumber);
      writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
    }
    function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
      createAndWriteOutput('*',initialResult,enteredNumber);
      writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
      }
      function divide(){
        const enteredNumber = getUserNumberInput();
        const initialResult = currentResult;
        currentResult = currentResult / enteredNumber;
          createAndWriteOutput('/',initialResult,enteredNumber);
          writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
        }
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

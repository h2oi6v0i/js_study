const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

/**
 * return을 쓰면 코드가 실행되지 않았다는 걸 의미한다.
 * 조건문을 사용하고 충족되지 않았을 때 함수를 실행하면 함수의 나머지를 실행하는 게 의미가 없다.
 * 즉, calculationType이 아래의 값 중에 해당하지 않을 경우 다음에 나오는 함수를 계속 작동시키는 게 의미가 없기 때문에
 * 바로 return을 때려서 다른 코드 실행을 멈추는 것이다.
 * ADD ~ DIVIDE 중 하나라도 일치하면 false가 나오기 때문에 return문은 실행되지 않고 바로 다음 코드로 넘어간다!
 */

function calculateResult( calcultaionType ) {
    const enteredNumber = getUserNumberInput();

    /** 내가 원하는 값(ADD, SUBRACT, MULTIPLY, DIVIDE)이 없을 때  */
    if ( calcultaionType !== 'ADD' && calcultaionType !== 'SUBTRACT' && calcultaionType !== 'MULTIPLY' && calcultaionType !== 'DIVIDE' || enteredNumber === 0 ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;

    if ( calcultaionType === 'ADD' ) {
        currentResult += enteredNumber;
        mathOperator = '+';

    } else if ( calcultaionType === 'SUBTRACT' ) {
        currentResult -= enteredNumber;
        mathOperator = '-';

    } else if ( calcultaionType === 'MULTIPLY' ) {
        currentResult *= enteredNumber;
        mathOperator = '*';

    } else if ( calcultaionType === 'DIVIDE' ) {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput( mathOperator, initialResult, enteredNumber );
    writeToLog( calcultaionType, initialResult, enteredNumber, currentResult );
}

function add() {
    calculateResult( 'ADD' );
}

function subtract() {
    calculateResult( 'SUBTRACT' );
}

function multiply() {
    calculateResult( 'MULTIPLY' );

}

function divide() {
    calculateResult( 'DIVIDE' );

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
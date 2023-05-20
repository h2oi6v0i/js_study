const defaultResult = 0;
let currentResult = defaultResult; // 다른 변수나 상수의 값으로 변수 초기화
let logEntries = []; // 기존의 이 배열에 새 요소를 추가하려면 .push() 사용

/** userInput을 숫자로 제공하는 함수 */
function getUserNumberInput() {
    return parseInt( userInput.value );
}

/** 결과 출력하는 함수 (3개의 매개변수가 필요함) */
function createAndWriteOutput( operator, resultBeforeCalc, calcNumber ) {
    const calcDescription =  `${ resultBeforeCalc } ${operator} ${ calcNumber }` 
    outputResult( currentResult, calcDescription );
}

/** 연산 로그 출력하는 함수 */
function writeToLog( operationIdentifier, prevResult, operationNumber, newResult  ) {
    const logEntry = {
        operation  : operationIdentifier,
        prevResult : prevResult,
        number     : operationNumber,
        result     : newResult
    };
    logEntries.push( logEntry );
    console.log( logEntries );
}

/** 덧셈 */
function add() {
    // const enteredNumber = parseInt( userInput.value ); 이렇게 쓰는 대신 위에 함수 만들어 주자!
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput( '+', initialResult, enteredNumber );
    writeToLog( 'ADD', initialResult, enteredNumber, currentResult );
}

/** 뺄셈 */
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput( '-', initialResult, enteredNumber );
    writeToLog( 'SUBTRACT', initialResult, enteredNumber, currentResult );

}

/** 곱셈 */
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput( '*', initialResult, enteredNumber );
    writeToLog( 'MULTIPLY', initialResult, enteredNumber, currentResult );
}

/** 나눗셈 */
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput( '/', initialResult, enteredNumber );
    writeToLog( 'DIVIDE', initialResult, enteredNumber, currentResult );
}

addBtn.addEventListener( 'click', add ); 
subtractBtn.addEventListener( 'click', subtract ); 
multiplyBtn.addEventListener( 'click', multiply ); 
divideBtn.addEventListener( 'click', divide ); 
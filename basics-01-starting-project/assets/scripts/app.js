const defaultResult = 0;
let currentResult = defaultResult; // 다른 변수나 상수의 값으로 변수 초기화

/** userInput을 숫자로 제공하는 함수 */
function getUserNumberInput() {
    return parseInt( userInput.value );
}

/** 결과를 출력하는 함수 (3개의 매개변수가 필요함) */
function createAndWriteOutput( operator, resultBeforeCalc, calcNumber ) {
    const calcDescription =  `${ resultBeforeCalc } ${operator} ${ calcNumber }` 
    outputResult( currentResult, calcDescription );
}

/** 덧셈 */
function add() {
    // const enteredNumber = parseInt( userInput.value ); 이렇게 쓰는 대신 위에 함수 만들어 주자!
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; // currentResult = currentResult + enteredNumber;
    createAndWriteOutput( '+', initialResult, enteredNumber );
}

/** 뺄셈 */
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput( '-', initialResult, enteredNumber );
}

/** 곱셈 */
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput( '*', initialResult, enteredNumber );
}

/** 나눗셈 */
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput( '/', initialResult, enteredNumber );
}

addBtn.addEventListener( 'click', add ); 
subtractBtn.addEventListener( 'click', subtract ); 
multiplyBtn.addEventListener( 'click', multiply ); 
divideBtn.addEventListener( 'click', divide ); 
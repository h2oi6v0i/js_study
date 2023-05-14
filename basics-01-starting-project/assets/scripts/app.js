const defaultResult = 0;
let currentResult = defaultResult; // 다른 변수나 상수의 값으로 변수 초기화

/** userInput을 숫자로 제공하는 함수 */
function getUserNumberInput() {
    return parseInt( userInput.value );
}

function add() {
    // const enteredNumber = parseInt( userInput.value ); 이렇게 쓰는 대신 위에 함수 만들어 주자!
    const enteredNumber = getUserNumberInput();

    /**
     * 템플릿 리터럴에서 전달하는 값이 숫자라고 해도 모두 문자열로 변환되기 때문에
     * calcDescription에서 userInput.value에 parseInt() 빼도 됨!
     */
    const calcDescription =  `${ currentResult } + ${ enteredNumber }` 
    currentResult = currentResult + enteredNumber;
    outputResult( currentResult, calcDescription );
}

addBtn.addEventListener( 'click', add ); 
const defaultResult = 0;
let currentResult = defaultResult; // 다른 변수나 상수의 값으로 변수 초기화

function add() {
    currentResult = currentResult + parseInt( userInput.value );
    outputResult( currentResult, '' );
    console.log( currentResult );
}

addBtn.addEventListener( 'click', add ); 
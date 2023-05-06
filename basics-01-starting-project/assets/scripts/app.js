/**
 * Variables
 * 
 * const
 * 상수를 자주 사용하자
 * 상수는 값을 변경할 수 없고 용도가 제한적이기 때문에 의도를 명시할 수 있다.
 */

const defaultResult = 0;
let currentResult = defaultResult; // 다른 변수나 상수의 값으로 변수 초기화

function add() {
    currentResult = currentResult + userInput.value;
    outputResult( currentResult, '' );
    console.log( currentResult );
}

// currentResult = add( 1, 2 ); 

// let calculationDescription = `( ${ defaultResult } + 10 ) * 3 / 2 - 1`;




// addBtn.addEventListener( 'click', add() ); 
// 클릭하면 함수를 실행해야 하는데 함수에 괄호 붙이면 바로 실행시키라고 지시하는 것이기 때문에 괄호 빼야 함
addBtn.addEventListener( 'click', add ); 

/**
 * JS는 실행 전에 파일 전체를 읽어서 함수를 찾은 후 자동으로 함수들을 맨 위로 끌어오는 방식으로 작동한다.
 * 그래서 함수 정의를 하단에서 한 후에 함수 정의를 한 부분의 위에서 함수를 사용한다고 하더라도 오류가 발생하지 않는다.
 * 하지만, let이나 const로 정의하는 변수와 상수의 경우에는 이런 방식으로 작동하지 않는다.
 */

/**
 * 한 줄로 된 표현식 뒤에는 세미콜론을 붙이지만 const defaultResult = 0;
 * 함수와 같이 중괄호가 있는 함수 선언문 뒤에는 세미콜론 안 붙인다. function add() { ... }
 */

/**
 * 함수 내부에 상수나 변수를 정의하는 것을 로컬 혹은 블록 스코프(block scope)라고 한다.
 * 해당 블록 내부에서만 사용 가능하다는 뜻이며 {}(중괄호)로 포함된 부분을 블록이라고 한다.
 * 
 * 함수는 주변의 모든 컨텍스트에 엑세스가 가능하다. 즉, 함수 위쪽이나 외부에 정의된 모든 변수에 엑세스가 가능하다.
 * 함수 내부에서 정의된 것은 함수 안에서만 사용할 수 있다.
 * 이를 어느 정도 가능하게 하는 유일한 방법이 return을 사용해서 반환하는 것이다.
 */

/**
 * return 문은 함수 실행을 종료한다. 그래서 return 문 뒤에 오는 코드는 실행되지 않는다.
 */
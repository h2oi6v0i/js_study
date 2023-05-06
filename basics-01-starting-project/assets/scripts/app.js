/**
 * Variables
 * 
 * const
 * 상수를 자주 사용하자
 * 상수는 값을 변경할 수 없고 용도가 제한적이기 때문에 의도를 명시할 수 있다.
 */

const defaultResult = 0;
let currentResult = defaultResult; // 다른 변수나 상수의 값으로 변수 초기화

currentResult = ( currentResult + 10 ) * 3 / 2 - 1;

// let calculationDescription = '( ' + defaultResult + ' + 10 ) * 3 / 2 - 1';
let calculationDescription = `( ${ defaultResult } + 10 ) * 3 / 2 - 1`;

outputResult( currentResult, calculationDescription );
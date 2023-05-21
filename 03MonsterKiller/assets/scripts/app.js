/** 
 * 플레이어의 최대 공격력
 * 내가 하드코딩한 이 코드가 전역 값임을 명시하기 위해 대문자로 작성
 */
const ATTACK_VALUE = 10;

/**
 * 플레이어와 몬스터의 최대 체력 
 * 전역 값이 아닌 이유는 추후에 사용자가 이 값을 설정하도록 할 것이기 때문이다.
 */
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars( chosenMaxLife );

/** 몬스터 공격 */
function attackHandler() {
    const damage = dealMonsterDamage( ATTACK_VALUE );
    currentMonsterHealth -= damage;
}

attackBtn.addEventListener( 'click', attackHandler );
/** 
 * 플레이어의 최대 공격력
 * 내가 하드코딩한 이 코드가 전역 값임을 명시하기 위해 대문자로 작성
 */
const ATTACK_VALUE = 10;

/** 몬스터의 최대 공격력 */
const MONSTER_ATTACK_VALUE = 14;

/**
 * 플레이어와 몬스터의 최대 체력 
 * 전역 값이 아닌 이유는 추후에 사용자가 이 값을 설정하도록 할 것이기 때문이다.
 */
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars( chosenMaxLife );

/** 
 * 몬스터 공격
 */
function attackHandler() {
    /** 몬스터 데미지 */
    const damage = dealMonsterDamage( ATTACK_VALUE );
    currentMonsterHealth -= damage;

    /** 플레이어 데미지 */
    const playerDamage = dealPlayerDamage( MONSTER_ATTACK_VALUE );
    currentPlayerHealth -= playerDamage;   

    /** 승리 기준 */
    if ( currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
        alert( 'You Won!' );
    } else if ( currentPlayerHealth <= 0 && currentMonsterHealth > 0 ) {
        alert( 'You Lost!' );
    } else if ( currentMonsterHealth <= 0 && currentPlayerHealth <= 0 ) {
        alert( 'You have a draw!' );
    }
}

attackBtn.addEventListener( 'click', attackHandler );
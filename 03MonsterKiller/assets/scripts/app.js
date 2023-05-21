/** 
 * 플레이어의 최대 공격력
 * 내가 하드코딩한 이 코드가 전역 값임을 명시하기 위해 대문자로 작성
 */
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;

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
 * 몬스터 데미지 수치
 * 이벤트 핸들러에 직접 연결하지 않기 때문에 핸들러라는 키워드 쓰지 않음
 * attackHandler(), strongAttackHandler()에서 직접 호출하는 함수
 */
function attackMonster( mode )  {
    /** 얘 왜 만듦? */
    let maxDamage;

    if ( mode === 'ATTACK' ) {
        maxDamage = ATTACK_VALUE;
    } else if ( mode === 'STRONG_ATTACK' ) {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    /** 몬스터 데미지 (일반 공격 / 강한 공격)*/
    const damage = dealMonsterDamage( maxDamage );
    currentMonsterHealth -= damage;

    /** 플레이어 데미지 */
    const playerDamage = dealPlayerDamage( MONSTER_ATTACK_VALUE );
    currentPlayerHealth -= playerDamage;

    /** 승리 기준 */
    if ( currentMonsterHealth <= 0 && currentPlayerHealth > 0 )  {
        alert( 'You Won!');
    } else if ( currentPlayerHealth <= 0 && currentMonsterHealth > 0 ) {
        alert( 'You Lost!');
    } else if ( currentMonsterHealth <= 0 && currentPlayerHealth <= 0 ) {
        alert( 'You have a draw!');
    }
}

/** 
 * ✨ 몬스터 공격 핸들러
 */
function attackHandler() {
    attackMonster( 'ATTACK' );
}

/** 
 * ✨ 더 강한 몬스터 공격 핸들러
 */
function strongAttackHandler() {
    attackMonster( 'STRONG_ATTACK' );
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
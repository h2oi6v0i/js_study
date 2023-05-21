/** 내가 하드코딩한 이 코드가 전역 값임을 명시하기 위해 대문자로 작성 */
const ATTACK_VALUE = 10; /** 플레이어의 최대 공격력 */
const STRONG_ATTACK_VALUE = 17; /** 플레이어의 강한 공격의 최대 공격력 */
const MONSTER_ATTACK_VALUE = 14; /** 몬스터의 최대 공격력 */
const HEAL_VALUE = 20; /** 회복 수치 */

/**
 * 플레이어와 몬스터의 최대 체력 
 * 전역 값이 아닌 이유는 추후에 사용자가 이 값을 설정하도록 할 것이기 때문이다.
 */
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars( chosenMaxLife );

/**
 * 💫 플레이어 공격 당하고, 승리 여부 확인
 */
function endRound() {
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
 * 💫 몬스터 데미지 수치
 * - 이벤트 핸들러에 직접 연결하지 않기 때문에 핸들러라는 키워드 쓰지 않음
 * - attackHandler(), strongAttackHandler()에서 직접 호출하는 함수
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

    endRound();
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

/** 
 * ✨ 플레이어 회복 핸들러
 * - 플레이어가 회복하는 것도 한 턴으로 카운트하기 때문에 회복하는 것과 동시에 몬스터의 공격도 받을 수 있다.
 */
function healPlayerHandler() {
    /** 함수 안에 전역 변수와 이름이 같은 지역 변수를 만들 수 있다. (변수 섀도잉) */
    let healValue;

    if ( currentPlayerHealth >= chosenMaxLife - HEAL_VALUE ) {
        alert( "You can't heal to more than your max initial health!" );
        /** 플레이어의 체력을 초기 체력만큼만 회복시키고 그 이상은 회복시키지 않겠다. */
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth( healValue );
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener( 'click', attackHandler );
strongAttackBtn.addEventListener( 'click', strongAttackHandler );
healBtn.addEventListener( 'click', healPlayerHandler )
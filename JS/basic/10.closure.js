/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 정적 환격의 조합입니다..
 * 
 * "내부함수에서 외부 함수의 변수를 사용할 때 우리는 클로저라고 한다. "
 * (상위 함수보다 하위함수가 더 오래 살아있는 경우)
 */


function getNumber(num){
    let number = 5;
    let age = 13;
    
    function inner(){
        return number * age * num;
    }

    return inner
}

let run = getNumber()

console.log(run());
console.log(run());
console.log(run());
console.log(run());
console.log(run());


const initDate = {
    loginUser : {
        name : '최지원'
    }
}


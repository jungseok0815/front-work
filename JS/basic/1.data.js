console.log("hello world");
console.log("hello","world");

//주석을 작성하는 첫번째 방법
console.log("안녕") //안녕을 출력하는 함수

/*
    이렇게 작성하면 
    여러줄을 한번에 주석처리할 수 있다.
*/

/*
    variable 선언
    1)var - 사용하지 않는다.
    2)const
    3)let
*/

// var name = "최지원"
// console.log(name);

// const age = {
//     name : "jungseok",
//     age : 18,
// };

// console.log(age);

// const name2 =[18,18,18,15,16];
// console.log(name2[1]);

// // let은 var에서 같은 이름의 중복생성을 하지 못하게 만든 자료형
// //다만 let과var는 모두 값을 변경하는 것은 가능하다.
// let name = "최지원";

// console.log(name);


// /**
//  * const는 상수를 표현하기위한 자료형 
//  * 값의 변경할 수 없다.
//  */

// const name3 = "최지원";


/**
 * Naming
 * 변수 이름을 지을 때 
 * 1. 일반적으로 영어를 사용하며 문자와 숫자 모두 사용할 수 있다.
 * 2. 특수기호는 언터스코어와 달러를 사용할 수 있다.
 * 3. 숫자로 이름을 시작할 수 없다.
 * 4. 키워드를 변수명으로 사용할 수 없다.
 * 5. var, let등등
 */

// let $name ="jungseok";

// let _name6 = "wjdtjr"

/**
 * naming type
 * 
 * 1 camelcase => 대부분의 언어에서 많이 사용하면 단어의 시작마다 대문자로 구분해준다.
 * 2.snackcase => 파이썬에서 주로 사용하며 단어의 시작마다 _로 구분해준다.
 * 3.pascalcase => c#및 ms계열 언어에서 많이 사용하며 매단어 시작은 대문자로 한다. 
 */



/**
 * Data Type
 * 
 * 여섯개의 원시타입과 1개의 오브젝트 타입이 있다.
 * 
 * 1)number (숫자)
 * 2)String (문자열)
 * 3)boolean(불리언)
 * 4)undefined(언디파인드)
 * 5)null
 * 6)Symbol(심볼)
 * 
 * 7)Object(객체)
 *   Function
 *   Array
 *   Object
 */

//number 타입

const age = 55;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);

//String 타임
const name = "차정석";
console.log(name);
console.log(typeof name);

/**
 * 1) newline => /n
 * 2) tab => /t
 * 3) \ => \\
 */

const str = "안녕하세요 저는 차정석입니다. \n \t나이는 25살입니다."
console.log(`안녕아헷요 ${str}`);


/**
 * boolean타입
 * 
 * 
 */

const istrue = true;
const ifFalse = false;

console.log(typeof ifFalse)
console.log(typeof istrue)

/**
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * undefined를 직접 넣어주는 것은 지향해야한다.
 */

let num;
console.log(num);


/**
 * null타입
 * undifined와 마찬가지로 값이 없다는 뜻이다.
 * 다만 js에서는 개발자가 명시적으로 없는 값을 초기화할때
 * null을 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init);


/**
 * simbol 
 * 유일무이한 값을 생성할 때
 */

const tmp1 = '1';
const tmp2 = 1;
console.log(tmp1 == tmp2);
console.log(tmp1 === tmp2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * object 타입
 * 
 * map
 * 키: 벨류 쌍으로 이루어져잇다.
 * key: value
 */

const dictionary={
    red: "빨간색",
    orange : "주황색",
    yellow : "노란색"
}

console.log(dictionary['red']);
console.log(dictionary.orange);
console.log(dictionary.yellow);



/**
 * Array타입
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */
const arr=["빨간색"];
console.log(arr)
arr.push("이상한색");
console.log(arr.length);












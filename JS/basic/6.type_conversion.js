/**
 * 타입변환
 * type conversion
 * 
 * 1)명시적
 * 2)묵시적
 */

let age = 45;
//명시적 
let strAge = age.toString();
console.log(typeof strAge);

//묵시적
let tmp = age + "";
console.log(typeof tmp);

console.log("98" + '2');

console.log("98" + 2);
console.log("98" - 2);

/**
 * 명시적 형변환 예시
 */

console.log((99).toString())
console.log((true).toString())
console.log((infinity).toString())

//숫자타입으로 ㅂ변ㄴ환
console.log(typeof parseInt('0'));
console.log(typeof parseFloat('1.12'));
console.log(typeof +('0'));

console.log((99).toFixed);

//boolean

console.log(!!'jungseok');
console.log(!!'');
console.log(!![]);

console.log({name : 'jiwon'} == {name : 'jiwon'})
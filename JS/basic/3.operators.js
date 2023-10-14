/**
 * operators
 * 
 * 연산자
 * 
 */

/**
 * 덧셈
 * 뺄셈
 * 곰셈
 * 나눗셈
 * 나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

/**
 * 증감연산자
 * num++ : 해당 명령줄을 실행한 후에 값을 1올려라
 * ++num: 먼저 값을 올리고 해당 명령들을 실행해라
 */

let num = 1;
num++;
console.log(num);
num--;
console.log(num);

num=0;
console.log(++num);//1
console.log(num++);

/**
 * 숫자타입이 아닌 타입에 + -를 사용하면 어떤방식으로 처리될끼?
 * 
 */

let tmp = '99'
console.log(+tmp);
console.log(typeof +tmp);

console.log(tmp);
console.log(typeof tmp);

tmp = false;
console.log(+tmp)
console.log(typeof +tmp);

tmp = 'jiwon';
console.log(+tmp); //NaN => NOT a NUMBER
console.log(typeof +tmp);

/**
 * 대입연산자
 * 
 */

num = 100;

num += 140;

/**
 * 비교연산자
 * == : 자료형을 제외하고 값만 비교
 * === : 자료형을 포함한 값을 비교
 */

console.log(5==5);
console.log(5 == '5');
console.log(0 == "");

console.log(0 == false);
console.log(1 == false);
console.log('1' == true);

console.log(0 === false);
console.log(1 === false);
console.log('1' === true);

console.log(5 != 5);
console.log(5 != '5');
console.log(5 != '');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(5 !== '');



/**
 * 비교연산자
 */


console.log(10>1);
console.log(10>=1);
console.log(10<1);
console.log(10<=1);

/**
 * 삼항 연산자
 */

console.log(10>0 ? "10이 0보다 크다" : "0이 10보다 크다")

/**
 * 논리연산자
 * &&: 양쪽 조건이 모두 true일 때 true를 반환
 * ||: 양쪽 조간중 하나라도 true라면 true 반환
 */

/**
 * 단축평가
 * 
 * &&를 사용했을 때 좌측이 true면 우측값반환
 * &&를 사용했을 때 좌측이 false면 죄측값 반환
 * ||를 사용했을 때 좌측이 true면 좌측값반환
 * ||를 사용했을 때 좌측이 false면 우측값 반환
 */
console.log(true ||"jungseok");
console.log(false ||"jungseok");
console.log(true &&"jungseok");
console.log(false &&"jungseok");


num = 85;
console.log(num||"값이 없습니다.");
console.log((num>80) && "통과하였습니다.")
console.log(10>1 && 20>2);

/**
 * null연산자
 */

let name = "jung";
console.log(name);

name = name ?? "차정석";
console.log(name);



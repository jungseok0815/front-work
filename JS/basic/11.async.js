/**
 * 비동기 프로그래밍
 */

// function work(){
//     const now = new Date();

//     /**
//      * getTime
//      * 밀리세컨초
//      * 모든 Date객체는 1970년도 1월 1일부터 지금 코드가 실행한 순간까지의 시간을 
//      * 밀리초로 반환한다.
//      * 
//      */

//     const milliSecond = now.getTime();
//     const afterMilliSecond = milliSecond + 3000 //지금으로부터 2초뒤

//     while(new Date().getTime() <= afterMilliSecond){

//     }
//     console.log("완료")
  
// }

console.log("코드시작");
work2();
console.log("끝");


function work2(){
    setTimeout(function(){
        console.log("완료")
    }, 3000)
}
/**
 * if
 */

let num = 5;
if(num%2 ===0){
    console.log("짝수");
}else{
    console.log("홀수");
}

num%2 ===0  ?  "짝수" : "gh";

if(num){
    console.log("num값이 존재한다");
}
const day = 'saturday';

switch(day){
    case "monday" : 
        console.log("월")
        break;
    case "tuesday" : 
        console.log("화")
        break;
    case "wednsday" : 
        console.log("수")
        break;
    default:
        console.log("그외")
        break;
}
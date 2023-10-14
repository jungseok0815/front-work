/**
 * callback
 */

// function getHuman(callback){
//     setTimeout(function(){ //서버에 요청한다는 가정(응답은 2초가 걸린다.)
//         callback({
//             name :  "김시원",
//             age : 44
//         });
//     },2000)

// }

// console.log("요청전송")
// getHuman(function(Human){
//     console.log("응답완료")
//     console.log(Human.name)
//     console.log(Human.age)
// })


/**
 * Promise
 * 
 */



// const timeoutPromise = new Promise(function(res, req){
//     setTimeout(()=>{
//         res("완료")
//     }, 2000)
// })

// timeoutPromise.then((res)=>{
//     console.log(res)
//     return timeoutPromise;
// }).then(()=>{

// })

const getPromise = (number) =>{
    return new Promise((res,req)=>{
        setTimeout(()=>{
            if(number>5){
                res("성공")
                }    
            else{
                req("실패")
            }
        },2000)
    })
}

const second = () =>{
    return new Promise((res, req)=>{
    setTimeout(()=>{
        res("두번째 성공");
    },3000)
})}
getPromise(6)
    .then((res)=>{
        console.log(res)
        second().then((res) =>{
            console.log(res);
        });
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        console.log("끝")
    })

// Promise.all([
//     getPromise(1),
//     getPromise(5),
//     getPromise(7),
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("끝")
// })

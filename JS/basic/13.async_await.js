/**
 * async / await
 */


const getPromise = (seconds) =>{
    return new Promise((res, req)=>{
         setTimeout(()=>{
            res(true);
        },seconds*1000)
    })
}

const getPromise2 = (seconds) =>{
    return new Promise((res, req)=>{
         setTimeout(()=>{
            res("성공");
        },seconds*1000)
    })
}


runner = async() =>{
    //async안에서 비동기 코드가 동기적으로 작동한다.w
    const res1 = await getPromise(1);
    if(res1 === true){
        const res4 = await getPromise2(3);
        console.log(res4);
    }
    const res2 = await getPromise(2);
    console.log(res2)
    const res3 = await getPromise(3);
    console.log(res3);
}
runner();

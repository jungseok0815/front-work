/**
 * Loops
 * 
 * 1)for
 */

for(let i = 1; i<=10; i++){
    console.log(i);
}

let total = 0;
for(let i = 5; i<=15; i++){
    total += i;
}
console.log(total);

for(let i =1; i<=9; i++){
    for(let j=1; j<=9; j++){
        console.log(i*j);
    }
}

/**
 * for .. in
 */

const human = {
    name : 'jungseok',
    age : 55,
    gender : '남자'
}



for(let key in human){
    console.log(human[key])
}

/**
 * for .. of
 */

const human2 = ["지원" , "지민", "소"]

for (let value of human2){
    console.log(value)
}

/**
 * while 
 */

let number = 0;

while(number<11){
    console.log(number);
    number++;
}

/**
 * do while
 * 
 */

number = 0;

do{
    console.log(number);
    number++;
}while(number<11)

/**
 * break
 * continue
 */


 number = 0;

while(number<11){
    if(number %2 ===1){
        number++;
        continue;
    }
    console.log(number);
    number++;
}


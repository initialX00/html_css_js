var a = 10;
console.log(10);
var a = 20; //본래라면 재선언은 안 되는게 정상이지만 자료형이 없는 var이기에 가능하다.
console.log(20);

console.log(b); //단독으로 적으면 오류가 뜨지만
var b = 30; //뒤에 선언을 해주면 오류가 뜨지 않는다.
console.log(b);

/*
 호이스팅
 선언과 정의가 먼저 실행되고 대입이 이후에 적용되는 현상
*/



//이러한 비정상적인 실행들을 고친것이 let과 const이다

let c = "c data"; //일반변수
console.log(c);
//let c = "c2 data"
c = "c2 data"
console.log(c);

const d = "d data"; //상수
console.log(d);
//d = "d2 data";
//console.log(d);
/**
 * 함수
 */

fx1(); //호이스팅

function fx1() { //반환타입도 자료형도 없기에 function으로 함수를 선언한다
    console.log("fx1 호출");
}

fx1();



function fx2(num1, num2) {
    console.log(num1 + num2);
}

fx2();

fx2(10, 20);

fx2(10); fx2(10, 20, 30); //매개변수 갯수가 달라도 오류가 뜨지않는다



console.log("========")


/*
 function fx2(num1, num2, num3) {
   console.log(num1 + num2 + num3);
 }

 fx2(10, 20, 30);
 
 오버로딩 되지 않는다.
 */

//default값을 부여하여 오버로딩 역할을 한다
function fx22(num1, num2 = 0, num3 = 0) {
    console.log(num1 + num2 + num3);
}
 

fx22(10, 20, 30);
fx22(10);
fx22(10, 20);



function fx222(num1, num2, num3 = 0) {
    console.log(num1 + (num2 ?? 0) + num3); 
} //논리연산자보다 산술연산자가 우선순위가 높기떄문에 괄호가 필요하다

fx222(10);



const num1 = 10;
function fx3() {
    return num1;
}

console.log(fx3()); //함수 끌어다 쓰기


console.log("========")

//함수 안에 함수 정의가 가능하다
function fx4() {
    console.log("fx4 호출");

    function fx5() {
        console.log("fx5 호출");
    }

    fx5();
}

fx4();


//함수를 변수에 담는다.
//함수의 주소값을 담기에 함수도 하나의 객체로 취급된다.
const fx6 = fx4; 

fx6();



function fx11() {
    console.log("fx11 호출");
}
function fx12() {
    console.log("fx12 호출");
}
function fx13() {
    console.log("fx13 호출");
}


const fxArray = [fx11, fx12, fx13];
console.log(fxArray);

for(let fx of fxArray) {
    fx();
}


console.log("========")


// callback 함수
function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}

function run(fx) {
    const result = fx(10, 20);
    console.log(result);
}

run(add); //함수도 객체로 취급되기에 메서드로 함수를 호출할 수 있다
run(sub);



//화살표 함수 (람다형)
function arrowfx1 (arg1, arg2) {
    return "리턴";
}

arrowfx1(1, 2);

const arrowfx2 = (arg1, arg2) => {
    return "리턴";
}

arrowfx2(3, 4);

const arrowfx3 = arg => arg + 1;

arrowfx3(10);


function run(fx) {
    fx();
}

run(() => console.log("test"));




/* 자료형은 일괄적으로 var로 선언한다 */
var name = "백아무개";
console.log(name);
console.log(typeof name);
var age = 31;
console.log(age);
console.log(typeof age);

var address;
console.log(address);
console.log(typeof address);
/* 선언만하고 값을 명시하지 않았을경우 값과 타입은 undefined이라는 타입으로 취급된다.
    null과는 다르다 */
address = 10;
console.log(address);
console.log(typeof address);
address += "10";
console.log(address);
console.log(typeof address);
/*자료형이 없기때문에 타입이 달라도
  변경이된다 */

address = null;
console.log(address);
console.log(typeof address);
/* null로 선언할 경우 object로 타입으로 정해져 객체로 취급된다. */
address = {
    si: "부산시",
    gugu: "부산진구"
};
console.log(address);
console.log(typeof address);

/**
 * number(숫자 - 정수,실수)
 * string(문자열)
 * boolean(논리 - 참, 거짓)
 * object(객체) - null포함
 * undefined(type 없음)
 * Nan(Not a number)
 */
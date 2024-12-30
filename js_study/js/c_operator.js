/*
  === 연산자 ===
  
  산술연산자
   +, -, *, /, %, **(제곱)
 */

console.log(5 ** 2);

/*
  증감연산자
   ++, --
  
  
  비교연산자
   <, <=, >, >=, ===, !==
  javascript의 특징은 기본적으로 변수의 타입이 정해지지 않다
  따라서 ==, !=은 잘 사용하지 않는다.
 */

console.log(1 == 1);
console.log(1 == "1"); //true /* 값만 비교, 타입은 비교하지 않는다 */
console.log(1 === "1"); //false /* 타입과 값을 비교 */
console.log(1 != "1");
console.log(1 !== "1");
console.log("==============");


/*
  논리연산자
   &&, ||
  
  단축평가
   -논리 자료 값 || anything
    논리 자료 값이 true면 true가 출력되고
    논리 자료 값이 false면 anything이 출력된다.
  
   -논리 자료값 && anything
    논리 자료 값이 true면 anything이 출력되고
    논리 자료 값이 false면 false가 출력된다.

   -null 병합 연산
    anything1 ?? anything2
    좌항의 값이 null이거나 undefined면 우항을 반환한다.
    좌항의 값이 null과 undefined가 아니라면 좌항을 반환한다.
 */

console.log(1 === 1 || "백아무개"); //true
console.log(1 !== 1 || "백아무개"); //백아무개
console.log(1 === 1 && "백아무개"); //백아무개
console.log(1 !== 1 && "백아무개"); //false

console.log(null ?? "십아무개");  //십아무개
console.log("천아무개" ?? "만아무개");  //천아무개

/*
 Not 연산
  !, !!
 false뿐만아니라 값이 정해져있지 않은 값들을 true로 반환한다.
 값이 있는 것들을 false로 반환한다.
*/
console.log("=========");
console.log(!"");
console.log(!0);
console.log(!!0); 
console.log(!10);
console.log(!null);
console.log(!undefined);
//배열은 내부에 값이 없더라도 배열의 주소는 존재하기때문에 false
console.log(![]); //false
console.log(![1,2,3,4]); //false
console.log(typeof []); //오브젝트나 배열로 취급된다.
//따라서 length로 0을 반환하여 처리한다
console.log(![].length); //true

var name = "";
if(!name) {
    console.log("이름이 비었습니다");
}

if(!!name) {
    console.log("이름이 비어있지 않습니다");
}



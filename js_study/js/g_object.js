//객체


const obj = {
    name: "백아무개",
    age: 31,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`)
}
//자기자신을 참조할 수 없어서, 주소를 적어준다.
//자바스크립트에서 this.는 다른 의미를 가진다.

obj.print();

const obj2 = {
    name: "백아무개",
    age: 31,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`), //쉼표가 있어도 무방하다
}

console.log(obj === obj2); //false //내용물이 같더라도 선언될때마다 주소가 새로 생성되기에 다르게 취급된다.




/*
 JSON
 속성(키)과 값으로 이루어진 표준데이터형식이다. 문자열로만 데이터가 존재한다.
 다만 함수는 담을 수가 없어서, 변환 시 함수는 누락된다.
 여러언어형태의 백엔드를 준비하기보단 여러 언어를 JSON으로 변환하여 백엔드에 보내주는 형태를 띈다.
 */

 console.log(JSON.stringify(obj) === JSON.stringify(obj2)); //true
 console.log(typeof JSON.stringify(obj)); //string

 /*
  object -> JSON  JSON.stringfy(object)
  Json -> object  JSON.parse(json문자열로 변환된 객체명)
  */


// User 객체생성 -  username, password, name, eamil
  const user  = {
    username: "",
    password: 1234,
    name: "백씨",
    email: "gogll@google",
    hobby: ["축구", "농구", "배구"],
    address: {
        si: "부산시",
        gungu: "부산진구"
    },
    printUserInfo: () => console.log("사용자정보 출력"),
    //JSON은 키와밸류만을 담기때문에 함수는 담을 수 없다.
  }

  user.username = "백아무개";

  const userJson = JSON.stringify(user);
  console.log(user);
  console.log(userJson); //문자열, 숫자, 배열, 객체, 객체 등 가능
  console.log(user.name);
  console.log(userJson.name); //JSON 형태이기때문에 주소참조 불가능

  const convertUser = JSON.parse(userJson); //JSON을 다시 오브젝트로 변환
  console.log(convertUser.name);
  console.log(convertUser); //JSON은 함수를 담을 수 없다.





  const student = {
    name: "김준일",
    age: 31,
    address: "부산 동래구",
    name: "김준이" //map자료형이기에 key가 중복될 수 없고, 나중의 것이 덮어씌워진다
  }

  console.log(student);


  const student2 = {
    ...student, //... - 스프레드 연산자, 요소만을 불러온다 
    name: "김준삼"
  }
  
  console.log(student2);

  
  //변수 입력하기
  const key = "age"
  const value = 32;

  const student3 = {
    ...student,
    [key]: value,  //키값은 대괄호[]
  }
  console.log(student3);

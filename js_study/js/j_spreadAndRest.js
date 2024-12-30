const obj = {
    data1: "d1",
    data2: 10,
    data3: [1, 2, 3, 4],
};
const obj2 = {
    ...obj,
    data2: 20,
}


/*
 비구조 할당(구조분해)
*/
// const data1 = obj.data1;
// const data2 = obj.data2; 위 두식은 아래식과 같다
const { data1:d1, data2:d2 } = obj; //:으로 변수명 변경가능
console.log(d1, d2); //d1 10

const nums = [ 1, 2, 3, 4, 5 ];
const[ n1, n2, n3 ] = nums;
console.log(n1, n2, n3); //1 2 3

const { data2:dd2, ...obj3 } = obj; //data2를 제외한 나머지를 obj3로 선언 
//여기서 쓰이는 ...스프레드가 비구조할당 rest이다
console.log(obj3);

const[ n4, n5, ...newNums ] = nums; //첫번째, 두번째 숫자를 제외한 나머지를 newNums로 선언
console.log(newNums);
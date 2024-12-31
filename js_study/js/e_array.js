/*
 배열
*/



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //const로 인해 주소 고정
console.log(numbers);
for(let i = 0; i < numbers.length; i++) { //일반 for문
    console.log(numbers[i]);
}
for(let num of numbers) { //for each문
    console.log(num);
}
//ArrayList와 섞은형태, ramda식 구형가능, 작대기 하나가 아니라 두개 = 사용
numbers.forEach((num) => console.log(num)); 

numbers.push(10); //배열에 값 추가하기. (자바의 add)
console.log(numbers); /* 큐 구조 */
console.log(numbers.pop()); //10 /* 스택 구조 */
//pop으로 값을 꺼낸다(제거됨)

/*
 특정요소를 제거하는 함수가 없기때문에
 특정요소를 제거하고 싶을때
 해당요소 이전의 배열과 이후의 배열을 따로 만들어 합친다.
*/

console.log("========")

console.log(numbers.includes(5)); //값을 포함하고 있는 확인 (자바의 contains)
console.log(numbers.indexOf(3)); //해당 값의 인덱스
console.log(numbers.lastIndexOf(3)); //indexOf와 동일하지만 탐색을 뒤에서부터한다.

console.log(numbers.concat([11, 12, 13, 14, 15])); //두 배열의 병합
console.log(numbers); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15 ]
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);//병합이 새로운 배열이 만들어지는것이지 적용이되는것이 아니다.
console.log(newNumbers); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//...스프레드함수 - 해당요소의 값을 추출
const newNumbers2 = [...numbers, 11, 12, 13, 14, 15]; 
console.log(newNumbers2); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15 ]

const newNumbers3 = numbers.slice(0, 5); //0번 인덱스 이상 5번 인덱스 미만
console.log(newNumbers3); //[ 1, 2, 3, 4, 5 ]
const newNumbers31 = numbers.slice(5);
console.log(newNumbers31); //[ 6, 7, 8, 9 ]

console.log("========")

const newNumbers4 = numbers
 .slice(0, numbers.indexOf(4)) //index 0번부터 숫자4가 있는 인덱스 이전까지 추출
 .concat(numbers.slice(numbers.indexOf(4) + 1)); // 숫자4가 있는 인덱스 이후부터 추출
console.log(newNumbers4); //[ 1, 2, 3, 5, 6, 7, 8, 9 ]

//const newNumbers5 = numbers.splice(3); //index부터 전부 추출
//console.log(newNumbers5);
const newNumbers51 = numbers.splice(3, 1); //(index, 추출수량)
console.log(newNumbers51);
console.log(numbers); //numbers에 적용됨

const newNumbers6 = numbers.splice(4, 2, 11, 12); //(index, 추출수량, 추출할 자리에 해당 값 부여)
console.log(newNumbers6);
console.log(numbers); 

numbers.splice(4, 0, 20, 21);
console.log(numbers); //js에서는 세미콜론 생략가능
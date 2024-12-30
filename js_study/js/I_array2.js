const user1 = {
    username: "aaa",
    password: "111"
}
const user2 = {
    username: "bbb",
    password: "222"
}
const user3 = {
    username: "ccc",
    password: "333"
}

const users = [user1, user2, user3];

const usersInfoString = users.map(user => `사용자명: ${user.username}, 비밀번호: ${user.password}`);
console.log(usersInfoString);


const userComponents = users.map(user =>
    `
    <label>사용자이름</label>
    <div>${user.username}</div>
    <label>비밀번호</label>
    <div>${user.password}</div>
    `
).join("");

console.log(userComponents);



const users2 = users.filter(user => user.username !== "bbb");
console.log(users2);


//users에서 ccc를 제거하고 bbb를 ddd로 변환하기
const users3 = users.map(user => {
    if(user.username === "bbb") {
        return {
            ...user,
            username: "ddd",
        };
    }
    return user;
}).filter(user => user.username !== "ccc");
console.log(users3);



//[1,2,3,4,5] => [2,4,6,8,10]
const nums = [1, 2, 3, 4, 5];
const nums2 = nums.map(n => n * 2);
console.log(nums2);

const nums3 = nums.map(n => {
    if(n % 2 === 0) {
        return n * 2;
    }
    return n;
})
console.log(`${nums} ===> ${nums3}`);
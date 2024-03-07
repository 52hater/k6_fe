let arr = ['🍓', 1, '🍌🍌', 2, '🍉🍉🍉', 3, ]
console.log("배열 : ", arr);

let arr1 = [0,0,0,0,0,]
for(let i in arr) {
    arr1[i] = arr[i];
}
console.log("반복문 인덱스로 arr1 = ", arr1)

let arr2 = [];
console.log("arr2 = ", arr2);

//전개연산자
let arr22 = [...arr]; //... 배열을 해체시켜서 새로운배열에 넣는다 /페이지 더보기에 씀/기존배열놔두고 추가해서 배열을 더 집어넣을때
console.log("전개연산자 : ", arr22);//어레이를 똑같이 복사하고 싶으면 전개연산자 > 엄청많이씀
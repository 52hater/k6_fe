//자바스크립트 데이터 타입
//기본 타입
//const 아니면 let const는 안바뀜 let은 바뀔 수 있다
let n1 = 10;//정수
let n2 = 10.5;//실수
let s1 = "안녕하세요."//문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);//문자열:배열과 비슷
//문자열 순회
//파이썬의 for in 이 자바스크립트의 for of
//자바스크립트의 for in은 순서대로 01234 인덱스를 가지고 옴 arr[0]=안
//for of 는 c는 요소값 그대로 가지고 옴
for(let i in s1) {//in을쓰면 키값이 나와(문자열의 키는 인덱스) 인으로 돌면 키 값
    console.log("문자열 : ", s1[i]);
}
for(let c of s1) {//오브로 돌면 값을 가지고 옴//두 개 차이점 알아야
    console.log("문자열 : ", c);
}
console.log("문자열 : ", s1[1]);

//배열
let arr = ['😊', 1, '😂😂', 2, '😁😁😁', 3, ]//파이썬의 리스트와 흡사//테일링쉼표 사용가능/기호주의
console.log("배열 : ", arr);
console.log("배열의 요소 접근 : ", arr[1]);

//배열의 순회
console.log("배열 for in")
for(let i in arr) {//in을쓰면 키값이 나와(문자열의 키는 인덱스) 인으로 돌면 키 값
    console.log("배열 : ", arr[i]);
}
for(let c of arr) {//오브로 돌면 값을 가지고 옴//두 개 차이점 알아야
    console.log("배열 : ", c);
}//인은 인덱스(키) 오브는 요소(값)

//배열에는 map함수가 있음 (****)
console.log("배열의 map함수")//for of 하고 똑같음 그런데 배열을쓸때는 맵을 쓰면 됨(한개씩 접근)
let arr2 = arr.map((v, i) => {//두개를 줄 수 있다//값이 먼저 나오고 인덱스가 나옴 //배열 arr이 가지고 있는 메소드, 인수로 콜백함수를 가짐
    console.log("map: v", v);
    console.log("map: i", i);//값과 인덱스를 받으려면 map으로 받으면 됨
    return v + "❤";//붙여서 맵함수의 결과를 리턴하는데 결과를 받아서 컨스트 arr2를 만들 수 있음//함수니까 리턴할수있지
    //리턴된걸 모아야지 > const arr2로//배열의 개수만큼 리턴//arr2는 arr과 개수가 같음
    //arr을 돌면서 리턴을 한거를 배열에다가 모은거니까
    //그래서 맵은 원래배열의 개수와 동일한 개수가 나옴
}); //내부에 콜백함수

console.log("arr2 =" + arr2);
//arr.map(() => {});//이렇게 인수로 콜백함수를 가짐, 파라미터가 들어와야하는데
//arr.map((v) => {//v는 아무거나 쓴 것
    
//    return v //리턴

//
console.log("배열 맵함수 : 콜백");
//콜백의 인수가 1개인 경우는 () 생략가능
//콜백의 body에 실행문이 없고 return문만 있으면 {}와 return 생략 가능
arr2 = arr.map( v => v+"❤");//앞으로 이런 코드를 많이 쓰게 될 것
console.log("arr2 = ", arr2)


//오브젝트
let obj = {'😊' : 1, '😂😂' : 2, '😁😁😁' : 3,};//맨뒤에 의미없고 오류없는 쉼표 : 테일링 쉼표 tailing 쉼표 사용가능/기호주의//키/밸류(스마일/1)
console.log("오브젝트 : ", obj);
console.log("오브젝트 요소 접근 : ", obj['😊']);

//오브젝트 순회 > 키하고 값을 쌍으로 갖고와야함
console.log("오브젝트 for in");
for(let i in obj) {//in을쓰면 키값이 나와(문자열의 키는 인덱스) 인으로 돌면 키 값
    console.log("오브젝트 : ", obj[i]);
}
console.log("오브젝트 for of");
for(let c of Object.entries(obj)) {//앞에것이 키 뒤엣것이 값
    console.log("오브젝트 : ", c);
}
for(let c of Object.entries(obj)) {
    console.log("오브젝트 : ", c);
    console.log("오브젝트 : ", c[0]);
    console.log("오브젝트 : ", c[1]);
}


for(let [k, v] of Object.entries(obj)) {
    console.log("오브젝트 : ", k);
    console.log("오브젝트 : ", v);//구조분해
}

//오브젝트는 맵을 못씀, 이런식으로는 할 수 있지
console.log("오브젝트 키배열 :", Object.keys(obj));
let arr3 = Object.keys(obj).map(k => k + obj[k]);
console.log("arr3 =", arr3)
//오브젝트에 접근할때는 대괄호

//문자열 배열 오브젝트는 여러개가 한 묶음, 한개씩 한개씩 접근할 수 있어야 됨
//자바스크립트의 오브젝트는 파이썬의 딕셔너리라고 보면 됨>딕셔너리.items 를쓰면 for in을 쓰면 키/값 쌍으로 갖고옴(파이썬)

//딕셔너리는 키/값 구분이 되는구나 하고 이해

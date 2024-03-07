let arr1 = [1, 2, 3] ;
// 요소가 primitive type인 경우는 깊은복사(deep copy)효과
let arr2 = arr1.map(v => v) ;//맵으로 배열안의내용을 한개씩 돌아서 복사  > 한개한개는 프리미티브타입 > 그대로 리턴해서 arr2에 갖다줌

console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);

arr2[0] = arr2[0] * 10 ; //arr2의 제로인덱스값을 바꿈
console.log("arr1 = ", arr1);//arr1 안바뀜, 딥카피
console.log("arr2 = ", arr2);

arr1 = [[1,2], [3,4]] ;//배열안에 배열이 들어있음, arr1의 요소는 2개, 요소가 배열, 파이썬의리스트개념이 js의 배열느낌
// 요소가 reference type인 경우는 얕은복사(shallow copy)효과
arr2 = arr1.map(v => v) ;//맵을쓰는건 똑같음, v하나에 배열이 들어가게 됨, 맵을돌면서 나오는내용을 한개씩 끄집어내서 arr2에 갖다 넣음, 참조가 됨(?)

// 요소가 reference type인 경우는 깊은복사(deep copy)효과
// JSON.stringify() : 객체를 JSON 문자열로 변환
// JSON.parse() :  JSON 형식의 문자열을 JavaScript 값이나 객체로 변환
let arr3 = JSON.parse(JSON.stringify(arr1));
//let arr3 = arr2.map > 이렇게 하면 3도 바뀜

arr2[0][1] = arr2[0][1] * 10 ;//arr2를 바꿨는데 arr1도 바뀌어있더라(shallow copy) > 안그러고 싶으면? > 제이슨형태의 문자열로 프리미티브타입형식으로 감 > 딥카피로
//근데 문자열의 형태를 다시 바꿔야되니까 그게 parseint
console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);
console.log("arr3 = ", arr3);

// === : 자바스크립트에서만/타입까지 같이 비교하는 것/2=='2'는 트루, 2==='2'는 폴스, 값은 같은데 데이터타입이 다름, 숫자타입 문자열타입
//'2'-'1' = '1'이 나옴, -연산자를 만나면 알아서 정수형으로, 근데 '2'+'1' = '21', +가 연결연산자로 사용된 것
// = >> shallow copy //레퍼런스형(참조형) //같은주솟값
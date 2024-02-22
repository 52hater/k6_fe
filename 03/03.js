/* 함수 작성 방법 1, function키워드 */
/* function handleClick(n) {
    // 핸들클릭이라는 함수를 만들고 msgArea라는 div아이디를 잡아와서 속성값 안녕하세요를 적어줌(메시지영역 가져오기1)
    // document.getElementById("msgArea").innerHTML = "안녕하세요";(메시지영역 가져오기1)

    //태그를 넣고 스타일링도 해줄 수 있다(메시지영역 가져오기2)
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이(가) 눌러졌습니다.<h2>";(메시지영역 가져오기2)

    //document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이(가) 눌러졌습니다.<h2>`;
    //백틱문자열 ${} 엄청많이씀!
} */

/* 함수 작성 방법 2, 화살표 함수 : 변수 선언할 때 var(요새안씀)/const(상수선언)(불변)/let(변수선언)(가변)
상수에 값만 쓸 수 있는게 아닌 함수도 들어가 */

const handleClick = (n) => {
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이(가) 눌러졌습니다.<h2>`;
}
//const키워드로 함수작성
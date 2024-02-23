//DOM tree가 완성 된 후 실행
document.addEventListener("DOMContentLoaded", () => {//이벤트에 귀를 기울이고 있다가 돔컨텐트완성됐다는 이벤트를 감지해서 저 콜백함수를 실행시킴
    console.log("DOMContentLoaded ok");
    //콜백함수 addEventListener 의 인수로 함수를 쓸 수도 있음 그런게 콜백함수 //그걸 이해해야 괄호 열고닫고가 원활하게 가능//함수에는 중괄호
    //console.log() > sysoutpln을 해보는 것, 디버깅보다 빠름, f12에 콘솔쪽 로그에 찍혀나옴, 내가 한게 잘 됐나 싶을때 확인

    //버튼 생성
    const bt3 = document.createElement("button");//bt3선언
    const bt3Txt = document.createTextNode("버튼3");//버튼의 텍스트노드를 만들고
    bt3.appendChild(bt3Txt);//버튼의자식노드?에 밀어넣었어//아무것도 없는 상태에서 만들어넣을 수 있다(리액트가 이런식으로 함)

    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");
    bt4.appendChild(bt4Txt);

    //버튼 추가하기
    document.querySelector("#btArea2").append(bt3);//선택자 쿼리셀렉터, 어펜드로 밀어줘

    document.querySelector("#btArea2").append(bt4);

    //버튼 이벤트 달기
    bt3.addEventListener("click", () => {
        handleClick(3);
    });//클릭이벤트 발생하면 콜백함수 실행
    bt4.addEventListener("click", () => {
        handleClick(4);
    });

    bt3.setAttribute("id", "bt3");
});




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

// const handleClick = (n) => {

//     if
//         document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이(가) 눌러졌습니다. 잘하셨습니다.<h2>`;
//     else
//         document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이(가) 눌러졌습니다. 꽝입니다.<h2>`;
// }
//const키워드로 함수작성, if~else문 사용

const handleClick = (n) => {
    let msg;//let을 썼네? 공부해
    if (n == 1)
        msg = `<h2>안녕하세요"<h2>`;
    else if (n == 2)
        msg = `<h2>안녕히가세요<h2>`;
    else if (n == 3)
        msg = `<h2>이제오지마세요<h2>`;
    else
    msg = `<h2>버튼 ${n} 클릭<h2>`;

    document.querySelector("#msgArea").innerHTML = msg; //셀렉터 쿼리셀렉터

}